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
        $page = [
            't' => '标题111111111',
            'k' => '关键词22222222222',
            'd' => '描述3333333',
            'json' => [],
        ];

        if (preg_match('/json/i', request()->header('accept'))) {
            return $page;
        }
        return View::display('', [
            'page' => $page,
        ]);
    }
}
