const modulesFiles = require.context('.', true, /.js$/)

// 按照 path 为 key, 缓存所有节点到扁平化对象
const node_cache = {};

// webpack 读取当前目录下的所有除了 index.js 的模块，将导出合并为一个 tree
const sum = modulesFiles.keys().filter(modulePath => {
	return !new RegExp('./index.js', 'i').test(modulePath);
}).reduce((sum, modulePath) => {
	// 分割成文件夹名字的数组
	const path_array = modulePath
		.replace(/^\.[/\\]/, '')
		.replace(/\.js$/, '')
		.replace(/\\/, '/')
		.split('/');

	path_array.forEach((item, index) => {
		// 父节点的 key
		const parent_key = path_array.slice(0, index).join('/');
		// 当前节点的 key
		const current_key = path_array.slice(0, index + 1).join('/');

		// 如果是最后一级, 就是 js 文件
		if (index === path_array.length - 1) {
			const defa = {
				state: {},
				getters: {},
				mutations: {},
				actions: {},
				...modulesFiles(modulePath).default
			};
			// 加工 module
			process_module(defa);

			node_cache[current_key] = defa;
		}
		// 文件夹
		else {
			node_cache[current_key] = {
				modules: {
				}
			}
		}

		// 添加命名空间
		node_cache[current_key].namespaced = true;

		// 第一级, 全是没有父节点的根节点, 放到 sum 中
		if (!node_cache[parent_key]) {
			sum[item] = node_cache[current_key];
		}
		// 其他有父节点的, 放到父节点中
		else {
			node_cache[parent_key].modules[item] = node_cache[current_key];
		}
	});

	return sum;
}, {});


// 处理最后的 有数据的 节点
export function process_module(module) {
	// 每个 module 都保留自己 state 的初始化数据
	if (module.state.cache) {
		throw new Error('cache 字段为保留字，不要使用');
	}

	Object.keys(module.state).forEach(state_key => {
		// 添加默认的与 state 同名的 mutations
		if (!(state_key in module.mutations)) {
			module.mutations[state_key] = function (state, payload) {
				state[state_key] = payload;
			}
		}
		// 添加默认的与 state 同名的 mutations reset
		let reset_key = `${state_key}_reset`;
		if (!(reset_key in module.mutations)) {
			module.mutations[reset_key] = function (state) {
				state[state_key] = JSON.parse(JSON.stringify(module.state.cache[state_key]));
			}
		}
	});

	module.state.cache = JSON.parse(JSON.stringify(module.state));
}

export default sum;