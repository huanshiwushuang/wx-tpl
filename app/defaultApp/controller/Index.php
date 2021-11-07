<?php

namespace app\defaultApp\controller;

use think\facade\View;

class Index extends Base
{
    public function index()
    {

        return View::display('', [
            'json_data' => View::__get('mock_data')
        ]);
    }
}
