// base style
import '@/assets/less/base.less';
// config
import config from './config';
// cookie
import Cookie from "js-cookie";
// 请求
import request from './request';
// ast
import ast from './data/ast';
// localStorage
import local from './data/local_storage';
// websocket
// import websocket from './websocket';
// 通用工具
import helper from './utils/helper'
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
// html_ast
import * as html_ast from './utils/html_ast'
// UI 组件
import {
	Button,
	DatetimePicker,
	Toast,
	Calendar,
	Pagination,
	CellGroup,
	Field,

	Tabbar, TabbarItem
} from 'vant';

// 注册组件
[
	Button,
	DatetimePicker,
	Toast,
	Calendar,
	Pagination,
	CellGroup,
	Field,

	Tabbar,
	TabbarItem,
].forEach(com => {
	Vue.use(com);
})

// 设置组件
Toast.setDefaultOptions({ duration: 3000 });
// 设置 vue
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
	// $ws: websocket,
	$axios: request,
	$cookie: Cookie,
	$get: request.get,
	$post: request.post,
	$str_encode: helper.str_encode,
	$str_decode: helper.str_decode,
	$html: html_ast.html,
	$ast: html_ast.ast,
	// 稍微封装一下，默认取值的数据是 ast
	$v(deep_key, data = mixinData.ast) {
		return helper.v(data, deep_key);
	},
	$toast: Toast,
});

const app = new Vue({
	router,
	store,
	i18n,
	render: h => h(App)
}).$mount('#app');

export default app;

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