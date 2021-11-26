<?php

namespace app\admin\controller;

use app\WxBaseController;

class Base extends WxBaseController
{
	public function initialize()
	{
		$this->filter_view();
	}

	// 子应用-模板输出统一过滤器
	protected function filter_view()
	{
		
	}
}
