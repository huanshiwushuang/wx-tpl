<?php

namespace app\defaultApp\controller;

use app\common\common;
use think\facade\Request;
use think\facade\View;
use JsonSchema\Validator;

class Example extends Base
{
    public function index(Request $request)
    {
        // 获取所有参数
        $qs = $request::param();

        // 读取 schema
        $schema = common::load_schema([
            'defaultApp',
            'controller',
            'example',
            'list.back.json5',
        ]);
        
        // 校验数据
        // if () {

        // }

        


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
