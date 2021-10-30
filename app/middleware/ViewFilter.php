<?php

declare(strict_types=1);

namespace app\middleware;

use app\common\common;
use think\facade\View;
use kqufcgta_html5\WxHTML5;
use think\facade\Lang;

class ViewFilter
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
		// 便于在控制前中, 添加遍历 dom 节点的自定义逻辑
		View::instance()->start_tag_callback = [];
		View::instance()->end_tag_callback = [];

		View::filter(function ($content) {
			// 获取模板变量
			$tpl_var = View::instance()->get();

			// 不是 entry 页面，则再 fetch entry 页面, $content作为 html_data ，塞进去。
			if (!isset($tpl_var['krxg93vb_is_entry']) || !$tpl_var['krxg93vb_is_entry']) {
				// 数据源
				$tpl_var['html_data'] = $content;

				// 入口页面标识变量
				$tpl_var['krxg93vb_is_entry'] = true;

				// 变量检查
				$this->tpl_var_check($tpl_var);

				return View::fetch('main/entry', $tpl_var);
			}

			// 最后一次的 fetch，则直接输出
			$html5 = new WxHTML5();

			$dom = $html5->loadHTML($content, [
				// 去除源码注释
				'remove_comment' => ENV !== 'development',
				// 是否压缩 源码
				'minify_source' => ENV !== 'development',
				// 如果 dom 属性中的 key 或者 value 中，有数组中的任一关键字，则此 DOM 中的数据将不会被压缩
				'any_not_minify' => [
					'not_minify'
				],
				// 标签开始
				'start_tag' => function (&$name, &$attributes = array(), &$selfClosing = false) {

					// 对所有 a 标签的 href 属性 qs 和 hash 部分进行编码【起因：解决百度快照 gb2312 编码导致的 url 打开错误问题】
					if (preg_match('/^a$/i', $name)) {
						if (isset($attributes['href'])) {
							$attributes['href'] = common::urlencode($attributes['href']);
						}
					}

					// call 回调函数，让子应用自定义处理
					foreach (View::instance()->start_tag_callback as $callback) {
						$callback($name, $attributes, $selfClosing);
					}
				},
				'end_tag' => function (&$name) {
					// call 回调函数，让子应用自定义处理
					foreach (View::instance()->end_tag_callback as $callback) {
						$callback($callback, $name);
					}
				}
			]);

			return $html5->saveHTML($dom);
		});

		return $next($request);
	}
	// 变量检查，比如公有变量必须有默认值
	protected function tpl_var_check(&$tpl_var)
	{
		$LANG = Lang::getLangSet();

		$default_var = [
			[
				'T',
				'戊戌数据 - 医药（数据）共享家'
			],
			[
				'K',
				'戊戌数据,医药数据库,药品查询,药品库,药物杂质对照品库,一致性评价库,医保目录,临床试验库,药物目录,制药企业,医药公司,医药行业数据,戊戌网,戊戌数据官网'
			],
			[
				'D',
				'戊戌数据是以医药数据为核心，集数据、资讯、政策于一体的信息服务平台，国内第一家信息开放、共享的医药数据库。致力于把数据信息带入每个企业，推动企业研发智能化、市场营销决策化，构建信息互联的医药新世界。医药数据的更多信息就在戊戌数据官网。'
			],
			[
				'LANG',
				empty($LANG) ? 'zh-cn' : $LANG,
			],
		];

		// 变量定义循环检查
		foreach ($default_var as $val) {
			if (!isset($tpl_var[$val[0]])) {
				$tpl_var[$val[0]] = $val[1];
			}
		}
	}
}
