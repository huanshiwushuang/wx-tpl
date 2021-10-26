<?php

namespace app\defaultApp\controller;

use app\defaultApp\websocket\data\Data;
use think\facade\Request;
use GatewayClient\Gateway;

// worker 集群注册地址
Gateway::$registerAddress = config('gateway_worker.registerAddress');


class Websocket extends Base
{
	// 绑定 websocket 的 client_id 和 uid
	public function bindUid()
	{
		if (request()->param('check') === 'kv7p8t8q') {
		}
	}
}
