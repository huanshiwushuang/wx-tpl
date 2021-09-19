<?php
// 应用公共文件

namespace app\common;

use Symfony\Component\Finder\Finder;

class common
{
    // 返回-根目录下 schema 文件夹中的 所有 *.front.json5 合并后的 schema
    static function get_schemas_front()
    {
        $res = cache('schema_front');

        if (empty(cache('schema_front'))) {
            $finder = new Finder();
            $finder->in(SCHEMA)->name('*.front.json5')->files();
            $schemas = [];

            foreach ($finder as $file) {
                $arr = (array)json5_decode($file->getContents());

                $schemas = array_merge($schemas, $arr);
            }

            $res = $schemas;
        }

        return $res;
    }
    // 返回-根目录下 schema 文件夹中的 所有 *.back.json5 合并后的 schema
    static function get_schemas_back()
    {
        $res = cache('schema_back');

        if (empty($res)) {
            $finder = new Finder();
            $finder->in(SCHEMA)->name('*.back.json5')->files();
            $schemas = [];

            foreach ($finder as $file) {
                $arr = (array)json5_decode($file->getContents());

                $schemas = array_merge($schemas, $arr);
            }

            $res = $schemas;
        }

        return $res;
    }
}
