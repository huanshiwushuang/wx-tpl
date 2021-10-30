<?php
// 应用公共文件

namespace app\common;
// https://www.cnblogs.com/terencezhou/p/10474617.html

use app\websocket\WxGateway;
use JsonSchema\Validator;
use Symfony\Component\Finder\Finder;

class common
{
    // 返回-/app 文件夹中的 所有 *.schema.php 合并后的 schema
    static function get_schemas(): array
    {
        // 取缓存
        $res = cache('schemas');

        if (empty($res)) {
            $finder = new Finder();
            $finder->in(APP_ROOT)->name('*.schema.php')->files();
            $schemas = [];

            foreach ($finder as $file) {
                // 导入 schema
                $schema = require_once($file->getPathname());

                WxGateway::sendToCurrentClient(json_encode($schema));

                $schemas = array_merge($schemas, $schema);
            }

            $res = $schemas;

            // 写缓存
            switch (ENV) {
                case 'development':
                    // 开发期间不写缓存
                    break;
                default:
                    cache('schemas', $res);
            }
        }

        return $res;
    }
    /**
     * 参数校验
     * 返回 object 表示 check 不通过
     */
    static function check_params(string $check, $params)
    {
        // 所有 schema
        $schemas = common::get_schemas();
        // 匹配的 schema
        $schemas_match = [];

        // 找到 check 对应的 schema
        foreach ($schemas as $key => $val) {
            if ($check === $key) {
                array_push($schemas_match, $val);
            }
        }

        // 如果 check 不对应 唯一的 schame
        $count = count($schemas_match);
        if ($count !== 1) {
            return (object)[
                'code' => 'ktpxujiw',
                'msg' => 'check 对应 schema 数量不等于 1，当前数量为：' . $count,
            ];
        }

        $json_schema = $schemas_match[0];
        // 进行 json-schema 校验
        $validator = new Validator();
        $validator->validate($params, $json_schema);

        // 如果参数校验未通过
        if (!$validator->isValid()) {
            return (object)[
                'code' => 'ktpzfuyw',
                'msg' => $validator->getErrors(),
            ];
        }
    }
    /**
     * @param string $url
     * @return string encoded url
     */
    static function urlencode($url): string
    {
        // 解析 url 为数组
        $array_url = parse_url($url);

        // 解析 qs 为数组
        $array_query = [];
        if (isset($array_url['query'])) {
            parse_str($array_url['query'], $array_query);
        }

        // 对 qs 和 hash 进行编码
        $array_query_encode = [];
        $str_hash_encode = '';
        if (isset($array_url['fragment'])) {
            $str_hash_encode = rawurlencode($array_url['fragment']);
        }

        foreach ($array_query as $key => $value) {
            // 如果 value 是数组
            if (is_array($value)) {
                foreach ($value as $v) {
                    array_push($array_query_encode, rawurlencode($key . '[]') . '=' . rawurlencode($v));
                }
            } else {
                array_push($array_query_encode, rawurlencode($key) . '=' . rawurlencode($value));
            }
        }

        // 拼接 && 替换为编码后的字符串
        $str_replacement = implode('&', $array_query_encode);
        if ($str_replacement) {
            $str_replacement = '?' . $str_replacement;
        }
        if ($str_hash_encode) {
            $str_hash_encode = '#' . $str_hash_encode;
        }

        $res_url = preg_replace('/\?.+/', $str_replacement . $str_hash_encode, $url, 1);

        return $res_url;
    }
}
