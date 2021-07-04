const path = require('path');
const { backEndRoot } = require('./env');

// 当前环境变量
const env = process.env.NODE_ENV;



// 前端项目-根路径
exports.frontEndProject = path.resolve(__dirname, '..');
// 后端项目-根路径
exports.backEndProject = backEndRoot;

// 前端源码-路径
exports.frontEndSrc = path.resolve(exports.frontEndProject, `src`);
// 后端源码-路径
exports.backEndAssets = path.resolve(exports.backEndProject, `public/${({
	// PC-开发环境
	development: 'static/wp',
	// PC-生产环境
	production: 'static-build/wp',
})[env]}`);
