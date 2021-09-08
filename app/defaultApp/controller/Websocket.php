<?php

namespace app\defaultApp\controller;

use think\facade\View;
use think\facade\Request;
use GatewayClient\Gateway;

// worker 集群注册地址
Gateway::$registerAddress = config('gateway_worker.registerAddress');

class Websocket extends Base
{
	// 绑定 websocket 的 client_id 和 uid
	public function bindUid()
	{
		$client_id = Request::param('client_id');
		$sessid = Request::cookie('PHPSESSID');

		if (!empty($client_id) && !empty($sessid)) {
			Gateway::bindUid($client_id, $sessid);
		} else {
			return '参数错误';
		}
	}
	// 将用户加入 Group
	public function getEventByUid()
	{
		$client_id = Request::param('client_id');
		$group = Request::param('group');

		if (!empty($client_id) && !empty($group)) {
			Gateway::leaveGroup($client_id, $group);
			Gateway::joinGroup($client_id, $group);
		} else {
			return '参数错误';
		}
	}
}
