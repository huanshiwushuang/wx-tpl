<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK IT ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2018 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------
namespace app\defaultApp\websocket;

// https://www.kancloud.cn/walkor/gateway-worker/326109

use app\defaultApp\websocket\code\Code;
use app\defaultApp\websocket\data\Data;
use app\defaultApp\websocket\send\Send;
use GatewayWorker\Lib\Gateway;
use think\worker\Events as ThinkWorkerEvents;
use app\defaultApp\websocket\controller\Record;
use Throwable;
use Workerman\Lib\Timer;

/**
 * Worker 命令行服务类
 */
class Events extends ThinkWorkerEvents
{
	public static $session = [
		// 是否完成了初始化，绑定 uid
		'inited' => false,
		// 关闭连接: 定时器
		'init_timer_id' => null,
		'uid' => null,
	];
	public static function onConnect($client_id)
	{
		Send::sendInit();

		// 初始化 session
		$_SESSION = array_merge([], Events::$session);

		// 定时，** 秒后关闭连接
		$_SESSION['init_timer_id'] = Timer::add(3, function ($client_id) {
			Send::sendClose($client_id, Code::close_init_timeout());
		}, [
			$client_id
		], false);
	}
	public static function onWebSocketConnect($client_id, $data)
	{
	}
	public static function onMessage($client_id, $data)
	{
		try {
			$data_json = json_decode($data);
		} catch (Throwable $e) {
			return Gateway::sendToCurrentClient(Data::error('data format error, require json'));
		}

		switch ($data_json->type) {
			case 'inited':
				// 如果已经初始化了
				if ($_SESSION['inited']) {
					return Gateway::sendToCurrentClient(Data::error('inited already'));
				}
				// 检查是否初始化完成
				$uid = $_SESSION['uid'];

				if (empty($uid)) {
					$uid = Gateway::getUidByClientId($client_id);
				}
				if (empty($uid)) {
					return Gateway::sendToCurrentClient(Data::error('inited check did not pass'));
				}
				// ************************************************************
				// 修改状态
				$_SESSION['inited'] = true;
				$_SESSION['uid'] = $uid;

				Gateway::sendToCurrentClient(Data::success('inited check passed'));
				// ************************************************************
				// 删除定时器
				Timer::del($_SESSION['init_timer_id']);
				// ************************************************************
				// 保持一个用户只有一个 socket 在线
				// 用户组
				$group_user = Group::user($uid);
				// 保持一个用户只有一个 socket 在线
				$array_client_id = Gateway::getClientIdListByGroup($group_user);

				foreach ($array_client_id as $item_client_id) {
					// 除了当前 client, 其他都断开
					if ($item_client_id !== $client_id) {
						Send::sendClose($item_client_id, Code::close_only_one_online());
					}
				}
				// ************************************************************
				// 加入当前用户组
				Gateway::joinGroup($client_id, $group_user);
				// ************************************************************
				// 通知，client 可以发送数据了
				Send::sendInited();
				return;
		}

		// 尚未初始化
		if (!$_SESSION['inited']) {
			return Send::sendInit();
		}
		// ************************************************************
		// 根据 source 分流
		switch (Data::node_receive($data_json)->source) {
			case 'record':
				Record::onMessage($client_id, $data_json, $data);
				break;
			default:
				return Gateway::sendToCurrentClient(Data::error('have not source field'));
		}
	}
	public static function onClose($client_id)
	{
	}
}
