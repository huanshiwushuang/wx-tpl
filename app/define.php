<?php

// 常量定义

define('DS', DIRECTORY_SEPARATOR);
define('PROJECT_ROOT', __DIR__ . DS . '..');
define('APP_ROOT', PROJECT_ROOT . DS . 'app');

// domain > .env
$env = preg_match('/juzimi\.online/i', $_SERVER['HTTP_HOST']) ? 'production' : env('env') ?? 'development';
define('ENV', $env);
