// base style
import '@/assets/less/base.less';
// config
import { env } from './config'
// 便于拦截数据，实现数据的：模拟、校验
// import './ajaxHook';
// cookie
import Cookie from "js-cookie";
// 请求
import request from './request';
// html_ast
import { html } from './utils/html_ast'
// base62x
import base62x from 'base62x';
// websocket
import websocket from './websocket';
// local
import local from './utils/local_storage';
// 通用工具
import utils from './utils'
// vue
import Vue from 'vue'
// App
import App from './App.vue'
// vuex
import store from './store'
// vue-router
import router from './router'
// 批量注册基础组件
import './components'
// i18n
import i18n from './lang'
// UI 组件库
import Element from 'element-ui'
import '@/assets/scss/element-variables.scss'

Vue.use(Element);

Vue.config.productionTip = false

// 混入同一个对象数据
export const mixinData = {
	ast: html.to_ast([...document.querySelectorAll('.data')].map(i => {
		return i.outerHTML
	}).join('')),
	local,
	// 异步加载的组件
	coms: [],
	// body 的 class
	bodyClass: [],
};
Vue.mixin({
	data() {
		return {
			// fix-bug: 如果直接使用 mixinData 对象，则 在使用 vue-echarts 时，貌似 vue-echarts 会修改到 mixinData，导致所有组件被混入 echarts 的一些方法
			...mixinData
		}
	}
})
// 附加数据到原型
Object.assign(Vue.prototype, {
	$vue: Vue,
	$win: window,
	$ws: websocket,
	$axios: request,
	$cookie: Cookie,
	$get: request.get,
	$post: request.post,
	$base62x: base62x,
	// 稍微封装一下，默认取值的数据是 ast
	$v(deep_key, data = mixinData.ast) {
		return utils.v(data, deep_key);
	},
});

const app = new Vue({
	router,
	store,
	i18n,
	render: h => h(App)
}).$mount('#app');

switch (env) {
	// 开发环境
	case 'development':
		window.app = app;
		break;
	// 生产环境
	case 'production':
		var n = document.querySelectorAll(".data,.node_remove");
		for (var i = 0; i < n.length; i++) {
			n[i].parentNode.removeChild(n[i]);
		}
		window.krk7jl7x = app;
		break;
}
