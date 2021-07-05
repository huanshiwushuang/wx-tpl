const path = require('path');
const fs = require('fs');
// 子项目
const pages = require('./webpack/pages');
// 配置
const myWebpackConfig = require('./webpack/config');
// 文件复制
const CopyWebpackPlugin = require('copy-webpack-plugin');
// fs-extra
const fse = require('fs-extra');
const art = require('art-template');
// html压缩
const minify = require('html-minifier-terser').minify;
// 文件夹清理
const { GhRemoveDistDir } = require('./webpack/plugins');
// hook loader
// const { hookLoader } = require('./webpack/loaders');
const JSON5 = require('json5');
// 当前环境变量
const env = process.env.NODE_ENV;


// https://www.cnblogs.com/mengff/p/7097011.html
// 对象扁平化函数
const flatten = function (obj) {
	var result = {};
	function recurse(src, prop) {
		var toString = Object.prototype.toString;
		// 判断条件有改动
		if (toString.call(src) == '[object Object]' && !('isPage' in src)) {
			var isEmpty = true;
			for (var p in src) {
				isEmpty = false;
				recurse(src[p], prop ? prop + '-' + p : p)
			}
			if (isEmpty && prop) {
				result[prop] = {};
			}
		} else if (toString.call(src) == '[object Array]') {
			throw new Error('not support array');
		} else {
			result[prop] = src;
		}
	}
	recurse(obj, '');
	return result;
}


// ************************************************************************************************
// 扁平化后的 pages
var flattenPages = flatten(pages);
// console.log(flattenPages);

// ************************************************************************************************
// 解析 page 配置对象嵌套路径层次
Object.keys(flattenPages).forEach(item => {
	let pageOptions = flattenPages[item];
	// let pagePath = item.split('-');

	pageOptions.pageDir = item.split('-');

	// pageOptions.options = {
	// 	// 模块名
	// 	moduleName: pagePath[0],
	// 	// 控制器名
	// 	controllerName: pagePath[1],
	// 	// 页面名
	// 	pageName: pagePath[2],
	// }
})
// ************************************************************************************************
// 重配置 pages 选项
flattenPages = Object.keys(flattenPages).reduce((sum, item) => {
	let pageOptions = flattenPages[item];
	// 统一注入 filename 前缀路径，输出文件到子文件夹
	sum[item] = {
		...pageOptions,
		entry: path.resolve(
			myWebpackConfig.frontEndSrc,
			`view`,
			pageOptions.pageDir.join('/'),

			// `${pageOptions.options.moduleName}`,
			// `${pageOptions.options.controllerName}`,
			// `${pageOptions.options.pageName}`,
			`entry.js`,
		),
		templateContent: compiler => {
			// let viewRoot = path.resolve(`${compiler.webpackConfig.output.path}/view`);
			let viewRoot = {
				development: path.resolve(`${myWebpackConfig.backEndProject}/src/view`),
				production: path.resolve(`${myWebpackConfig.backEndProject}/src/view-build`),
			}[env];
			// switch (compiler.webpackConfig.mode) {
			// 	case 'development':
			// 		viewRoot = path.resolve(`${myWebpackConfig.frontEndSrc}`);
			// 		break;
			// 	case 'production':
			// 		viewRoot
			// 		break;
			// }
			// 编译 art，生成 injectInHead include
			// let injectInHead = fs.readFileSync(
			// 	path.resolve(
			// 		myWebpackConfig.frontEndSrc,
			// 		// `src`,
			// 		`others/art/injectInHead.html`
			// 	)
			// ).toString();
			// let injectInHead = art.render(injectInHead, compiler);

			// 编译 art，生成 injectInHead include
			let injectInHead = art(path.resolve(
				myWebpackConfig.frontEndSrc,
				// `src`,
				`others/art/injectInHead.html`
			), compiler);
			fse.outputFileSync(
				path.resolve(
					viewRoot,
					`${pageOptions.pageDir.join('/')}_injectInHead.html`,
					// pageOptions.options.moduleName,
					// pageOptions.options.controllerName,
					// `${pageOptions.options.pageName}_injectInHead.html`,
				),
				// 开发环境不压缩
				({
					development: injectInHead,
					production: minify(injectInHead, {
						collapseInlineTagWhitespace: true,
						collapseWhitespace: true,
						minifyCSS: true,
						minifyJS: true,
						removeComments: true,
					})
				})[env]
			)
			// 编译 art，生成 injectBeforeBodyEnd include
			let injectBeforeBodyEnd = art(
				path.resolve(
					myWebpackConfig.frontEndSrc,
					// `src`,
					`others/art/injectBeforeBodyEnd.html`
				), compiler);
			fse.outputFileSync(
				path.resolve(
					viewRoot,
					`${pageOptions.pageDir.join('/')}_injectBeforeBodyEnd.html`,
					// pageOptions.options.moduleName,
					// pageOptions.options.controllerName,
					// `${pageOptions.options.pageName}_injectBeforeBodyEnd.html`,
				),
				// 开发环境不压缩
				({
					development: injectBeforeBodyEnd,
					production: minify(injectBeforeBodyEnd, {
						collapseInlineTagWhitespace: true,
						collapseWhitespace: true,
						minifyCSS: true,
						minifyJS: true,
						removeComments: true,
					})
				})[env]
			)
			// console.log(compiler);
			// console.log(compiler.compilation);
			// console.log(compiler.webpackConfig);
			// console.log(compiler.htmlWebpackPlugin);
			// console.log(compiler.htmlWebpackPlugin.files);
			// compiler.htmlWebpackPlugin.files.js;

			// 生产环境，复制入口 html 文件
			switch (env) {
				case 'production':
					var entryHtml = fs.readFileSync(
						path.resolve(
							myWebpackConfig.backEndProject,
							`src/view`,
							`${pageOptions.pageDir.join('/')}.html`,
							// `${pageOptions.options.moduleName}`,
							// `${pageOptions.options.controllerName}`,
							// `${pageOptions.options.pageName}.html`,
						)
					).toString();

					fse.outputFileSync(
						path.resolve(
							myWebpackConfig.backEndProject,
							`src/view-build`,
							`${pageOptions.pageDir.join('/')}.html`,
							// pageOptions.options.moduleName,
							// pageOptions.options.controllerName,
							// `${pageOptions.options.pageName}_injectBeforeBodyEnd.html`,
						),
						minify(entryHtml, {
							collapseInlineTagWhitespace: true,
							collapseWhitespace: true,
							minifyCSS: true,
							minifyJS: true,
							removeComments: true,
						})
					)
					break;
			}
			return '暂时未找到办法不生成此文件';
		},
		filename: path.join(
			`view`,
			`${pageOptions.pageDir.join('/')}.html`,
			// `${pageOptions.options.moduleName}`,
			// `${pageOptions.options.controllerName}`,
			// `${pageOptions.options.pageName}.html`,
		),
		chunks: [
			...pageOptions.chunks,
			// 添加当前页面的入口 chunk
			`${pageOptions.pageDir.join('-')}`,
			// `${pageOptions.options.moduleName}-${pageOptions.options.controllerName}-${pageOptions.options.pageName}`
		]
	}
	return sum;
}, {});
// ************************************************************************************************
// 保存页面配置到文件
fse.outputFileSync(
	path.resolve(`${myWebpackConfig.frontEndProject}/webpack/tmp/flattenPages.json`),
	JSON.stringify(flattenPages, null, '\t')
);
// process.exit();

// console.log();
// process.exit();

// ************************************************************************************************
// webpackOptions
const webpackOptions = {
	publicPath: {
		development: '/static/wp',
		production: '/static-build/wp',
	}[env],
	outputDir: myWebpackConfig.backEndAssets,
	assetsDir: 'public/assets',
	// 显示指明需要转译的依赖，因为默认 presets 在开发环境不转译 node_modules 中的语法
	transpileDependencies: [
		'ansi-regex',
		'strip-ansi',
		// 'vue-toastification'
	],
	css: {
		// 和 css 热重载不兼容，提取出来，先有样式
		extract: true,
		loaderOptions: {
			less: {
				lessOptions: {
					// 全局注入 less
					modifyVars: {
						hack: `true; @import '~@/assets/less/var.less';`
					}
				}
			}
		}
	},
	pages: {
		...flattenPages
	},
	chainWebpack: webpackConfig => {
		// 排除校验 element-ui 的错误
		webpackConfig.module.rule('eslint').exclude.store.add(/element-ui/);
	},
	configureWebpack: webpackConfig => {
		// console.log(webpackConfig);

		// webpackConfig.


		let opts = {
			// output: {
			//     path: path.resolve(`${myWebpackConfig.outputDir}/public/assets/public`),
			//     filename: '[name].[hash].js',
			//     // publicPath: "http://cdn.example.com/assets/[hash]/"
			// },

			optimization: {
				splitChunks: {
					minSize: 0,
					minChunks: 1,
					// https://imweb.io/topic/5b66dd601402769b60847149
					// webpack 默认配置
					cacheGroups: {
						// init: {
						//     name: 'chunk-init',
						//     test: /[\\/]init[\\/]entry/,
						//     // test (module) {
						//     //     return /init/.test(module.resource);
						//     // },
						//     priority: -9,
						//     chunks: 'initial'
						// },
						// dbdetail: {
						//     name: 'chunk-dbdetail',
						//     test(module) {
						//         return /[\\/]node_modules[\\/]/.test(module.resource) || /element-ui/.test(module.resource);
						//     },
						//     priority: -10,
						//     chunks: 'initial'
						// },
						vendors: {
							name: 'chunk-vendors',
							test(module) {
								return /[\\/]node_modules[\\/]/.test(module.resource) || /element-ui/.test(module.resource);
							},
							priority: -10,
							chunks: 'initial'
						},
						common: {
							name: 'chunk-common',
							// test(module) {
							//     return /wx-/.test(module.resource);
							// },
							minChunks: 2,
							priority: -20,
							chunks: 'initial',
							reuseExistingChunk: true
						}
					}
				},
			},
			devServer: {
				disableHostCheck: true,
				// 只有 serve 模式，此选项才生效
				writeToDisk: function (filepath) {
					// 设置不写入 view 文件夹
					// if (/view/.test(filepath) || /hot-update/.test(filepath)) {
					if (/hot-update/.test(filepath)) {
						return false;
					}
					return true;
				},
				// 因为提取了 css，和热模块替换不兼容，so 禁用-》回退到自动刷新.
				hot: false,
				host: "localhost",
				port: '8000',
				// 在所有响应中添加首部内容
				headers: {
					'access-control-allow-origin': '*',
				},
				proxy: {
					'/api': {
						target: 'http://dev.wuxuwang.com', // 请求服务器根路径
						// changeOrigin: true, // 是否跨域
						ws: true, // websocket
						secure: false,
						pathRewrite: { // 重写路径: 当检测到请求地址里包含 /api 时,将此路径进行跨域代理操作
							'^/api': '/'
						}
					}
				}
			},
			resolve: {
				alias: {
					// 引入完整版 vue，而不只是 runtime，方便使用 vue 的 模板语法
					'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
				}
			},
			plugins: [
				new GhRemoveDistDir(),

			],
			resolveLoader: {
				modules: [
					'node_modules',
					path.resolve(`./webpack/loaders`),
				]
			},
			module: {
				rules: [
					{
						// 前后端交互的配置文件
						test: /\.json5$/,
						use: [
							'json5-loader',
							{
								loader: 'hook-loader',
								options: {
									hook: (source, ctx) => {
										// console.log(ctx);

										let name = ctx.resourcePath.split(path.sep).slice(-1)[0].split('.')[0];

										// 如果是配置的 config.json5，则写入 backend
										// if (/config\.json5/.test(ctx.resourcePath)) {
										let json = JSON5.parse(source);
										// 写入 config.json5
										fse.outputFile(path.resolve(
											myWebpackConfig.backEndProject,
											'cfg',
											`${name}.json5`,
										), source);
										// 写入 config.json
										fse.outputFile(path.resolve(
											myWebpackConfig.backEndProject,
											'cfg',
											`${name}.json`,
										), JSON.stringify(json, null, '\t'));
										// }
									}
								}
							},
						]
					}
				]
			}
		}

		switch (env) {
			// 开发环境，为了防止缓存，每次编译都用新的 时间戳代替【但是暂不确定，编译后再修改保存的文件会不会有缓存问题】
			// case 'development':
			// 	// 可以注释之后，通过 vue inspect --mode production 查看生产环境的配置
			// 	opts.output = {
			// 		filename: `public/assets/js/${stamp}.[name].js`,
			// 		chunkFilename: `public/assets/js/${stamp}.[name].js`
			// 	}
			// 	break;
			// 生产环境才 copy
			case 'production':
				opts.plugins.push(new CopyWebpackPlugin({
					patterns: [
						// 复制 data
						{
							from: path.resolve(myWebpackConfig.backEndProject, 'src/view/data'),
							to: path.resolve(myWebpackConfig.backEndProject, 'src/view-build/data'),
							transform(content) {
								// 压缩 html
								return minify(content.toString(), {
									collapseInlineTagWhitespace: true,
									collapseWhitespace: true,
									minifyCSS: true,
									minifyJS: true,
									removeComments: true,
								});
							}
						},
						// 复制 datastatic
						{
							from: path.resolve(myWebpackConfig.backEndProject, 'src/view/datastatic'),
							to: path.resolve(myWebpackConfig.backEndProject, 'src/view-build/datastatic'),
							transform(content) {
								// 压缩 html
								return minify(content.toString(), {
									collapseInlineTagWhitespace: true,
									collapseWhitespace: true,
									minifyCSS: true,
									minifyJS: true,
									removeComments: true,
								});
							}
						},
						// 复制 Resource
						{
							from: path.resolve(myWebpackConfig.backEndProject, 'src/view/resource'),
							to: path.resolve(myWebpackConfig.backEndProject, 'src/view-build/resource'),
							transform(content) {
								// 压缩 html
								return minify(content.toString(), {
									collapseInlineTagWhitespace: true,
									collapseWhitespace: true,
									minifyCSS: true,
									minifyJS: true,
									removeComments: true,
								});
							}
						}
					],
				}))
				break;
		}
		return opts;
	}
}

module.exports = webpackOptions;
