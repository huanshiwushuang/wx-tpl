<?php /*a:8:{s:36:"C:\code\wx-tpl\view\index\index.html";i:1625447808;s:35:"C:\code\wx-tpl\view\main\index.html";i:1627265396;s:34:"C:\code\wx-tpl\view\main\base.html";i:1627266829;s:33:"C:\code\wx-tpl\view\main\tkd.html";i:1627264935;s:54:"C:\code\wx-tpl\view\main\include_head_development.html";i:1627265833;s:53:"C:\code\wx-tpl\view\main\include_head_production.html";i:1627263712;s:54:"C:\code\wx-tpl\view\main\include_body_development.html";i:1627265833;s:53:"C:\code\wx-tpl\view\main\include_body_production.html";i:1627263712;}*/ ?>
<!DOCTYPE html>
<html lang="zh-cn">

<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta name="referrer" content="always" />
	<!-- 索引，跟随，不存档 -->
	<meta name="robots" content="index,follow,noarchive">
	<meta name="renderer" content="webkit" />
	<meta name="force-rendering" content="webkit" />
	<meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1">
	<!-- 确保：ios 或者 mac 不会自动添加脏数据 -->
	<meta name="format-detection" content="telephone=no, email=no, address=no" />

	<!-- 旧版 IE 升级提示跳转代码 -->
	<!-- https://support.dmeng.net/ie-update-warning.html -->
	<script>if (/*@cc_on!@*/false || (!!window.MSInputMethodContext && !!document.documentMode)) window.location.href = "https://support.dmeng.net/upgrade-your-browser.html?referrer=" + encodeURIComponent(window.location.href); </script>

	<style>
		.dn {display: none;}
	</style>

	
	<!-- tkd -->
	<meta id="krjzik3i_keywords" name="keywords" content="戊戌数据,医药数据库,药品查询,药品库,药物杂质对照品库,一致性评价库,医保目录,临床试验库,药物目录,制药企业,医药公司,医药行业数据" />

<meta id="krjzir1m_description" name="description"
	content="戊戌数据是以医药数据为核心，集数据、资讯、政策于一体的信息服务平台，国内第一家信息开放、共享的医药数据库。致力于把数据信息带入每个企业，推动企业研发智能化、市场营销决策化，构建信息互联的医药新世界。" />

<title id="krjziyjz_title">戊戌数据 - 医药（数据）共享家</title>
	
	<!-- 导入 link 模板 -->
	<?php if(ENV == 'development'): ?>
		<!-- css -->

	<link rel="stylesheet" href="/static/development/krjztz3q/css/chunk-common.1e19ffbb.css" />


<!-- preload -->

	<link rel="preload" href="/static/development/krjztz3q/js/chunk-vendors.js" as="script" />

	<link rel="preload" href="/static/development/krjztz3q/js/chunk-common.js" as="script" />

	<link rel="preload" href="/static/development/krjztz3q/js/include_head.js" as="script" />


	<?php else: ?>
		<link rel="stylesheet" href="/static/production/krjysneu/css/include_head.fb0c6e1c.css"><link rel="preload" href="/static/production/krjysneu/js/chunk-vendors.5028b17c.js" as="script"><link rel="preload" href="/static/production/krjysneu/js/include_head.ed7b9124.js" as="script">
	<?php endif; ?>


</head>

<!-- data-krjz5tk6 是为了 php 过滤的时候，只过滤最后的 fetch 的页面 -->
<body id="body" data-krjz5tk6>
	<!-- 后端渲染数据 -->
	<div class="data dn">
<!-- 根据路由不同，后端返回不同的数据[html] -->
<?php echo $data; ?>

<!-- 所有页面公用的数据 -->
<template class="data dn">
	<div id="krjzmlbj_config" data-mime="json5">
		{
			test: '我是所有页面公用的数据'
		}
	</div>
</template>
</div>

	<!-- 前端渲染视图 -->
	<div id="app"></div>
	
	
	<!-- 导入 script 模板 -->
	<?php if(ENV == 'development'): ?>
		
	<script src="/static/development/krjztz3q/js/chunk-vendors.js"></script>

	<script src="/static/development/krjztz3q/js/chunk-common.js"></script>

	<script src="/static/development/krjztz3q/js/include_body.js"></script>


	<?php else: ?>
		<script src="/static/production/krjysneu/js/chunk-vendors.5028b17c.js"></script><script src="/static/production/krjysneu/js/include_body.1564faf9.js"></script>
	<?php endif; ?>

</body>

</html>