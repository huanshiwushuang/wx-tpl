<?php

namespace app\defaultApp\controller;

use app\websocket\WxGatewayClient;

// worker 集群注册地址
WxGatewayClient::$registerAddress = config('gateway_worker.registerAddress');

class Websocket extends Base
{
	// 绑定 websocket 的 client_id 和 uid
	public function bind_uid()
	{
		if (request()->param('check') === 'kv7p8t8q') {
			return WxGatewayClient::bindUid(request()->param('client_id'), request()->param('uid'));
		}
	}
}
