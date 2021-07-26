<?php

namespace kqufcgta_html5;

use Masterminds\HTML5;
// use Masterminds\HTML5\Parser\DOMTreeBuilder;
use Masterminds\HTML5\Parser\Scanner;
use Masterminds\HTML5\Parser\Tokenizer;

class WxHTML5 extends HTML5
{
	// HTML5 中 默认选项是 private，无法被 extend
	protected $defaultOptions = array(
		// Whether the serializer should aggressively encode all characters as entities.
		'encode_entities' => false,

		// Prevents the parser from automatically assigning the HTML5 namespace to the DOM document.
		'disable_html_ns' => false,

		// 是否移除注释【js 的注释只移除单行的，不能移除直接写在代码后面的】
		'remove_comment' => false,

		// 是否压缩源代码
		// 【需要注意，如果要压缩源码，就得移除注释，否则 script 标签中的单行注释会有问题】
		'minify_source' => false,

		// 不压缩的关键字判断
		'any_not_minify' => [],
	);

	public function __construct(array $defaultOptions = array())
	{
		$this->defaultOptions = array_merge($this->defaultOptions, $defaultOptions);
	}

	// 重写 parse 方法
	public function parse($input, array $options = array())
	{
		$this->errors = array();
		$options = array_merge($this->defaultOptions, $options);
		$events = new WxDOMTreeBuilder(false, $options);
		$scanner = new Scanner($input, !empty($options['encoding']) ? $options['encoding'] : 'UTF-8');
		$parser = new Tokenizer($scanner, $events, !empty($options['xmlNamespaces']) ? Tokenizer::CONFORMANT_XML : Tokenizer::CONFORMANT_HTML);

		$parser->parse();
		$this->errors = $events->getErrors();

		return $events->document();
	}
}
