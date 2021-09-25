const modulesFiles = require.context('.', true, /[^index]\.js$/)

// webpack 读取当前目录下的所有除了 index.js 的模块，将导出合并为一个
const sum = modulesFiles.keys().reduce((sum, modulePath) => {
	const value = modulesFiles(modulePath)
	const { state, mutations, actions, getters } = value.default

	state && Object.assign(sum.state, state)
	getters && Object.assign(sum.getters, getters)
	mutations && Object.assign(sum.mutations, mutations)
	actions && Object.assign(sum.actions, actions)

	return sum
}, {
	state: {},
	getters: {},
	mutations: {},
	actions: {}
})


const state_keys = Object.keys(sum.state);
const mutations_keys = Object.keys(sum.mutations);

// 缓存其他 state 的 cache，便于 commit reset
// 有的 state，初始化的值，来自于接口
// 所以可以拿到数据之后更新 cache，下面的 reset 数据全部来自于 cache
Object.assign(sum.state, {
	ktyh0hji_cache: JSON.parse(JSON.stringify(sum.state))
})
Object.assign(sum.mutations, {
	ktyh0hji_cache(state, payload) {
		state.ktyh0hji_cache = payload;
	}
})

// 给所有 state 变量，添加默认的 mutation
// 给所有 state 变量，添加对应的 reset mutation
state_keys.forEach((key) => {
	let key_reset = `${key}_reset`;

	if (!mutations_keys.includes(key)) {

		sum.mutations[key] = function (state, payload) {
			state[key] = payload;
		}
	}
	if (!mutations_keys.includes(key_reset)) {

		sum.mutations[key_reset] = function (state) {
			state[key] = JSON.parse(JSON.stringify(sum.state.ktyh0hji_cache[key]));
		}

	}
})

export default sum