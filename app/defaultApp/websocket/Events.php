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

use GatewayWorker\Lib\Context;
use GatewayWorker\Lib\Gateway;
use Workerman\Worker;
use think\worker\Events as ThinkEvents;

/**
 * Worker 命令行服务类
 */
class Events extends ThinkEvents
{
	public static function onConnect($client_id)
	{
		Events::execInit();
	}
	public static function onMessage($client_id, $data)
	{
		// 没有绑定 uid，则初始化绑定
		$uid = Gateway::getUidByClientId($client_id);

		if (empty($uid)) {
			return Events::execInit();
		}

		// 每个用户对应一个组，组名是 uid
		Gateway::joinGroup($client_id, $uid);
		// 向所有此组的用户发送数据，不包括自己
		Gateway::sendToGroup($uid, $data, [
			$client_id
		]);
	}
	public static function onClose($client_id)
	{
		GateWay::sendToAll(json_encode([
			'type' => 'logout',
			'client_id' => $client_id,
		]));
	}

	// 执行初始化命令
	public static function execInit()
	{
		Gateway::sendToCurrentClient(json_encode([
			'type' => 'init',
			'client_id' => Context::$client_id,
		]));
	}
}
