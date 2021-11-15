<?php

declare(strict_types=1);

namespace app\middleware;

use app\helper;
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
			// 只有先 assign, 再 fetch 页面的 变量才能在 instance 拿到
			$all_var = View::instance()->get();

			// 该内容是否需要继承 main/base.html 内容
			$all_var = array_merge($all_var, [
				'vf_extend_base' => isset($all_var['vf_extend_base']) ?  $all_var['vf_extend_base'] : true,
			]);

			// 需要继承 main/base.html 内容，则再 fetch 页面, $content 作为 html ，塞进去。
			if ($all_var['vf_extend_base']) {
				// 数据源
				$all_var['html'] = $content;

				// 标识-不需要继承 base 了
				$all_var['vf_extend_base'] = false;

				// 变量检查
				$this->view_var_check($all_var);

				// 赋值到全局变量
				// 只有先 assign, 再 fetch 页面的 变量才能在 instance 拿到
				View::assign($all_var);

				return View::fetch('main/base');
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
							$attributes['href'] = helper::urlencode($attributes['href']);
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

			// 重置为 extend base
			View::assign('vf_extend_base', true);

			return $html5->saveHTML($dom);
		});

		return $next($request);
	}
	// 变量检查，比如公有变量必须有默认值
	protected function view_var_check(&$all_var)
	{
		$lang = Lang::getLangSet();

		// 检查 顶层 变量
		$this->array_check_var($all_var, [
			// page 数据
			[
				'page',
				[],
			],
		]);

		// 检查 page 变量
		$this->array_check_var($all_var['page'], [
			[
				't',
				'戊戌数据 - 医药（数据）共享家'
			],
			[
				'k',
				'戊戌数据,医药数据库,药品查询,药品库,药物杂质对照品库,一致性评价库,医保目录,临床试验库,药物目录,制药企业,医药公司,医药行业数据,戊戌网,戊戌数据官网'
			],
			[
				'd',
				'戊戌数据是以医药数据为核心，集数据、资讯、政策于一体的信息服务平台，国内第一家信息开放、共享的医药数据库。致力于把数据信息带入每个企业，推动企业研发智能化、市场营销决策化，构建信息互联的医药新世界。医药数据的更多信息就在戊戌数据官网。'
			],
			[
				'json',
				[],
			]
		]);

		// 检查 顶层 变量-再次
		$this->array_check_var($all_var, [
			[
				'lang',
				empty($lang) ? 'zh-cn' : $lang,
			],
			// html 数据
			[
				'html',
				'',
			],
			// tkd
			[
				't',
				$all_var['page']['t'],
			],
			[
				'k',
				$all_var['page']['k'],
			],
			[
				'd',
				$all_var['page']['d'],
			],
		]);

		// PHP 转 JSON
		// 强制顶层为对象
		$all_var['page'] = json_encode($all_var['page'], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
	}

	// 循环检查某一个数组中 是否有 传入的变量, 不存在则默认
	protected function array_check_var(array &$check_var, array $var_array)
	{
		foreach ($var_array as $val) {
			if (!isset($check_var[$val[0]])) {
				$check_var[$val[0]] = $val[1];
			}
		}
	}
}
