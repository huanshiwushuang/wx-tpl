<?php

// 根据-根目录下 schema 文件夹中的 *.back.json5 配置，对传入的参数，进行校验

declare(strict_types=1);

namespace app\middleware;

use app\common\common;
use JsonSchema\Validator;

class CheckDataByJSONSchema
{
	// query: base64 编码后的 json 字符串
	// code: 表示 当前所有参数，对应的 json schema
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

		// query 参数为保留的经过 base64 编码的 JSON 字符串
		if (isset($params['query'])) {
			$query = $params['query'];

			if (!empty($query)) {
				$query = base64_decode($query, true);
				// 如果 base64 解码失败
				if (!$query) {
					return $this->checkNotPass($request, 'ktpxu1km', 'query 参数 base64 解码失败');
				}

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

		// 如果有 code 才校验
		if (isset($params['code'])) {
			// 控制器中判断，有 code，则肯定校验通过
			$code = $params['code'];
			$schemas = common::get_schemas_back();
			$schemas_match = [];

			// 找到 code 对应的 schema
			foreach ($schemas as $key => $val) {
				if ($code === $key) {
					array_push($schemas_match, $val);
				}
			}

			// 如果 code 不对应 唯一的 schame
			$count = count($schemas_match);
			if ($count !== 1) {
				return $this->checkNotPass($request, 'ktpxujiw', 'code 对应 schema 数量不等于 1');
			}

			// 删除多余参数，不该校验 code query 参数
			if (isset($params['code'])) {
				unset($params['code']);
			}
			if (isset($params['query'])) {
				unset($params['query']);
			}

			$one_value = array_values($schemas_match)[0];
			// 如果 schema 为对象 ，则需要进行，json-schema 校验
			if (is_object($one_value->schema)) {
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
				dump($error_code . ':');
				dump($error_detail);
				exit;
		}

		return redirect($redirect_url . '?error_code=' . $error_code);
	}
}
