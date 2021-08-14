<?php

namespace app\defaultApp\controller;

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
			// 获取模板变量
			$tpl_var = View::instance()->get();

			// 不是 entry 页面，则再 fetch entry 页面, $content作为 krt18uif_data ，塞进去。
			if (!array_key_exists('krxg93vb_is_entry', $tpl_var) || !$tpl_var['krxg93vb_is_entry']) {
				
				// 数据源
				$tpl_var['krt18uif_data'] = $content;

				// 入口页面标识变量
				$tpl_var['krxg93vb_is_entry'] = true;

				// 变量检查
				$tpl_var = $this->tpl_var_check($tpl_var);

				return View::fetch('main/entry', $tpl_var);
			}

			// 最后一次的 fetch，则直接输出
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
		});

	}
	// 变量检查，比如公有变量必须有默认值
	protected function tpl_var_check($tpl_var) {
		// 标题
		if (!isset($tpl_var['T'])) {
			$tpl_var['T'] = '戊戌数据 - 医药（数据）共享家';
		}
		// 关键词
		if (!isset($tpl_var['K'])) {
			$tpl_var['K'] = '戊戌数据,医药数据库,药品查询,药品库,药物杂质对照品库,一致性评价库,医保目录,临床试验库,药物目录,制药企业,医药公司,医药行业数据,戊戌网,戊戌数据官网';
		}
		// 描述
		if (!isset($tpl_var['D'])) {
			$tpl_var['D'] = '戊戌数据是以医药数据为核心，集数据、资讯、政策于一体的信息服务平台，国内第一家信息开放、共享的医药数据库。致力于把数据信息带入每个企业，推动企业研发智能化、市场营销决策化，构建信息互联的医药新世界。医药数据的更多信息就在戊戌数据官网。';
		}

		
		return $tpl_var;
	}
}
