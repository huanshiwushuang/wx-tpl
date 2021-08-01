const path = require('path');

// 前端项目配置
const front = {
	env: process.env.NODE_ENV,
	// html 模板参数注入
	// 在模板中，通过 htmlWebpackPlugin.options.wx 访问此对象
	tpl_parameters: {
		env: process.env.NODE_ENV,
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

		// 文件 由前端的 public 下的 html 模板生成
		// 文件用于被后端其他模板-导入
		// 相对于 项目根目录的 html 文件输出位置，
		baseHtmlDir: 'view/main',

		// 相对于 项目根目录 的可以公开访问的静态资源的路径
		// 默认此路径在 build 时 会【被清空】
		staticDir: 'public/static',
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

console.log(res);

module.exports = res;
