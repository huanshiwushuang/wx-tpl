import Vue from 'vue';
import Cookie from "js-cookie";
import Axios from 'axios';
import Config from '@/assets/config/config.json5';
import { parse, walk, SyntaxKind } from "html5parser";
import JSON5 from 'json5';
// import './directives';
// https://www.cnblogs.com/LittlePanger/p/12626692.html
// https://www.npmjs.com/package/nprogress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import './api';
// 收集基础信息
import collectEnv from "./common/wx-func-collect-env";
// 收集媒体查询信息
import collectMedia from "./common/wx-func-collect-meida";

// http://vivify.mkcreative.cz/
// import "vivify.css";

//进度条
NProgress.configure({
	easing: 'ease',  // 动画方式
	speed: 500,  // 递增进度条的速度
	showSpinner: false, // 是否显示加载ico
	// trickleSpeed: 50, // 自动递增间隔
	minimum: 0.3 // 初始化时的最小百分比
})
// NProgress.inc(0.3);

// util
const u = {
	url: {
		// url字符串 转 url对象
		parse: function (url) {
			if (url === location) {
				url = location.href;
			}
			var reg = /([a-zA-Z]+):\/\/([^/:]+)(:\d+)?(\/[^?#]*)?(\?[^#]*)?(#.*)?/;
			var arr = url.match(reg);
			return {
				source: url,
				protocol: arr[1],
				hostname: arr[2],
				port: arr[3] ? arr[3].slice(1) : "",
				path: arr[4] ? arr[4] : "",
				segments: (function () {
					if (arr[4]) {
						return arr[4]
							.replace(/^\//, "")
							.replace(/\/$/, "")
							.split("/");
					}
					return "";
				})(),
				search: arr[5] ? arr[5] : "",
				params: function () {
					var seg = arr[5] ? arr[5] : "";
					let map = this.qsToMap(seg.slice(1));

					[...map.keys()].forEach(key => {
						let val = map.get(key);

						if (Array.isArray(val)) {
							let newVal = [];
							// 去除 undefined
							val.forEach(item => {
								if (item) {
									newVal.push(item);
								}
							})
							map.set(key, newVal);
						} else {
							// 去除 undefined
							if (!val) {
								map.delete(key);
							}
						}
					})
					return map;
				}.bind(this)(),
				hash: arr[6] ? arr[6].slice(1) : "",
				relative:
					(arr[4] ? arr[4] : "") +
					(arr[5] ? arr[5] : "") +
					(arr[6] ? arr[6] : ""),
			};
		},
		// url对象 转 url字符串
		stringify: function (obj) {
			return [
				obj.protocol,
				"://",
				obj.hostname,
				(function () {
					return obj.port ? ":" + obj.port : "";
				})(),
				// path
				(() => {
					return obj.segments ? `/${obj.segments.join('/')}` : null;
				})(),
				// querystring
				function () {
					var paramsStr = this.mapToQs(obj.params);
					return paramsStr && "?" + paramsStr;
				}.bind(this)(),
				(function () {
					return obj.hash ? "#" + obj.hash : "";
				})(),
			].join("");
		},
		// Map 转 querystring
		mapToQs: function (map) {
			return [...map].reduce(
				function (sum, item) {
					var el;
					if (Array.isArray(item[1])) {
						el = item[1]
							.reduce(function (su, ite) {
								if (ite) {
									su.push(item[0] + "=" + ite);
								} else {
									su.push(item[0]);
								}
								return su;
							}, [])
							.join("&");
					} else {
						if (item[1]) {
							el = item[0] + "=" + item[1];
						} else {
							el = item[0];
						}
					}
					sum.push(el);
					return sum;
				},
				[]
			).join("&");
		},
		// querystring 转 Map
		qsToMap: function (qs) {
			var ret = new Map(),
				seg = qs.split("&"),
				len = seg.length,
				i = 0,
				s;
			for (; i < len; i++) {
				if (!seg[i]) {
					continue;
				}
				s = seg[i].split("=");
				ret.has(s[0]) ? ret.get(s[0]).push(s[1]) : ret.set(s[0], [s[1]]);
			}
			ret.forEach(function (item, key) {
				if (item.length == 1) {
					ret.set(key, item[0]);
				}
			});
			return ret;
		},
		// querystring 编码
		qsEncode: function (qs) {
			var map = u.url.qsToMap(qs);
			map.forEach(function (val, key) {
				if (Array.isArray(val)) {
					val.forEach(function (item, index) {
						val[index] = encodeURIComponent(item);
					});
				} else {
					map.set(key, encodeURIComponent(val));
				}
			});
			return this.mapToQs(map);
		},
		// querystring 解码
		qsDecode: function (qs) {
			var map = u.url.qsToMap(qs);
			map.forEach(function (val, key) {
				if (Array.isArray(val)) {
					val.forEach(function (item, index) {
						val[index] = decodeURIComponent(item);
					});
				} else {
					map.set(key, decodeURIComponent(val));
				}
			});
			return this.mapToQs(map);
		},
		// qs 替换
		qsUpdate: function (url, qsObj) {
			if (url === location) {
				url = location.href;
			}
			var urlObj = this.parse(url);
			Object.keys(qsObj).forEach(function (item) {
				urlObj.params.set(item, qsObj[item]);
			});
			return this.stringify(urlObj);
		},
		// qs 整个替换
		qsUpdateAll(url, qsStr) {
			var urlObj = this.parse(url);
			urlObj.params = this.qsToMap(qsStr);
			return this.stringify(urlObj);
		},
		// qs 只保留
		qsInclude(url, obj) {
			var urlObj = this.parse(url);
			urlObj.params.forEach((val, key, map) => {
				if (key in obj) {
					if (typeof obj[key] === 'boolean') {
						if (!obj[key]) {
							map.delete(key);
						}
					} else if (obj[key] != val) {
						map.delete(key);
					}
				} else {
					map.delete(key);
				}
			})
			return this.stringify(urlObj);
		},

	},
	json: {
		// 将非标准的JSON字符串标准化
		normalize: function (str) {
			return str
				.replace(/'/g, '"').replace(/[\s\r\n]*([\][{},"])[\s\r\n]*/g, '$1').replace(/,([}\]])/g, '$1').replace(/([{,])([^:{"]+?):/g, '$1"$2":');
		},
	},
	util: {
		// setTimeout 模拟 setInterval
		setInterval: function (func, ms) {
			var more = [...arguments].slice(2);
			var id;
			var stop = false;
			var exec = function () {
				if (!stop) {
					var res = func.apply(this, more);
					if (!res || !/promise/i.test(res.constructor.name)) {
						throw new Error("please return Promise");
					}
					res.then(function () {
						id = setTimeout(exec, ms);
					}).catch(() => {
						console.log('reject');
					});
				}
			};
			id = setTimeout(exec, ms);
			return {
				clearInterval: function () {
					stop = true;
					clearTimeout(id);
				},
			};
		},
		// 解析 html
		parseHTML: function (html) {
			console.time("ast");
			var waitRemove = [];
			var ast = parse(html, {
				setAttributeMap: true,
			});
			walk(ast, {
				enter: function (node, parent) {
					node.parent = parent;
					// html 源码字符串
					// node.src = html;
					switch (node.type) {
						// 文本节点
						case SyntaxKind.Text:
							var trimVal = node.value.trim();
							// if (node.value.replace(/(^\s*)|(\s*$)/g, '') === '') {
							// 处理-空文本节点
							if (trimVal === "") {
								waitRemove.push({
									node: node,
									parent: parent,
								});
							}
							// 非空文本 trim
							else {
								node.value = trimVal;
								node.rawHtml = node.value;
								node.toString = function () {
									return this.value;
								}
							}
							break;
						// 其他节点
						case SyntaxKind.Tag:
							// 注释节点
							if (["!--"].indexOf(node.name) !== -1) {
								waitRemove.push({
									node: node,
									parent: parent,
								});
							} else {
								// 有 id 属性的 node，提到根节点来
								if (node.attributeMap.id) {
									ast[node.attributeMap.id.value.value] = node;
								}
								// 有 class 属性的 node，提到根节点来
								if (node.attributeMap.class) {
									var arr = node.attributeMap.class.value.value
										.trim()
										.replace(/\s+/, " ")
										.split(" ");
									for (var i = 0; i < arr.length; i++) {
										if (
											Array.isArray(ast[arr[i]])
										) {
											ast[arr[i]].push(node);
										} else {
											ast[arr[i]] = [node];
										}
									}
								}
								// 附加 rawHtml 属性
								if (node.close) {
									node.rawHtml = html.slice(node.open.start, node.close.end);
								} else {
									node.rawHtml = html.slice(node.open.start, node.open.end);
								}
								// 有cid，则设置属性到父对象的body上
								let cid = node.attributeMap.cid?.value?.value;
								if (cid) {
									parent.body[cid] = node;
								}
								// 重写所有 attributes 的 toString
								node.attributes.forEach(item => {
									item.toString = function () {
										return this.value.value.trim();
									}
								})
								// 根据 data-mime 确定是否需要格式化为 JSON5
								switch (node.attributeMap['data-mime']?.value?.value) {
									case 'json5':
										try {
											node.json = JSON5.parse(node.body[0]?.value?.trim() || '{}');
										} catch (e) {
											setTimeout(() => {
												console.log('ko0yzt3g_haha');
												console.log(node.body[0]?.value?.trim());
												console.log('ko0yzt3g_haha');
												throw e;
											}, 2000)
										}
										break;
								}
								// node 的 toString
								node.toString = function () {
									let div = document.createElement('div');
									div.innerHTML = this.rawHtml;
									return div.innerText.trim();
								}
							}
							break;
					}
				},
			});
			// 遍历删除无用的 node
			for (var i = 0; i < waitRemove.length; i++) {
				if (waitRemove[i].parent) {
					waitRemove[i].parent.body.splice(
						waitRemove[i].parent.body.indexOf(waitRemove[i].node),
						1
					);
				} else {
					ast.splice(ast.indexOf(waitRemove[i].node), 1);
				}
			}
			// 将 数组 转成 对象，便于 vue 追踪
			ast = Object.keys(ast).reduce((sum, key) => {
				sum[key] = ast[key];
				return sum;
			}, {});

			console.timeEnd("ast");
			return ast;
		},
		// 遍历 tree 节点
		// 深度优先
		walkTree({
			tree = {},
			childrenKey = 'children',
			enter,
			leave
		}) {
			let end = false;
			let endWalk = function () {
				end = true;
			}
			let walk = function (node, parent, indexArr) {
				// 遍历子节点之前
				enter && enter(...arguments, endWalk);
				// 深度迭代
				for (let i in node[childrenKey]) {
					if (Object.prototype.hasOwnProperty.call(node[childrenKey], i) && !end) {
						let tmp = [...indexArr, i];
						walk(node[childrenKey][i], node, tmp);
					}
				}
				// 遍历子节点之后
				leave && leave(...arguments, endWalk);
			}
			if (Array.isArray(tree)) {
				for (let i in tree) {
					if (!end) {
						walk(tree[i], undefined, [i]);
					}
				}
			} else {
				walk(tree, undefined, []);
			}
		}
	},
	html: {
		decode(str) {
			let div = document.createElement('div');
			div.innerHTML = str;
			return div.innerText;
		},
	}
};
// ast
const ast = u.util.parseHTML([...document.querySelectorAll('.data')].map(i => {
	return i.innerHTML
}).join(''));
// localStorage-版本号
const v = `kn6tevr2`;
const local = {
	get: () => {
		let obj;
		try {
			obj = JSON.parse(localStorage.getItem("wxwp") || "{}");
		} catch (e) {
			console.error('local get JSON.parse error');
			local.reset();
			return local.get();
		}

		if (!obj.v || parseInt(obj.v, 36) < parseInt(v, 36)) {
			local.reset();
			return local.get();
		}
		local.value = obj;
		return obj;
	},
	reset: () => {
		local.set({
			v,
		});
	},
	set: (obj) => {
		let val;
		try {
			val = JSON.stringify(obj);
		} catch (e) {
			return console.error('local set JSON.stringify error');
		}
		local.value = obj;
		localStorage.setItem("wxwp", val);
	},
};
Object.assign(local, {
	value: local.get()
})
// url
// const url = (() => {
// 	let obj = u.url.parse(location.toString());
// 	let qs = u.url.mapToQs(obj.params);
// 	obj.params = u.url.qsToMap(u.url.qsDecode(qs));
// 	return obj;
// })();

const url = u.url.parse(decodeURI(location.href));
// merge
const media = collectMedia();
const protoData = {
	$ELEMENT: { size: "small" },
	// https://github.com/js-cookie/js-cookie#readme
	$cookie: Cookie,
	// 跨组件通信事件总线
	$bus: new Vue(),
	$axios: Axios,
	$config: Config,
	$get(url, data, config) {
		return Axios.get(url, {
			params: data,
			...config,
		})
	},
	$post(url, data, config) {
		return Axios.post(url, data, config)
	},
	// 只发送，用于数据统计
	$send(url, data) {
		let formdata = new FormData;
		formdata.append('data', JSON.stringify(data));
		// 现代浏览器
		if (navigator.sendBeacon) {
			return navigator.sendBeacon(url, formdata);
		}
		// IE 浏览器
		return this.$post(url, formdata, {
			headers: {
				'Content-Type': 'multiple/form-data'
			}
		})
	},
	$u: u,
	$env: collectEnv(),
	$ast: ast,
	$url: url,
	$vue: Vue,
};
const mixinData = {
	media,
	ast,
	url,
	local,
	bus: {
		ball: [],
	},
	// 异步加载的组件
	coms: [],
};

// 使用************************************************************************************************************************************
Object.assign(Vue.prototype, protoData);
Vue.mixin({
	data() {
		return {
			...mixinData,
			window,
		};
	},
	created() {
		let name = this.$options.name;
		if (name) {
			if (this.$root[name]) {
				this.$root[name].push(this);
			} else {
				this.$root[name] = [this];
			}
		}
	},
	beforeDestroy() {
		let name = this.$options.name;
		if (name) {
			let index = this.$root[name].indexOf(this);
			if (index != -1) {
				this.$root[name].splice(index, 1);
			}
		}
	}
});
