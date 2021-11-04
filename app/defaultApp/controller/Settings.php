<?php

namespace app\defaultApp\controller;

use think\facade\View;

// 用于前端的设置页面
class Settings extends Base
{
    public function index()
    {
        return View::display('');
    }
}
