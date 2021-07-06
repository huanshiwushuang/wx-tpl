<?php

namespace app\controller;

use think\facade\View;

class Index extends Base
{
    public function index()
    {
        // fetch html 数据 作为 data
        $tpl_var = [
            'data' => View::instance()->fetch('index/index'),
        ];
        // 将数据 塞入 唯一固定的页面输出
        return View::fetch('main/index', $tpl_var);
    }
}
