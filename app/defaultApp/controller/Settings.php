<?php

namespace app\defaultApp\controller;

use think\facade\View;

class Settings extends Base
{
    public function index()
    {
        $tpl_var = [
            'T' => '设置-戊戌数据',
            'K' => '设置-我是keywords',
            'D' => '设置-我是description',
        ];

        // fetch 数据页面
        return View::display('', $tpl_var);
    }
}
