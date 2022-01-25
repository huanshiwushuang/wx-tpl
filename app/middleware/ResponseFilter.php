<?php

declare(strict_types=1);

namespace app\middleware;

use think\Response;

class ResponseFilter
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
        $response = $next($request);

        // 返回的数组 || 对象 转为 json
        $response_data = $response->getData();
        if (is_array($response_data) || is_object($response_data)) {
            $response->data(json_encode($response_data));
        }

        return $response;
    }
}
