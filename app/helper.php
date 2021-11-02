<?php
// 应用公共文件

namespace app;
// https://www.cnblogs.com/terencezhou/p/10474617.html

use Exception;
use JsonSchema\Validator;
use Symfony\Component\Finder\Finder;
use LZCompressor\LZString;

class helper
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
                $schema = include($file->getPathname());

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
    // 返回-/app 文件夹中的 所有 *.mock.json5 合并后的 mock
    static function get_mock_datas(): array
    {
        // 取缓存
        $res = cache('mock_datas');

        if (empty($res)) {
            $finder = new Finder();
            $finder->in(APP_ROOT)->name('*.mock.json5')->files();
            $mock_datas = [];

            foreach ($finder as $file) {
                // 导入 mock_data
                $mock_data = json5_decode($file->getContents());
                // $schema = include($file->getPathname());

                $mock_datas = array_merge($mock_datas, $mock_data);
            }

            $res = $mock_datas;

            // 写缓存
            switch (ENV) {
                case 'development':
                    // 开发期间不写缓存
                    break;
                default:
                    cache('mock_datas', $res);
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
        $schemas = helper::get_schemas();
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
     * Mockjs 返回匹配到的数据
     */
    static function get_matched_data()
    {
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
    // 抛出异常，打印调用栈
    static function print_stack()
    {
        $e = new Exception();
        dump($e->getTraceAsString());
    }
    // https://blog.csdn.net/qq_26702065/article/details/52002615
    // 编码
    static function str_encode($input)
    {
        // + 比 - 出现更频繁
        $src   =  ['-', "+"];
        $dist  =  ["__", "_"];

        $res = LZString::compressToEncodedURIComponent($input);
        $res = str_replace($src, $dist, $res);

        return $res;
    }
    // 解码
    static function str_decode($input)
    {
        // + 比 - 出现更频繁
        $src   =  ["__", "_"];
        $dist  =  ['-', "+"];

        $res = str_replace($src, $dist, $input);
        $res = LZString::decompressFromEncodedURIComponent($res);

        return $res;
    }
    /* 
    执行 js by nodejs
    仅适用于开发中的使用
    */
    static function eval_js(string $filename, string $code)
    {

        // 确保目录存在
        $dir = runtime_path() . 'eval_js';

        if (!file_exists($dir)) {
            mkdir($dir, 0777, true);
        }
        // 确保文件存在
        $filename = $dir . DS . $filename . '.js';

        file_put_contents($filename, $code);
        // 执行 js
        $res = trim(`node $filename`);

        return $res;
    }
}
