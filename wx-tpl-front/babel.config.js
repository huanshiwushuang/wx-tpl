const plugins = [
	[
		'import', {
			libraryName: 'vant',
			libraryDirectory: 'es',
			// 指定样式路径
			style: (name) => `${name}/style/less`,
		},
		'vant'
	]
];

if (process.env.NODE_ENV === 'production') {
	// 移除 console
	plugins.push(
		["transform-remove-console", { "exclude": ["error", "warn", 'group', 'groupEnd', 'info'] }]
	);
}

module.exports = {
	presets: [
		'@vue/cli-plugin-babel/preset'
	],
	plugins
}
