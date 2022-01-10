<?php

declare(strict_types=1);

namespace app\middleware;

use app\helper;
use Exception;
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
        $node = NODE;

        // 请求模拟数据, 当然, 控制器中的同名变量会覆盖 mock 的变量
        $params = $request->param();
        if (
            // isset($params['mock'])
            // && $params['mock'] == 1
            // && ENV === 'development'
            1
        ) {
            
            file_put_contents(
                APP_ROOT . DS . 'defaultApp' . DS . 'mock' . DS . 'json' . DS . 'request.log',
                $request->pathinfo() . PHP_EOL,
                FILE_APPEND
            );

            // 默认数据
            $data_default = [];

            // 获取所有的 mock file pathname
            $mock_files_pathname = helper::get_files_pathname_by_ext();
            // 参数
            $params = helper::str_encode(json_encode([
                'pathname' => $request->baseUrl(),
            ]));

            $all_exec_result = [];
            // 循环执行 *.mock.mjs
            foreach ($mock_files_pathname as $file_pathname) {
                // 执行 mjs 传入 baseUrl
                $exec_result = `$node $file_pathname $params 2>&1`;
                // dump($exec_result);

                $result = json_decode($exec_result, true);
                // dump($result);

                if (!is_array($result)) {
                    dump($exec_result);

                    $error = <<<EOF
                        'nodejs 执行【'$file_pathname'】'错误
                    EOF;
                    throw new Exception($error);
                }
                // array
                $exec_result = $result;

                // 执行结果，写入 json 文件
                $pathinfo = pathinfo($file_pathname);
                $output_dir = $pathinfo['dirname'] . DS . '..' . DS . 'json';

                if (!file_exists($output_dir)) {
                    mkdir($output_dir, 0777, true);
                }
                file_put_contents(
                    $output_dir . DS . $pathinfo['basename'] . '.json',
                    json_encode(
                        $exec_result,
                        // 不编码中文 && 不转义斜线 && 格式化输出
                        JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT
                    ),
                );
                // 合并执行的结果
                $all_exec_result = array_merge($all_exec_result, $exec_result);
            }

            // 匹配到规则的数量
            $count = count($all_exec_result);

            // dump($all_exec_result);
            // exit;
            switch ($count) {
                case 0:
                    dump('匹配到 0 个 mock rule');
                    break;
                case 1:
                    // 合并默认数据 和 mock 数据
                    View::assign(array_merge($data_default, $all_exec_result[0]['data'], [
                        // 新增 mock_data 方便在 控制器直接返回模拟的数据
                        'mock_data' => (object)$all_exec_result[0]['data'],
                    ]));
                    break;
                default:
                    throw new Exception("匹配到 $count 个 mock rule");
            }
        }

        // 继续传播请求
        $response = $next($request);

        return $response;
    }
}
