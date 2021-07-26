<?php

namespace app\controller;

use app\BaseController;
use think\facade\View;
use kqufcgta_html5\WxHTML5;

class Base extends BaseController
{
	protected function initialize()
	{
		// 过滤所有最终输出的页面
		$this->filterAllView();
	}

	// 模板输出统一过滤器
	protected function filterAllView()
	{
		View::filter(function ($content) {
			// 条件判断：只对最后一次的 fetch 做处理
			// krjz5tk6 关键字在 body 上
			if (preg_match('/krjz5tk6/', $content)) {
				$html5 = new WxHTML5();

				$dom = $html5->loadHTML($content, [
					// 去除源码注释
					'remove_comment' => true,
					// 是否压缩 源码
					'minify_source' => true,
					// 如果 dom 属性中的 key 或者 value 中，有数组中的任一关键字，则此 DOM 中的数据将不会被压缩
					'any_not_minify' => [
						'kreq0txx_not_minify'
					],
					// 标签开始
					'onStartTag' => function (&$name, &$attributes = array(), &$selfClosing = false) {
						// 修改 a 标签
						if (preg_match('/^a$/i', $name)) {
							// 默认所有链接都不是白名单
							$is_whitelist = false;
							
							$url = trim($attributes['href']);

							// 戊戌数据
							if (preg_match('/wuxuwang\.com/', $url) || preg_match('/^\//', $url)) {
								$is_whitelist = true;
							}

							if ($is_whitelist) {
								unset($attributes['rel']);
							} else {
								$attributes['rel'] = 'nofollow noopener noreferrer';
							}
						}
					},
				]);

				return $html5->saveHTML($dom);
			}
			return $content;
		});
	}
}
