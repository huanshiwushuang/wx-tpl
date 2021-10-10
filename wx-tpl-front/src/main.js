import './ajaxHook';
import Init from './init';
import Vue from 'vue'
import Element from 'element-ui'
import App from './App.vue'
import store from './store'
// 路由模式
import RouterMode from './router/mode'
import router from './router'
// 样式
import '@/assets/scss/element-variables.scss'
import '@/assets/less/base.less';

import schema from './schema';
// WebSocket 连接
// import './assets/js/websocket'


console.log(schema);

Vue.config.productionTip = false

// ElementUI
Vue.use(Element)

// 配置路由模式
RouterMode.config({
	mode: 'ast',
});

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

// 批量注册基础组件
// ??????

const app = new Vue({
	router,
	store,
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

