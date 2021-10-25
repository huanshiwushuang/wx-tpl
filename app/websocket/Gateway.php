<?php

namespace app\websocket;

use GatewayWorker\Lib\Context;
use GatewayWorker\Lib\Gateway as ParentGateway;
use Workerman\Lib\Timer;

class Gateway extends ParentGateway
{
    /**
     * 貌似 Gatewayworker 的 closeClient 方法，不能正确发送关闭帧，导致前端断开后 closeEvent 的 code 为 1006
     * 所以通知客户端主动关闭
     */
    public static function closeClient($client_id, $message = null)
    {
        $res = [
            'code' => 'close',
            'msg' => $message,
        ];

        // 先通知客户端主动关闭
        parent::sendToClient($client_id, json_encode($res));

        // 然后，服务端关闭
        Timer::add(1, function ($client_id, $message) {
            parent::closeClient($client_id, $message);
        }, [
            $client_id,
            $message
        ], false);
    }
    public static function closeCurrentClient($message = null)
    {
        $res = [
            'code' => 'close',
            'msg' => $message,
        ];

        // 先通知客户端主动关闭
        parent::sendToCurrentClient(json_encode($res));

        // 然后，服务端关闭
        Timer::add(1, function ($message) {
            parent::closeCurrentClient($message);
        }, [
            $message
        ], false);
    }

    // 发送初始化命令
    public static function sendInit()
    {
        Gateway::sendToCurrentClient(json_encode([
            'code' => 'init',
            'client_id' => Context::$client_id,
        ]));
    }
}
