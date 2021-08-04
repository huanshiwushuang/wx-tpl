<?php

namespace kqufcgta_html5;

use Masterminds\HTML5\Parser\DOMTreeBuilder;

class WxDOMTreeBuilder extends DOMTreeBuilder
{
	protected $current_tag_options = null;
	// 是否处于暂停压缩代码的关键字标签内
	protected $pause_minify_tag_options = null;


	// 文本节点，包括换行符在内
	public function text($data)
	{
		// 如果删除注释
		if ($this->options['remove_comment']) {
			// 如果是在 script 标签内，尝试替换移除 单行注释
			if ($this->current_tag_options !== null && preg_match('/script/i', $this->current_tag_options[0])) {
				$data = $this->minify_js($data);
			}
		}

		// 压缩代码 && 不在暂停压缩代码区域内
		if ($this->options['minify_source'] && !$this->pause_minify_tag_options) {
			// 压缩文本
			$data = $this->minify_text($data);

			parent::text($data);
		} else {
			parent::text($data);
		}
	}
	public function comment($cdata)
	{
		if (!$this->options['remove_comment']) {
			parent::comment($cdata);
		}
	}
	public function startTag($name, $attributes = array(), $selfClosing = false)
	{
		// 标签开始
		$this->current_tag_options = func_get_args();

		// 开启暂停压缩代码
		if (!$this->pause_minify_tag_options) {
			// 判断此标签区域内是否暂停压缩代码
			// 如果某些 tag 带有配置的属性关键字，则不进行压缩

			foreach ($this->options['any_not_minify'] as $kw_val) {
				foreach ($attributes as $attr_key => $attr_val) {
					// 但凡有关键字匹配到，则记录此节点 options
					if (
						preg_match('/' . $kw_val . '/', $attr_key)
						||
						preg_match('/' . $kw_val . '/', $attr_val)
					) {
						$this->pause_minify_tag_options = $this->current_tag_options;
					}
				}
			}
		}

		// 压缩 tag 属性值
		if ($this->options['minify_source'] && !$this->pause_minify_tag_options) {
			foreach ($attributes as $attr_key => $attr_val) {
				// 压缩文本
				$attributes[$attr_key] = $this->minify_text($attr_val);
			}
		}

		// 调用外部回调函数，给予修改 options 的时机
		if (is_callable($this->options['onStartTag'])) {
			$this->options['onStartTag']($name, $attributes, $selfClosing);
		}

		parent::startTag($name, $attributes, $selfClosing);
	}
	public function endTag($name)
	{
		// 标签结束
		$this->current_tag_options = null;

		// 结束暂停压缩代码
		if ($this->pause_minify_tag_options !== null && $this->pause_minify_tag_options[0] === $name) {
			$this->pause_minify_tag_options = null;
		}

		parent::endTag($name);
	}

	public function minify_text($text)
	{
		// 去除换行
		$res = preg_replace('/[\r\n]/', '', $text);
		// 压缩空格
		$res = preg_replace('/[\s\t]{2,}/', ' ', trim($res));
		return $res;
	}
	public function minify_js($js)
	{
		// 需要考虑 http:// 的斜线，暂时只移除单独成行的注释
		$res = preg_replace('/[\r\n][\s\t]*\/\/.*/', '', $js);

		return $res;
	}
}
