<?php

namespace app\defaultApp\controller;

use think\facade\Request;
use think\facade\View;

class Example extends Base
{
    public function index(Request $request)
    {
        dump(ROOT_APP);
        exit;
        // 获取所有参数
        $qs = $request::param();

        dump($qs);
        exit;

        $tpl_var = [
            'T' => '首页-戊戌数据',
            'K' => '首页-我是keywords',
            'D' => '首页-我是description',
        ];

        // fetch 数据页面
        return View::fetch('index/index', $tpl_var);
    }
}
