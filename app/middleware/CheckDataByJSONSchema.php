<?php

// 根据-app 目录下所有的 *.schema.php 配置，对传入的参数，进行校验

declare(strict_types=1);

namespace app\middleware;

use app\helper;
// https://ufqi.com/dev/base62x/
// https://packagist.org/packages/mfonte/base62x

class CheckDataByJSONSchema
{
	// query: encodeURIComponent  编码后再 Base62x 编码的 json 字符串
	// check: 表示 当前所有参数，对应的 json schema
	/**
	 * 处理请求
	 *
	 * @param \think\Request $request
	 * @param \Closure       $next
	 * @return Response
	 */
	public function handle($request, \Closure $next)
	{
		$method = strtolower($request->method());
		// 解析参数
		$params = $request->param();

		// query 参数为保留的经过 Base62x 编码的 JSON 字符串
		if (isset($params['query'])) {
			$query = $params['query'];

			if (!empty($query)) {
				$query = helper::str_decode($query);

				$query = json_decode($query);

				// 如果 json 解码失败
				if (!$query) {
					return $this->checkNotPass($request, 'ktpxsfrb', 'query 参数 json 解码失败');
				}
				// 解码 JSON
				$params = array_merge($params, (array)$query);
			}
		}

		// 合并参数
		switch ($method) {
			case 'get':
				$request->withGet($params);
				break;
			default:
				$request->withPost($params);
				break;
		}

		// 如果有 check 才校验
		if (isset($params['check'])) {
			// 控制器中判断，有 check, 则肯定校验通过
			$check = $params['check'];

			$params_all = $params;
			// 删除多余参数，不该的 参数
			unset($params['check']);

			if (isset($params['query'])) {
				unset($params['query']);
			}
			if (isset($params['mock'])) {
				unset($params['mock']);
			}

			// 将 params 还原成符合 json 语义的 php 对象格式
			$check_params = json_decode(json_encode($params));
			$res = helper::check_params($check, $check_params);
			// 参数校验未通过
			if ($res) {
				return $this->checkNotPass($request, $res->code, $res->msg, $check_params, $params_all);
			}
		}

		return $next($request);
	}

	// 参数校验不通过
	public function checkNotPass($request, $error_code, $error_detail, $params = null, $params_all = null)
	{
		// 重定向地址
		$redirect_url = str_replace('?' . $request->query(), '', $request->url());

		// 如果是开发环境
		switch (ENV) {
			case 'development':
				echo ('error_code');
				dump($error_code);

				echo ('error_detail');
				dump($error_detail);

				echo ('check_params');
				dump($params);

				echo ('all_params');
				dump($params_all);
				exit;
		}

		return redirect($redirect_url . '?error_code=' . $error_code);
	}
}
