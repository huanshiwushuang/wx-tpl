// https://blog.csdn.net/sanxian_li/article/details/39394097

define(['js_cookie', 'axios', 'html5parser', 'json5', 'vue_loader', 'less'], (Cookie, Axios, { parse, walk, SyntaxKind }, JSON5, vueLoader, Less) => {
	// 源码根路径
	const src = '/static/admin';

	// requirejs promise 包装
	// const _require = window.requirejs;
	// require = requirejs = function () {
	// 	const args = arguments;
	// 	// 如果最后的是函数，则回调调用
	// 	if (typeof [...arguments].slice(-1)[0] === 'function') {
	// 		_require.apply(this, args);
	// 	}
	// 	// 返回 Promise
	// 	else {
	// 		return new Promise((resolve) => {
	// 			_require.call(this, ...args, function () {
	// 				resolve(...arguments);
	// 			});
	// 		}) 
	// 	}
	// }

	// 工具对象
	const u = {
		html: {
			to_ast(html_str) {
				console.time("to_ast");

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
						// 删除无用属性
						delete node.attributeMap;

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
											// 此处三元运算，是为了防止，value 无值
											val: item.value ? u.html.get_text(item.value.value) : item.value,
											// 单双引号，便于之后 ast.to_html
											quote: item.value ? item.value.quote : null,
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

									// 根据 type 确定是否需要格式化为 JSON5
									switch (node.attrMap['type']?.replace(/[\s\t]/g, '')) {
										case 'text/json5':
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

				console.timeEnd("to_ast");
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
				if (!Array.isArray(ast)) {
					throw new Error('please input array');
				}
				console.time('to_html');

				let res = '';
				walk(ast, {
					// 属性节点拼装
					// 需要区分 enter 和 leave
					// 确保 子节点已 拼装完毕
					// 才在 leave 中拼装 close 属性
					enter(node) {
						switch (node.type) {
							case SyntaxKind.Text:
								res += node.value.trim();
								break;
							case SyntaxKind.Tag: {
								let attr = node.attr.map(i => {
									return `${i.key}=${i.quote}${i.val}${i.quote}`;
								}).join(' ');

								res += `<${node.rawName} ${attr}>`
								break;
							}
						}
					},
					leave(node) {
						switch (node.type) {
							case SyntaxKind.Tag:
								// 如果元素节点有结束标签
								if (node.close) {
									res += node.close.value;
								}
								break;
						}
					}
				})

				console.timeEnd('to_html');

				return res;
			}
		},
		json: {
			// 针对一些可能 单双引号 混用的不合法的json，处理，使用场景很少
			normalize(str) {
				return str
					.replace(/'/g, '"').replace(/[\s\r\n]*([\][{},"])[\s\r\n]*/g, '$1').replace(/,([}\]])/g, '$1').replace(/([{,])([^:{"]+?):/g, '$1"$2":');
			}
		}
	}

	// AST 数据
	const ast = u.html.to_ast([...document.querySelectorAll('.data')].map(i => {
		return i.outerHTML
	}).join(''));

	// localStorage 数据
	// localStorage 版本号
	const v = `krk7p4iy`;
	const local = {
		get() {
			let obj;
			let store;

			// 防止无写存储权限，导致 app 崩溃
			try {
				store = localStorage.getItem("wuxuwang.com");
			} catch (e) {
				// 无权限写存储，直接 return
				return console.error(e);
			}

			// json 解析错误，则重置
			try {
				obj = JSON.parse(store || "{}");

				// 版本号错误，则重置
				if (!obj.v || parseInt(obj.v, 36) < parseInt(v, 36)) {
					local.reset();
					return local.get();
				}
			} catch (e) {
				console.error('local get JSON.parse error');
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
		// 有参数-合并保存 value
		// 无参数-直接保存 value
		set(obj) {
			if (obj) {
				this.value = Object.assign({}, this.value, obj)
			}
			// 防止无写存储权限，导致 app 崩溃
			try {
				localStorage.setItem("wuxuwang.com", JSON.stringify(this.value));
			} catch (e) {
				return console.error(e);
			}
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
		// body 的 class
		bodyClass: [],
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

	// 初始化-vueLoader
	vueLoader.httpRequest = url => {
		// 替换 @
		if (url.startsWith('@')) {
			url = url.replace(/^@/, src);
		}

		return Axios.get(url)
		.then(function(res) {
			return res.data;
		})
		.catch(function(err) {
			return Promise.reject(err.status);
		});
	}

	vueLoader.langProcessor.less = function (lessText) {
        return new Promise(async function(resolve, reject) {
			let rst = await Less.render(lessText);
			resolve(rst.css);
        });
    }

	window.vueLoader = vueLoader;

	return {
		// 全局混入 data 中的数据
		mixinData,
		// 挂载在 Vue 原型上的数据
		protoData,
		// 源码根路径
		src,
	}
})
