<?php

namespace app\controller;

use think\facade\View;

class Index extends Base
{
    public function index()
    {
        // fetch 数据
        $tpl_var = [
            'data' => View::instance()->fetch('index/index'),
        ];
        // 将数据 塞入 唯一固定的页面输出
        return View::fetch('wp/index', $tpl_var);
    }
}
