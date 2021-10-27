<?php

namespace app\defaultApp\controller;

use think\facade\View;

class Index extends Base
{
    public function index()
    {
        $tpl_var = [
            'T' => '首页-戊戌数据',
            'K' => '首页-我是keywords',
            'D' => '首页-我是description',
        ];


        dump(lang('kv91zomi'));


        // exit;
        // fetch 数据页面
        return View::fetch('index/index', $tpl_var);
    }
    public function about()
    {
        $tpl_var = [
            'T' => '关于我们-戊戌数据',
            'K' => '关于我们-我是keywords',
            'D' => '关于我们-我是description',
        ];

        // fetch 数据页面
        return View::fetch('index/about', $tpl_var);
    }
}
