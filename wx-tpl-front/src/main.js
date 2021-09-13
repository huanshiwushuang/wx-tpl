import Init from './init';
import '@/assets/js/websocket';
import Vue from 'vue'
import App from './App.vue'
import store from './store'
// 路由模式
import RouterMode from './router/mode'
import router from './router'

Vue.config.productionTip = false

// 配置路由模式
RouterMode.config({
	mode: 'ast',
});

// 混入可观测的数据
Vue.mixin({
	data() {
		return {
			// fix-bug: 如果直接返回 mixinData 对象，则 在使用 vue-echarts 时，貌似 vue-echarts 会修改到 mixinData，导致所有组件被混入 echarts 的一些方法
			...Init.mixinData
		}
	}
})
// 附加其他数据
Object.assign(Vue.prototype, Init.protoData);

// 批量注册基础组件
// ??????

const app = new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
Vue.prototype.$app = app;

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

