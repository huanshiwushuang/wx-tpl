<?php

namespace app\defaultApp\controller;

use think\facade\View;

/**
 * 日签
 */
class DaySign extends Base
{
    public function index()
    {
        $json_data = [];

        if (preg_match('/json/i', request()->header('accept'))) {
            return $json_data;
        }
        return  View::display('', [
            'json_data' => $json_data,
        ]);
    }
}
