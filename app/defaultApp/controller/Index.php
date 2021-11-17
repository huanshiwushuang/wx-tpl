<?php

namespace app\defaultApp\controller;

use think\facade\View;

class Index extends Base
{
    public function index()
    {
        $page = [
            't' => '标题',
            'k' => '关键词',
            'd' => '描述',
            'json' => View::__get('mock_data'),
        ];

        if (preg_match('/json/i', request()->header('accept'))) {
            return $page;
        }
        return  View::display('', [
            'page' => $page
        ]);
    }
    public function newest()
    {
        $page = [
            't' => '最新-标题',
            'k' => '最新-关键词',
            'd' => '最新-描述',
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
