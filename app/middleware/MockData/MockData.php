<?php

declare(strict_types=1);

namespace app\middleware\MockData;

use Exception;
use think\facade\View;

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
        $exception = null;

        // 请求模拟数据, 当然, 控制器中的同名变量会覆盖 mock 的变量
        if (isset($request->param()['mock']) && ENV === 'development') {
            // 默认添加的模拟数据
            $data_default = [];
            // 模拟生成的数据
            $data_mock = [];

            try {
                $dir = __DIR__;
                $data_mock = shell_exec("node $dir/MockData.js 2>&1");
            } catch (Exception $e) {
                $exception = $e;
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

        // 如果有异常，则抛出
        if ($exception) {
            throw $e;
        }

        return $response;
    }
}
