<?php
// 应用公共文件

namespace app\common;

use Symfony\Component\Finder\Finder;

class common
{
    // 加载根目录下 schema 文件夹中的 json5 文件
    static function load_schema(array $schema_file_path)
    {
        $path = join(DS, $schema_file_path);

        $file = file_get_contents(SCHEMA . DS . $path);

        return json5_decode($file);
    }
    // 返回-根目录下 schema 文件夹中的 所有 *.front.json5 合并后的 schema
    static function get_schema_front()
    {
        $finder = new Finder();
        $finder->in(SCHEMA)->name('*.front.json5')->files();
        $schemas = [];

        foreach ($finder as $file) {
            $arr = (array)json5_decode($file->getContents());

            $schemas = array_merge($schemas, $arr);
        }

        return $schemas;
    }
    // 返回-根目录下 schema 文件夹中的 所有 *.back.json5 合并后的 schema
    static function get_schema_back()
    {
        $finder = new Finder();
        $finder->in(SCHEMA)->name('*.back.json5')->files();
        $schemas = [];

        foreach ($finder as $file) {
            $arr = (array)json5_decode($file->getContents());

            $schemas = array_merge($schemas, $arr);
        }

        return $schemas;
    }
}
