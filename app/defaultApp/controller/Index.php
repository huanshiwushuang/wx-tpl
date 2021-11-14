<?php

namespace app\defaultApp\controller;

use think\facade\View;

class Index extends Base
{
    public function index()
    {
        $json_data = View::__get('mock_data');

        if (preg_match('/json/i', request()->header('accept'))) {
            return $json_data;
        }
        return  View::display('', [
            'json_data' => $json_data,
        ]);
    }
}
