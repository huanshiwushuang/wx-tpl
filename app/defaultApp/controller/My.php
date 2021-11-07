<?php

namespace app\defaultApp\controller;

use think\facade\View;

/**
 * 日签
 */
class My extends Base
{
    public function index()
    {
        return View::display('', [
            'json_data' => View::__get('mock_data')
        ]);
    }
}
