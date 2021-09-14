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
use stdClass;

class Data
{
    // 嵌套的树形结构数据，以 node 作为一个节点
    // 发送的 node
    public static function node_send(array $merge_node): array
    {
        return array_merge([
            // 转发-数据
            'dist' => null,
            // 数据-类型
            'type' => null,
        ], $merge_node);
    }
    // 嵌套的树形结构数据，以 node 作为一个节点
    // 接收的 node
    public static function node_receive(object $merge_node): object
    {
        return (object)array_merge([
            // 数据-来源
            'source' => null,
            // 数据-类型
            'type' => null,
        ], (array)($merge_node));
    }
    // 初始化数据
    public static function init($client_id = null, $is_json = true)
    {
        if (!$client_id) {
            $client_id = Context::$client_id;
        }

        $res = Data::node_send([
            'type' => 'init',
            'client_id' => $client_id,
        ]);

        return $is_json ? json_encode($res) : $res;
    }
    // 初始化完成数据
    public static function inited($is_json = true)
    {
        $res = Data::node_send([
            'type' => 'inited',
        ]);

        return $is_json ? json_encode($res) : $res;
    }
    // 成功数据
    public static function success($success, $is_json = true)
    {
        $res = Data::node_send([
            'type' => 'success',
            'success' => $success
        ]);

        return $is_json ? json_encode($res) : $res;
    }
    // 错误数据
    public static function error($error, $is_json = true)
    {
        $res = Data::node_send([
            'type' => 'error',
            'error' => $error
        ]);

        return $is_json ? json_encode($res) : $res;
    }
    // 关闭数据
    public static function close($code = null, $is_json = true)
    {
        $res = Data::node_send([
            'type' => 'close',
            'code' => $code,
        ]);

        return $is_json ? json_encode($res) : $res;
    }
}
