const loaderUtils = require('loader-utils');


// https://v4.webpack.docschina.org/contribute/writing-a-loader
const hookLoader = function (source) {
	let opts = loaderUtils.getOptions(this);

	// console.log();
	// console.log();
	// console.log(this.resourcePath);
	// console.log();
	// console.log();
	// 如果有 hook 函数，则交由 hook 函数处理
	if (opts.hook) {
		let returnVal = opts.hook(source, this);
		if (returnVal) {
			return returnVal;
		}
	}
	return source;
}

module.exports = hookLoader;