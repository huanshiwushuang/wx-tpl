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
namespace websocket\send;

// https://www.kancloud.cn/walkor/gateway-worker/326109

use app\websocket\data\Data;
use GatewayWorker\Lib\Context;
use GatewayWorker\Lib\Gateway;
use Workerman\Lib\Timer;

class Send
{
    // 貌似 Gatewayworker 的 closeClient 方法，不能正确发送关闭帧，导致前端断开后 closeEvent 的 code 为 1006
    // 所以通知客户端主动关闭
    public static function sendClose($client_id = null, $code = null)
    {
        // $res = Data::close($code);

        // 先通知客户端主动关闭
        Gateway::sendToClient($client_id, $res);
        // 然后 200ms 后，服务端关闭
        Timer::add(1, function ($client_id) {
            Gateway::closeClient($client_id);
        }, [
            $client_id
        ], false);
    }
}
