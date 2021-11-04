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
        return View::fetch('day_sign/index');
    }
}
