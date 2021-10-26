<?php
// 应用公共文件

namespace app\common;

use JsonSchema\Validator;
use Symfony\Component\Finder\Finder;

class common
{
    // 返回-/app 文件夹中的 所有 *.schema.json5 合并后的 schema
    static function get_schemas(): array
    {
        // 取缓存
        $res = cache('schemas');

        if (empty($res)) {
            $finder = new Finder();
            $finder->in(APP_ROOT)->name('*.schema.json5')->files();
            $schemas = [];

            foreach ($finder as $file) {
                $arr = (array)json5_decode($file->getContents());

                $schemas = array_merge($schemas, $arr);
            }

            $res = $schemas;

            // 写缓存
            cache('schemas', $res);
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
                'msg' => 'check 对应 schema 数量不等于 1',
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
}
