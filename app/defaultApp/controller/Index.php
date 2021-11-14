<?php

namespace app\defaultApp\controller;

use think\facade\View;

class Index extends Base
{
    public function index()
    {
        $json_data = View::__get('mock_data');

        return preg_match('/json/i', request()->header('accept')) ? $json_data : View::display('', [
            'json_data' => $json_data,
        ]);
    }
}
