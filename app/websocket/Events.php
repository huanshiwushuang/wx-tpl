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
namespace app\websocket;

// https://www.kancloud.cn/walkor/gateway-worker/326109

use app\common\common;
use app\websocket\WxGateway;
use app\websocket\controller\Record;
use Workerman\Lib\Timer;
use think\worker\Events as ThinkWorkerEvents;

/**
 * 架构
 * C: 客户端
 * W: WebSocket 服务端
 * H: HTTP 服务端
 * 
 * 过程, 整个过程类似 Auth2.0
 * 1. C 连接 W
 * 2. W 发送 client_id 和 init 命令到 C
 * 3. C 发送 client_id 到 H, 请求验证, 验证通过后, H 发送 client_id 和 uid 到 W，绑定 client_id 和 uid
 * 4. C 发送 init_complete 到 W, 通知初始化完成, 验证通过后, 即可进行数据传递
 */

/* 
数据结构
{
    path: '',
    params: {
        check: '',
    }
}
*/

/**
 * Worker 命令行服务类
 */

class Events extends ThinkWorkerEvents
{
    public static $session_default = [
        // 是否完成了初始化，绑定 uid
        'init_complete' => false,
        // 关闭连接: 定时器
        'init_timer_id' => null,
        'uid' => null,
    ];
    // 默认数据格式
    public static $data_php_default = [
        // 请求路由
        'path' => '',
        // 请求参数
        'params' => [
            // 参数检查 code
            'check' => ''
        ]
    ];
    public static function onConnect($client_id)
    {
        // 请求客户端初始化
        WxGateway::sendInit();

        // 初始化 session
        $_SESSION = array_merge([], Events::$session_default);

        // 定时，** 秒后关闭连接
        $_SESSION['init_timer_id'] = Timer::add(3, function ($client_id) {
            WxGateway::closeClient($client_id, 'init timeout');
        }, [
            $client_id
        ], false);
    }
    // 覆盖默认操作
    public static function onWebSocketConnect($client_id, $data)
    {
    }
    public static function onMessage($client_id, $data)
    {
        // 关键：第 2 个参数指定将递归解析为关联数组
        $data_php = json_decode($data, true);

        /**
         * json 校验
         * */
        if (!is_array($data_php)) {
            return WxGateway::sendToCurrentClient(json_encode([
                'path' => 'error',
                'msg' => 'data format error, require json',
            ]));
        }

        // 递归覆盖选项
        $data_php = array_replace_recursive([], Events::$data_php_default, $data_php);

        // 将 数据 还原成符合 json 语义的 php 对象格式
        $data_php = json_decode(json_encode($data_php));

        switch ($data_php->path) {
            case 'init_complete':
                // 如果已经初始化了
                if ($_SESSION['init_complete']) {
                    return WxGateway::sendToCurrentClient(json_encode([
                        'path' => 'error',
                        'msg' => 'init complete already',
                    ]));
                }
                // 检查是否初始化完成
                $uid = WxGateway::getUidByClientId($client_id);

                if (empty($uid)) {
                    return WxGateway::sendToCurrentClient(json_encode([
                        'path' => 'error',
                        'msg' => 'init complete check did not pass',
                    ]));
                }
                // ************************************************************
                // 修改状态
                $_SESSION['init_complete'] = true;
                $_SESSION['uid'] = $uid;

                WxGateway::sendToCurrentClient(json_encode([
                    'path' => 'success',
                    'msg' => 'init complete check passed',
                ]));
                // ************************************************************
                // 删除定时器
                Timer::del($_SESSION['init_timer_id']);
                unset($_SESSION['init_timer_id']);
                // ************************************************************
                // 保持一个用户只有一个 socket 在线
                $array_client_id = WxGateway::getClientIdByUid($uid);

                foreach ($array_client_id as $item_client_id) {
                    // 除了当前 client, 其他都断开
                    if ($item_client_id !== $client_id) {
                        WxGateway::closeClient($client_id, 'only one client online');
                    }
                }
                // ************************************************************
                // 通知，client 可以发送数据了
                WxGateway::sendToCurrentClient(json_encode([
                    'path' => 'init_complete',
                ]));
                return;
        }

        // 尚未初始化
        if (!$_SESSION['init_complete']) {
            return WxGateway::sendInit();
        }
        // ************************************************************
        // 如果有 check 参数, 进行参数校验
        if ($data_php->params->check) {
            $res = common::check_params($data_php->params->check, $data_php->params);
            if ($res) {
                switch (ENV) {
                    case 'development':
                        return WxGateway::sendToCurrentClient(json_encode($res, JSON_UNESCAPED_UNICODE));
                    default:
                        unset($res->msg);
                        return WxGateway::sendToCurrentClient(json_encode($res, JSON_UNESCAPED_UNICODE));
                }
            }
        }

        // ************************************************************
        /**
         * 根据 path, 自定义路由
         */

        return WxGateway::sendToCurrentClient(json_encode($data_php));

        switch (strtolower($data_php->path)) {
            case 'record':
                // rrweb record
                Record::onMessage($client_id, $data_php);
                break;
            default:
                WxGateway::sendToCurrentClient(json_encode([
                    'path' => 'error',
                    'msg' => 'path field have not match',
                ]));
        }
    }
    public static function onClose($client_id)
    {
    }
}
