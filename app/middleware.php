<?php
// 全局中间件定义文件
return [
    // 设置默认 App
    \app\middleware\SetDefaultApp::class,
    // 视图过滤
    \app\middleware\ViewFilter::class,
    // 全局请求缓存
    \think\middleware\CheckRequestCache::class,
    // 多语言加载-fix bug
    // \app\middleware\LoadLangPack_FixBugBefore::class,
    // 多语言加载
    \think\middleware\LoadLangPack::class,
    // Session初始化
    \think\middleware\SessionInit::class,
    // 数据检查
    \app\middleware\CheckDataByJSONSchema::class,
    // 数据 Mock
    // \app\middleware\MockData::class,
];
