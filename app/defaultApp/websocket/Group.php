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

// 组名由 json 字符串组成
class Group
{
	// 返回-用户组
	public static function user($uid, $return_json = false)
	{
		$res = [
			'type' => 'user',
			'uid' => $uid,
		];

		return $return_json ? $res : json_encode($res);
	}
	// 返回-用户观看组
	public static function user_watch($uid, $return_json = false)
	{
		$res = [
			'type' => 'user_watch',
			'uid' => $uid,
		];

		return $return_json ? $res : json_encode($res);
	}
}
