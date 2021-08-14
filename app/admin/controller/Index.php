<?php

namespace app\admin\controller;

use think\facade\View;

class Index extends Base
{
    public function index()
    {
        return '我是 index';
    }
    public function about()
    {
        return '我是 about';
    }
}
