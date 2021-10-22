<?php
// 应用公共文件

namespace app\common;

use Symfony\Component\Finder\Finder;

class common
{
    // 返回-/app 文件夹中的 所有 *.schema.json5 合并后的 schema
    static function get_schemas()
    {
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
        }

        return $res;
    }
}
