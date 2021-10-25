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
use app\websocket\Gateway;
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
    public static function onConnect($client_id)
    {
        // 请求客户端初始化
        Gateway::sendInit();

        // 初始化 session
        $_SESSION = array_merge([], Events::$session_default);

        // 定时，** 秒后关闭连接
        $_SESSION['init_timer_id'] = Timer::add(3, function ($client_id) {
            Gateway::closeClient($client_id, 'init timeout');
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
        $data_json = json_decode($data);

        /**
         * json 校验
         * */
        if (!is_object($data_json)) {
            return Gateway::sendToCurrentClient(json_encode([
                'code' => 'error',
                'msg' => 'data format error, require json',
            ]));
        }

        switch ($data_json->code) {
            case 'init_complete':
                // 如果已经初始化了
                if ($_SESSION['init_complete']) {
                    return Gateway::sendToCurrentClient(json_encode([
                        'code' => 'error',
                        'msg' => 'init complete already',
                    ]));
                }
                // 检查是否初始化完成
                $uid = $_SESSION['uid'];

                if (empty($uid)) {
                    $uid = Gateway::getUidByClientId($client_id);
                }
                if (empty($uid)) {
                    return Gateway::sendToCurrentClient(json_encode([
                        'code' => 'error',
                        'msg' => 'init complete check did not pass',
                    ]));
                }
                // ************************************************************
                // 修改状态
                $_SESSION['init_complete'] = true;
                $_SESSION['uid'] = $uid;

                Gateway::sendToCurrentClient(json_encode([
                    'code' => 'success',
                    'msg' => 'init complete check passed',
                ]));
                // ************************************************************
                // 删除定时器
                Timer::del($_SESSION['init_timer_id']);
                // ************************************************************
                // 保持一个用户只有一个 socket 在线
                $array_client_id = Gateway::getClientIdByUid($uid);;

                foreach ($array_client_id as $item_client_id) {
                    // 除了当前 client, 其他都断开
                    if ($item_client_id !== $client_id) {
                        Gateway::closeClient($client_id, 'only one client online');
                    }
                }
                // ************************************************************
                // 通知，client 可以发送数据了
                Gateway::sendToCurrentClient(json_encode([
                    'code' => 'init_complete',
                ]));
                return;
        }

        // 尚未初始化
        if (!$_SESSION['init_complete']) {
            return Gateway::sendInit();
        }
        // ************************************************************
        /**
         * 根据 code, 自定义路由
         */
        switch (strtolower($data_json->code)) {
            case 'record':
                // rrweb record
                Record::onMessage($client_id, $data_json);
                break;
            default:
                Gateway::sendToCurrentClient(json_encode([
                    'code' => 'error',
                    'msg' => 'code field have not match',
                ]));
        }
    }
    public static function onClose($client_id)
    {
    }
}
