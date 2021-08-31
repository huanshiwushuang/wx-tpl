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
namespace app\defaultApp\socket;

use GatewayWorker\Lib\Gateway;
use Workerman\Worker;
use think\worker\Events as ThinkEvents;

/**
 * Worker 命令行服务类
 */
class Events extends ThinkEvents
{
	public static function onMessage($client_id, $data)
	{
		Gateway::sendToAll($data);
	}
}
