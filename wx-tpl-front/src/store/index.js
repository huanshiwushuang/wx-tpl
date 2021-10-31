import Vue from 'vue'
import Vuex from 'vuex'
import modules, { process_module } from './modules'

Vue.use(Vuex)

const root = {
    // 开发环境，严格模式，禁止不通过 mutations 修改数据
    strict: process.env.NODE_ENV === 'development',
    state: {
        name: 'china',
    },
    getters: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {
        ...modules,
        zzz: {
            namespaced: true,
            state: {
                mm: 31,
            },
            mutations: {
                mm(state, payload) {
                    state.mm = payload;
                }
            }
        }
    }
};

// 像处理其他子 module 一样，处理 root module
process_module(root);

export default new Vuex.Store(root);
