// fs-extra
const fse = require('fs-extra');
const path = require('path');
// 当前环境变量
const env = process.env.NODE_ENV;

class GhRemoveDistDir {
	apply(compiler) {
		// 在 environment，删除文件夹
		compiler.hooks.environment.tap(`GhRemoveDistDir`, () => {
			fse.removeSync(
				({
					development: path.resolve(
						compiler.options.output.path,
						`public`
					),
					production: compiler.options.output.path
				})[env]
			);
		})
	}
}

module.exports = {
	GhRemoveDistDir
}