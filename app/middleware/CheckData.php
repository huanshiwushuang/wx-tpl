<?php

// 根据-根目录下 schema 文件夹中的 json5 配置，对传入的参数，进行校验

declare(strict_types=1);

namespace app\middleware;

class SetDefaultApp
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
        dump($request);
        exit;
		return $next($request);
	}
}
