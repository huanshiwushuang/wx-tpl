<?php
// 应用公共文件

namespace app\common;

class common
{
    // 加载根目录下 schema 文件夹中的 json5 文件
    static function load_schema(array $schema_file_path)
    {
        $path = join(DS, $schema_file_path);

        $file = file_get_contents(SCHEMA . DS . $path);
        
        return json5_decode($file);
    }
}
