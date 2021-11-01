<?php
// 应用公共文件

use app\helper;

if (!function_exists('str_encode')) {
    function str_encode($payload)
    {
        return helper::str_encode($payload);
    }
}
if (!function_exists('str_decode')) {
    function str_decode($payload)
    {
        return helper::str_decode($payload);
    }
}
