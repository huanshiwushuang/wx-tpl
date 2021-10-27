<?php

declare(strict_types=1);

namespace app\middleware;

use ReflectionClass;
use think\facade\Lang;

class LoadLangPack_FixBugBefore
{
    /**
     * 处理请求
     *
     * @param \think\Request $request
     * @param \Closure       $next
     * @return Response
     */
    public function handle($request, \Closure $next)
    {
        // 语言实例
        $lang_instance = Lang::instance();
        // 反射类实例
        $refClass = new ReflectionClass($lang_instance);
        // 反射属性实例
        $refConfig = $refClass->getProperty('config');
        // 反射属性设置可访问
        $refConfig->setAccessible(true);

        // 重新设置 config 的值
        $refConfig->setValue($lang_instance, array_merge(
            // 获取内部默认值
            $refConfig->getValue($lang_instance),
            // 获取外部配置的值
            array_change_key_case(config('lang'))
        ));

        return $next($request);
    }
}
