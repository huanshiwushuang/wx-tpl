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
}
