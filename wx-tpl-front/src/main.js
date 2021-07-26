import Init from './init';
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 混入可观测的数据
Vue.mixin({
	data() {
		return Init.mixinData
	}
})
// 附加其他数据
Object.assign(Vue.prototype, Init.protoData);

// 批量注册基础组件
// ??????



const app = new Vue({
	router,
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

