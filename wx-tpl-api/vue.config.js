const path = require('path');
const config = require('./webpack/config.js');

const webpackOptions = {
	outputDir: path.resolve(config.back.path.root, config.back.path.public, config.front.env),
	assetsDir: {
		// 前后端模式 的 路径有区别, 是为了 在 webpack 自动清空时, 不清空 后端的 public 文件夹
		front: `${config.front.env}/assets`,
		back: `${config.front.env}/assets`,

	}[config.front.tpl_parameters.visit_mode],
	// publicPath: '/static',

	// index.html 文件输出位置
	// 入口 html 区分了 生产 和 开发环境
	indexPath: path.resolve(
		config.back.path.root,
		config.back.path.baseHtmlDir,
		`base_${config.front.env}.html`
	),

	devServer: {
		// 禁止 host 检查, 否则访问 后端 http-server 的时候, socket 无法连接上
		disableHostCheck: true,
		// 输出内存中的文件到本地，serve 模式下有效
		writeToDisk(filepath) {

			// 如果是访问前端的 http-server, 则不需要输出文件到后端
			if (config.front.tpl_parameters.visit_mode === 'front') {
				return false;
			}

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
	chainWebpack: cfg => {
		cfg.plugin('html').tap(args => {
			// 模板参数注入
			args[0].wx = config.front.tpl_parameters;
			return args;
		})
	}
}

module.exports = webpackOptions;