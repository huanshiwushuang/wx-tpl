<?php

namespace app\defaultApp\controller;

use app\defaultApp\websocket\Group;
use app\defaultApp\websocket\Send;
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
		$uid = Request::cookie('PHPSESSID');

		if (!empty($client_id) && !empty($uid)) {
			Gateway::bindUid($client_id, $uid);
		} else {
			return Send::sendError('params error');
		}
	}
	// 将用户加入 Group
	public function joinGroup()
	{
		// 暂时如此做，理当有自己的业务判断逻辑
		$password = Request::param('password');
		$client_id = Request::param('client_id');
		$uid = Request::param('uid');

		if ($password !== 'kte43xy2kte43yokkte43ze8kte4402pkte4410r') {
			return Send::sendError('password error', $client_id);
		}

		if (!empty($client_id) && !empty($uid)) {
			// 获取所有 group
			$array_group = Gateway::getAllGroupIdList();
			// 组名
			$group_user_watch = Group::user_watch($uid);
			$group_user_watch_json = Group::user_watch($uid, true);


			// 离开所有 watch 组
			foreach ($array_group as $group) {
				$group_json = json_decode($group);
				if ($group_json->type === $group_user_watch_json['type']) {
					Gateway::leaveGroup($client_id, $group);
				}
			}

			Gateway::joinGroup($client_id, $group_user_watch);

			Send::sendSuccess('join success', $client_id);
		} else {
			return Send::sendError('params error', $client_id);
		}
	}
}
