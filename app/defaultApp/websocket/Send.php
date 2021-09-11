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
use Workerman\Lib\Timer;

class Send
{
	// 发送-初始化命令
	public static function sendInit($client_id = null)
	{
		if (!$client_id) {
			$client_id = Context::$client_id;
		}

		$res = [
			'type' => 'init',
			'client_id' => $client_id,
		];

		if (!$client_id) {
			return $res;
		}
		Gateway::sendToClient($client_id, json_encode($res));
	}
	// 发送-成功提示
	public static function sendSuccess($success, $client_id = null)
	{
		$res = [
			'type' => 'success',
			'success' => $success
		];
		if (!$client_id) {
			$client_id = Context::$client_id;
		}
		if (!$client_id) {
			return $res;
		}
		Gateway::sendToClient($client_id, json_encode($res));
	}
	// 发送-错误提示
	public static function sendError($error, $client_id = null)
	{
		$res = [
			'type' => 'error',
			'error' => $error
		];
		if (!$client_id) {
			$client_id = Context::$client_id;
		}
		if (!$client_id) {
			return $res;
		}
		Gateway::sendToClient($client_id, json_encode($res));
	}
	// 貌似 Gatewayworker 的 closeClient 方法，不能正确发送关闭帧，导致前端断开后 closeEvent 的 code 为 1006
	// 所以通知客户端主动关闭
	public static function sendClose($client_id = null)
	{
		$res = [
			'type' => 'close',
		];
		if (!$client_id) {
			$client_id = Context::$client_id;
		}
		if (!$client_id) {
			return $res;
		}
		// 先通知客户端主动关闭
		Gateway::sendToClient($client_id, json_encode($res));
		// 然后 1s 后，服务端关闭
		Timer::add(1, function ($client_id) {
			Gateway::closeClient($client_id);
		}, [
			$client_id
		], false);
	}
}
