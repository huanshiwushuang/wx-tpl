import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

Vue.use(Vuex)

// 将所有 module 合并为一个 module 放置在 根下，命名问题冲突靠 时间戳前缀解决
export default new Vuex.Store(modules)
