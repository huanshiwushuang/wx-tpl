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
        $page = [
            't' => '我是日签的 title',
            'k' => '我是日签的 keywords',
            'd' => '我是日签的 description',
            'json' => [],
        ];

        if (preg_match('/json/i', request()->header('accept'))) {
            return $page;
        }
        return  View::display('', $page);
    }
}
