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
namespace websocket\controller;

// https://www.kancloud.cn/walkor/gateway-worker/326109

use app\websocket\Group;
use GatewayWorker\Lib\Gateway;

class Record
{
	public static function onMessage($client_id, $data_json, $data)
	{
		$uid = $_SESSION['uid'];

		// 用户观看组
		$group_user_watch = Group::user_watch($uid);

		// 先-存储原始数据到数据库，方便之后的用户行为分析
		// 然后-向所有此组的用户推送数据，不包括自己的用户组
		$data_json->source = 'group';
		$data_json->group = $group_user_watch;

		Gateway::sendToGroup(
			$group_user_watch,
			json_encode($data_json)
		);
	}
}
