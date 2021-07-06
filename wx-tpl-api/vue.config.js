const path = require('path');
const config = require('./webpack/config.js');

const webpackOptions = {
	outputDir: path.resolve(config.back.path.root, config.back.path.public),
	
	// index.html 文件输出位置
	indexPath: path.resolve(config.back.path.root, config.back.path.baseHtml),

	devServer: {
		// 输出内存中的文件到本地，serve 模式下有效
		writeToDisk(filepath) {

			// 如果是访问前端的 http-server, 则不需要输出文件到后端
			if (config.front.tpl_parameters.visit_mode === 'visit_by_front') {
				return false;
			}

			// 热更新文件不输出
			if (/hot-update/.test(filepath)) {
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