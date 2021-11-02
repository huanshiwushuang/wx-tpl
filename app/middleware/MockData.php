<?php

declare(strict_types=1);

namespace app\middleware;

use app\helper;
use think\facade\View;

/**
 * 说明：
 * query 中加上 mock 参数，
 * 将自动读取 /app 下的所有 *.mock.json5 数据
 * 根据当前访问的 path 部分，匹配对应的 mock rule
 * 生成的 mock 数据使用 View::assign 合并
 * 
 * 开发者，可以在 controller 中，assign 同名的变量，以覆盖 mock 的数据
 * 
 */
class MockData
{
    /**
     * 处理请求
     *
     * @param \think\Request $request
     * @param \Closure       $next
     * @return Response
     */
    public function handle($request, \Closure $next)
    {
        // 请求模拟数据, 当然, 控制器中的同名变量会覆盖 mock 的变量
        if (isset($request->param()['mock']) && ENV === 'development') {
            // 默认数据
            $data_default = [];
            // 模拟数据
            $data_mock = [];

            // 获取所有的 mock 数据
            $mock_rules = helper::get_mock_rules();
            $url = $request->baseUrl();

            // 遍历所有 mock 规则
            $matched_rules = [];
            foreach ($mock_rules as $rule) {
                // 使用 node 正则匹配 当前 baseUrl
                $is_matched = helper::eval_js('kvi0k0i3', "
                    console.log(
                        (new RegExp('$rule->rurl', 'i')).test('$url') - 0
                    );
                ");
                // 如果匹配成功
                if ($is_matched === '1') {
                    array_push($matched_rules, $rule);
                }
            }

            // 有多少个 mock 规则
            switch (count($matched_rules)) {
                case 0:
                    dump('没有匹配的 mock rule，以下为所有的 mock rule');
                    dump($mock_rules);
                    exit;
                    break;
                case 1:
                    $template = json_encode($matched_rules[0]->template);

                    $data_mock = helper::eval_js('kvi0k68s', "
                        const Mock = require('mockjs');
                        console.log(JSON.stringify(Mock.mock($template)))
                    ");

                    break;
                default:
                    dump('多个匹配的 mock rule，以下为匹配的 rule');
                    dump($matched_rules);
                    dump('多个匹配的 mock rule，以下为所有的 rule');
                    dump($mock_rules);
                    exit;
            }
            // 尝试 json 反序列化
            if (is_string($data_mock)) {
                // 指定为数组
                $data_mock = json_decode($data_mock, true);
            }
            if (!is_array($data_mock)) {
                $data_mock = [];
            }

            // 合并默认数据 和 mock 数据
            View::assign(array_merge($data_default, $data_mock));
        }

        // 继续传播请求
        $response = $next($request);

        return $response;
    }
}