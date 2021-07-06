const path = require('path');
const config = require('./webpack/config.js');

const webpackOptions = {
	// index.html 文件输出位置
	indexPath: path.resolve(config.back.path.root, config.back.path.indexPath),
	devServer: {
		// 输出内存中的文件到本地，serve 模式下有效
		writeToDisk(filepath) {
			return true;
		}
	}
}

module.exports = webpackOptions;