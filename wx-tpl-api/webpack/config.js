const path = require('path');

// 前端项目配置
const front = {
	env: process.env.NODE_ENV,
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
		// 相对于 项目根目录 index.html 文件输出位置，此文件用于被后端其他模板 extend
		indexPath: 'view/main',
		// 相对于 项目根目录 的可以公开访问的静态资源的路径
		public: 'public/static'
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
