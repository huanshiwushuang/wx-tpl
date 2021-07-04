const path = require('path');
const config = require('./webpack/config');

const plugins = [
	["import", {
		libraryName: "@/assets/element-ui",
		style(name) {
			console.log(`\n按需引入组件：${name}，替换 scss 路径`);
			name = name.split('/').slice(-1)[0];

			return path.resolve(`${config.frontEndSrc}/assets/element-ui/packages/theme-chalk/src/${name}.scss`);
		}
	}]
];

if (process.env.NODE_ENV === 'production') {
	// 移除 console
	plugins.push(
		["transform-remove-console", { "exclude": ["error", "warn"] }]
	);
}

module.exports = {
	presets: [
		'@vue/cli-plugin-babel/preset'
	],
	plugins
}
