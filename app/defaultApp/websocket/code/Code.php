<?php

namespace app\defaultApp\websocket\code;

class Code
{
    public static $env = 'development';

    // 关闭-只能一个客户端在线
    public static function close_only_one_online()
    {
        return Code::$env === 'development' ? __FUNCTION__ : 'kth0yyny';
    }
    // 关闭-初始化超时
    public static function close_init_timeout()
    {
        return Code::$env === 'development' ? __FUNCTION__ : 'kth2wkdy';
    }
}
