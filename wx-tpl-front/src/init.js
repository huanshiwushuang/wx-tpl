// 初始化各种数据

import Vue from 'vue';
// cookie
import Cookie from "js-cookie";
// 请求库
import Axios from 'axios';
// html 解析库
import { parse, walk, SyntaxKind } from "html5parser";
// json5 解析库
import JSON5 from 'json5';

// 功能对象
const u = {
	html: {
		to_ast(html_str) {
			console.time("ast");

			const waitRemove = [];

			let ast = parse(html_str);

			// 不再被动构建 attributeMap，改为自己 walk 时，主动构建
			// let ast = parse(html_str, {
			// 	setAttributeMap: true,
			// })
			walk(ast, {
				enter(node, parent) {
					// 记录 parent，方便删除无用的子节点
					node.parent = parent;

					switch (node.type) {
						// 文本节点
						case SyntaxKind.Text:
							var trimVal = node.value.trim();
							// 空文本节点
							if (trimVal === "") {
								waitRemove.push(node);
							}
							// 非空文本节点
							else {
								node.value = trimVal;
								node.html = function () {
									return node.value;
								};
								node.toString = function () {
									return node.value;
								}
							}
							break;
						// 标签节点
						case SyntaxKind.Tag:
							// 注释节点
							if (["!--"].includes(node.name)) {
								waitRemove.push(node);
							}
							else {
								// 修改 node 属性名
								node.attr = node.attributes;
								delete node.attributes;

								// 重写所有 attrMap
								node.attrMap = {};
								// 重写所有 attr
								node.attr = node.attr.reduce((sum, item) => {
									let obj = {
										key: item.name.value,
										// 对所有 value 进行解码，统一处理 & 被转义的情况
										val: u.html.get_text(item.value.value),
									};

									Object.defineProperty(node.attrMap, obj.key, {
										get() {
											return obj.val;
										},
										set(val) {
											obj.val = val;
										}
									})

									sum.push(obj);
									return sum;
								}, [])

								// 附加 html 属性
								if (node.close) {
									node.html = function () {
										return html_str.slice(node.open.start, node.close.end);
									};
								} else {
									node.html = function () {
										return html_str.slice(node.open.start, node.open.end);
									};
								}

								// 重写 node 的 toString
								node.toString = function () {
									return u.html.get_text(this.html());
								}

								// 有 id 属性的 node，提到根节点来
								let id = node.attrMap.id;

								if (id) {
									ast[id] = node;
								}
								// 有 class 属性的 node，提到根节点来
								if (node.attrMap.class) {
									let arr = node.attrMap.class.trim().replace(/[\s\t\r\n]+/, ' ')
										.split(' ');

									arr.forEach(item => {
										if (Array.isArray(ast[item])) {
											ast[item].push(node);
										} else {
											ast[item] = [node];
										}
									})
								}
								// 有cid，则设置属性到父对象的body上
								let cid = node.attrMap.cid
								if (cid) {
									parent.body[cid] = node;
								}

								// 根据 mime 确定是否需要格式化为 JSON5
								switch (node.attrMap['mime']) {
									case 'json5':
										try {
											node.json = JSON5.parse(node.body[0]?.value?.trim() || '{}');
										} catch (e) {
											console.error(`json5 parse error: ${node.html()}`)
										}
										break;
								}
							}
							break;
					}
				}
			});

			// 遍历删除无用的 node
			waitRemove.forEach(item => {
				if (item.parent) {
					item.parent.body.splice(item.parent.body.indexOf(item), 1)
				} else {
					ast.splice(ast.indexOf(item), 1);
				}
			});

			// 将 数组 转成 对象，便于 vue 追踪
			ast = Object.keys(ast).reduce((sum, key) => {
				sum[key] = ast[key];
				return sum;
			}, {});

			console.timeEnd("ast");
			return ast;
		},
		get_text(str) {
			let div = document.createElement('div');
			div.innerHTML = str;
			return div.innerText.trim();
		},
	},
	ast: {
		to_html(ast) {
			let res = '';
			walk(ast, {
				enter(node) {
					switch (node.type) {
						case SyntaxKind.Text:
							res += node.value.trim();
							break;
						case SyntaxKind.Tag:
							// res +=
							break;
					}
				}
			})

			return res;
		}
	},
	json: {
		normalize(str) {
			return str
				.replace(/'/g, '"').replace(/[\s\r\n]*([\][{},"])[\s\r\n]*/g, '$1').replace(/,([}\]])/g, '$1').replace(/([{,])([^:{"]+?):/g, '$1"$2":');
		}
	}
}

// AST 数据
const ast = u.html.to_ast([...document.querySelectorAll('.data')].map(i => {
	return i.innerHTML
}).join(''));

// localStorage 数据
// localStorage 版本号
const v = `krk7p4iy`;
const local = {
	get() {
		let obj;

		// json 解析错误，则重置
		try {
			obj = JSON.parse(localStorage.getItem("wx_tpl") || "{}");
		} catch (e) {
			console.error('local get JSON.parse error');
			local.reset();
			return local.get();
		}

		// 版本号错误，则重置
		if (!obj.v || parseInt(obj.v, 36) < parseInt(v, 36)) {
			local.reset();
			return local.get();
		}
		local.value = obj;
		return obj;
	},
	reset() {
		local.value = {
			v,
		};
		local.set();
	},
	// 有参数-追加 value
	// 无参数-保存 value
	set(obj) {
		if (obj) {
			Object.assign(this.value, obj)
		}
		localStorage.setItem("wx_tpl", JSON.stringify(this.value));
	},
};
Object.assign(local, {
	value: local.get()
})

const mixinData = {
	ast,
	local,
	// 异步加载的组件
	coms: [],
	// app 的 class
	appClass: [],
	// url 将在 router.afterEach 中被更新
	url: {},
}
const protoData = {
	$win: window,
	$u: u,
	$cookie: Cookie,
	$axios: Axios,
	$get(url, data, config) {
		return Axios.get(url, {
			params: data,
			...config,
		})
	},
	$post(url, data, config) {
		return Axios.post(url, data, config)
	},
	$vue: Vue,
};

export default {
	mixinData,
	protoData
}

