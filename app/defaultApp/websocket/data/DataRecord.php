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

class DataRecord
{
    // checkout 数据
    public static function checkout($is_json = false)
    {
        $res = [
            'type' => 'checkout',
        ];

        return $is_json ? $res : json_encode($res);
    }
}
