<?php

namespace app\websocket\controller;

use app\websocket\Gateway;

class Record
{
    public static function onMessage($client_id, $data_json)
    {
        Gateway::sendToCurrentClient(json_encode($data_json) . time());
    }
}
