<?php

namespace app\defaultApp\controller;

use app\BaseController;
use think\facade\View;

class Base extends BaseController
{
	public function initialize()
	{
		$this->filter_view();
	}

	// 子应用-模板输出统一过滤器
	protected function filter_view()
	{
		View::instance()->start_tag_callback = View::instance()->start_tag_callback + [
			function (&$name, &$attributes = [], &$selfClosing = false) {
				// 修改 a 标签
				if (preg_match('/^a$/i', $name)) {
					// 默认所有链接都不是白名单
					$is_whitelist = false;

					$url = null;
					if (isset($attributes['href'])) {
						$url = trim($attributes['href']);
					}

					// 戊戌数据
					if (preg_match('/wuxuwang\.com/', $url) || preg_match('/^\//', $url)) {
						$is_whitelist = true;
					}

					if ($is_whitelist) {
						unset($attributes['rel']);
					} else {
						$attributes['rel'] = 'nofollow';
					}
				}
			}
		];
	}
}
