<?php

namespace app\websocket;

use GatewayClient\Gateway;
use Workerman\Lib\Timer;

class WxGatewayClient extends Gateway
{
    /**
     * 貌似 Gatewayworker 的 closeClient 方法，不能正确发送关闭帧，导致前端断开后 closeEvent 的 code 为 1006
     * 所以通知客户端主动关闭
     */
    public static function closeClient($client_id, $message = null)
    {
        $res = [
            'path' => 'close',
            'msg' => $message,
        ];

        // 先通知客户端主动关闭
        parent::sendToClient($client_id, json_encode($res));

        // 然后，服务端关闭
        Timer::add(1, function ($client_id) {
            parent::closeClient($client_id);
        }, [
            $client_id,
        ], false);
    }
}
