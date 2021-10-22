// 配置
import config from './config'
// 便于拦截数据，实现数据的：模拟、校验
import './ajaxHook';
// 初始化
import Init from './init';
import Vue from 'vue'
import App from './App.vue'
// vuex
import store from './store'
// vue-router
import router from './router'
import routerHook from './router/hook'
// base style
import '@/assets/less/base.less';
// 摘要
import schema from './schema';
// WebSocket 连接
// import './assets/js/websocket'
// 批量注册基础组件
import './components'
// elementui
import Element from 'element-ui'
import '@/assets/scss/element-variables.scss'
// i18n
import i18n from './lang'

console.log(schema);

Vue.use(Element)
Vue.config.productionTip = false

// 配置路由模式
routerHook.config(config.routerHook);

// 混入数据
Vue.mixin({
	data() {
		return {
			// fix-bug: 如果直接返回 mixinData 对象，则 在使用 vue-echarts 时，貌似 vue-echarts 会修改到 mixinData，导致所有组件被混入 echarts 的一些方法
			...Init.mixinData
		}
	}
})
// 附加数据到原型
Object.assign(Vue.prototype, Init.protoData);

const app = new Vue({
	router,
	store,
	i18n,
	render: h => h(App)
}).$mount('#app');

// 生产环境，删除一些DOM
if (process.env.NODE_ENV === 'production') {
	var n = document.querySelectorAll(".data,.node_remove");
	for (var i = 0; i < n.length; i++) {
		n[i].parentNode.removeChild(n[i]);
	}
}

if (process.env.NODE_ENV === "development") {
	window.app = app;
} else {
	window.krk7jl7x = app;
}

