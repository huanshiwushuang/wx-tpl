const path = require('path');

// 前端项目配置
const front = {
	env: process.env.NODE_ENV,
	// html 模板参数注入
	// 在模板中，通过 htmlWebpackPlugin.options.wx 访问此对象
	tpl_parameters: {
		// 访问前端的 http-server: front
		// [此种方式,不会输出 模板中的 block, 主要考虑到 serve 开发中, 可以不 writeToDisk, 数据获取可以通过直接 get 页面拿到],
		
		// 访问后端的 http-server: back,

		// 默认: back
		visit_mode: process.env.visit_mode || 'back'
	},
	path: {
		// 项目根目录
		root: path.resolve(__dirname, '..'),
	}
}

// 后端项目配置
const back = {
	path: {
		// 项目根目录
		root: path.resolve(__dirname, '../..'),
		// 此文件 由前端的 public 下的 index.html 模板生成
		// 此文件用于被后端其他模板 extend
		// 相对于 项目根目录的 base.html 文件输出位置，
		baseHtml: 'view/main/base.html',
		// 相对于 项目根目录 的可以公开访问的静态资源的路径
		public: 'public'
	}
}


// 计算最终绝对路径
Object.keys(front.path).forEach(key => {
	front.path[key] = path.resolve(front.path.root, front.path[key]);
})
Object.keys(back.path).forEach(key => {
	back.path[key] = path.resolve(back.path.root, back.path[key]);
})

const res = {
	front,
	back
}
module.exports = res;
