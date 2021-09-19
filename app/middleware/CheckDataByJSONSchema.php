<?php

// 根据-根目录下 schema 文件夹中的 *.back.json5 配置，对传入的参数，进行校验

declare(strict_types=1);

namespace app\middleware;

use app\common\common;
use JsonSchema\Validator;

class CheckDataByJSONSchema
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
		$params = [];

		$method = strtolower($request->method());

		// 解析参数
		switch ($method) {
			case 'get':
				$params = $request->param();

				// 是否 base64 编码了参数
				$encode = isset($params['encode']) ? $params['encode'] : '0';

				switch ($encode) {
					case '1':
						$qs = $request->param('qs');

						if (!empty($qs)) {
							$qs = base64_decode($qs, true);
							// 如果 base64 解码失败
							if (!$qs) {
								return $this->checkNotPass($request, 'ktpxu1km', 'qs 参数 base64 解码失败');
							}

							$qs = json_decode($qs);
							// 如果 json 解码失败
							if (!$qs) {
								return $this->checkNotPass($request, 'ktpxsfrb', 'qs 参数 json 解码失败');
							}
							// 解码 JSON
							$params = array_merge($params, (array)$qs);
						}
						break;
				}
				break;
			default:
				$params = $request->param();
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

		// 如果有 code 才校验
		if (isset($params['code'])) {
			// 控制器中判断，有 code，则肯定校验通过
			$code = $params['code'];
			$schemas = common::get_schemas_back();

			// 找到 code 对应的 schema
			$schemas_match = array_filter($schemas, function ($item) use ($code) {
				if (is_string($item) && $item === $code) {
					return true;
				} else if (is_object($item) && $item->code === $code) {
					return true;
				}
			});
			// 如果 code 不对应 唯一的 schame
			$count = count($schemas_match);
			if ($count !== 1) {
				return $this->checkNotPass($request, 'ktpxujiw', 'code 对应 schema 数量不等于 1');
			}

			// 删除多余参数，不该校验 encode code qs 参数
			if (isset($params['encode'])) {
				unset($params['encode']);
			}
			if (isset($params['code'])) {
				unset($params['code']);
			}
			if (isset($params['qs'])) {
				unset($params['qs']);
			}

			$one_value = array_values($schemas_match)[0];
			// 如果找到的是对象，则需要进行，json-schema 校验
			if (is_object($one_value)) {
				$validator = new Validator();
				$validator->validate($params, $one_value->schema);

				// 参数校验未通过
				if (!$validator->isValid()) {
					return $this->checkNotPass($request, 'ktpzfuyw', $validator->getErrors());
				}
			}
		}

		return $next($request);
	}

	// 参数校验不通过
	public function checkNotPass($request, $error_code, $error_detail)
	{
		// 重定向地址
		$redirect_url = str_replace('?' . $request->query(), '', $request->url());

		// 如果是开发环境
		switch (env('env')) {
			case 'development':
				dump($error_detail);
				exit;
		}

		return redirect($redirect_url . '?error_code=' . $error_code);
	}
}
