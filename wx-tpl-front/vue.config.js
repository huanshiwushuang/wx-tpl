const path = require('path');
const config = require('./webpack/config.js');

// 页面 文件名
let pages = [
	`include_head`,
	`include_body`,
]

pages = pages.reduce((sum, item) => {
	sum[item] = {
		// 入口 js
		entry: 'src/main.js',
		// 不自动注入资源
		inject: false,
		// 文件名，保存在后端项目方便导入的地方
		// 根据不同的 env 生成不同的文件
		filename: path.resolve(config.back.path.baseHtmlDir, `${item}_${config.front.env}.html`),
	};
	return sum;
}, {});

const webpackOptions = {
	outputDir: path.resolve(config.back.path.root, config.back.path.staticDir, config.front.env),
	// 每次编译都会是不同的文件夹
	assetsDir: `${Date.now().toString(36)}`,
	// 编译输出的资源模板文件中资源的路径前缀
	publicPath: `/static/${config.front.env}`,
	pages,
	// https://cli.vuejs.org/zh/config/#css-extract
	css: {
		extract: true,
	},
	devServer: {
		// 禁止 host 检查, 否则 socket 无法连接上
		disableHostCheck: true,
		// 输出内存中的文件到本地，serve 模式下有效
		writeToDisk(filepath) {

			// 热更新文件不输出
			if (/hot-update/.test(filepath)) {
				return false;
			}

			// js map 文件不输出
			if (/js\.map/.test(filepath)) {
				return false;
			}

			return true;
		}
	},
}

module.exports = webpackOptions;