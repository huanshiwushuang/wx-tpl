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
namespace app\defaultApp\websocket\data;

// https://www.kancloud.cn/walkor/gateway-worker/326109

use GatewayWorker\Lib\Context;

class Data
{
    // 初始化数据
    public static function init($client_id = null, $is_json = true)
    {
        if (!$client_id) {
            $client_id = Context::$client_id;
        }

        $res = [
            'type' => 'init',
            'client_id' => $client_id,
        ];
        return $is_json ? json_encode($res) : $res;
    }
    // 成功数据
    public static function success($success, $is_json = true)
    {
        $res = [
            'type' => 'success',
            'success' => $success
        ];

        return $is_json ? json_encode($res) : $res;
    }
    // 错误数据
    public static function error($error, $is_json = true)
    {
        $res = [
            'type' => 'error',
            'error' => $error
        ];

        return $is_json ? json_encode($res) : $res;
    }
    // 关闭数据
    public static function close($code = null, $is_json = true)
    {
        $res = [
            'type' => 'close',
            'code' => $code,
        ];

        return $is_json ? json_encode($res) : $res;
    }
}
