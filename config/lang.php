<?php
// +----------------------------------------------------------------------
// | 多语言设置
// +----------------------------------------------------------------------


// 此处的配置-在多应用下有 bug，不能生效
// 前端页默认使用 think_lang 作为语言的 key
// 如果想生效，可以开启 middleware 中的 LoadLangPack_FixBugBefore
return [
    // 默认语言
    'default_lang'    => env('lang.default_lang', 'zh-cn'),
    // 允许的语言列表
    'allow_lang_list' => ['zh-cn', 'en-us'],
    // 多语言自动侦测变量名
    'detect_var'      => 'lang',
    // 是否使用Cookie记录
    'use_cookie'      => true,
    // 多语言cookie变量
    'cookie_var'      => 'think_lang',
    // 多语言header变量
    'header_var'      => 'think_lang',
    // 扩展语言包
    'extend_list'     => [
    ],
    // Accept-Language转义为对应语言包名称
    'accept_language' => [
        'zh-hans-cn' => 'zh-cn',
    ],
    // 是否支持语言分组
    'allow_group'     => false,
];
