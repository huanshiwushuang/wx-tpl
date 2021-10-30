// base style
import '@/assets/less/base.less';
import config from './config';
// cookie
import Cookie from "js-cookie";
// 请求
import request from './request';
// ast
import ast from './data/ast';
// localStorage
import local from './data/local_storage';
// base62x
import base62x from 'base62x';
// websocket
import websocket from './websocket';
// 通用工具
import utils from './utils/common'
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
const mixinData = {
	ast,
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

switch (process.env.NODE_ENV) {
	// 开发环境
	case 'development':
		window.app = app;
		break;
	// 生产环境
	case 'production':
		window.krk7jl7x = app;
		break;
}

if (config.is_remove_dom) {
	var n = document.querySelectorAll(".data,.node_remove");
	for (var i = 0; i < n.length; i++) {
		n[i].parentNode.removeChild(n[i]);
	}
}