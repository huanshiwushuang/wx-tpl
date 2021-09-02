<?php

namespace app\admin\controller;

use think\facade\View;

class Index extends Base
{
	public function index()
	{
		$tpl_var = [
			'T' => '后台首页-戊戌数据',
			'K' => '后台首页-我是keywords',
			'D' => '后台首页-我是description',
		];

		// fetch 数据页面
		return View::fetch('index/index', $tpl_var);
	}
	public function about()
	{
		$tpl_var = [
			'T' => '后台-关于我们-戊戌数据',
			'K' => '后台-关于我们-我是keywords',
			'D' => '后台-关于我们-我是description',
		];

		// fetch 数据页面
		return View::fetch('index/about', $tpl_var);
	}
	public function chemdraw()
	{
		$tpl_var = [
			'T' => '后台-chemdraw-戊戌数据',
			'K' => '后台-chemdraw-我是keywords',
			'D' => '后台-chemdraw-我是description',
		];

		// display 数据页面
		return View::display('', $tpl_var);
	}
}
