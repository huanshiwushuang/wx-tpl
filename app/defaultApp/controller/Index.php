<?php

namespace app\defaultApp\controller;

use think\facade\View;

class Index extends Base
{
    public function index()
    {
        // dump(View::__get('mock_data'));
        return View::fetch('index/index');
    }
}
