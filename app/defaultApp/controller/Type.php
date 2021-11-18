<?php

namespace app\defaultApp\controller;

use think\facade\View;

/**
 * 日签
 */
class Type extends Base
{
    public function index()
    {
        $page = [
            't' => '分类-标题',
            'k' => '分类-关键词',
            'd' => '分类-描述',
            'json' => View::__get('mock_data'),
        ];

        if (preg_match('/json/i', request()->header('accept'))) {
            return $page;
        }
        return  View::display('', [
            'page' => $page
        ]);
    }
}
