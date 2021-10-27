<?php

namespace app\defaultApp\controller;

use GatewayClient\Gateway;

// worker 集群注册地址
Gateway::$registerAddress = config('gateway_worker.registerAddress');


class Websocket extends Base
{
	// 绑定 websocket 的 client_id 和 uid
	public function bind_uid()
	{
		if (request()->param('check') === 'kv7p8t8q') {
			return '绑定逻辑尚未完成';
		}
	}
}
