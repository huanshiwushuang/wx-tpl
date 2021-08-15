require.config({
	baseUrl: '/static/admin/',
	paths: {
		vue: 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min',
		html5parser: 'https://cdn.jsdelivr.net/npm/html5parser@2.0.2/dist/html5parser.umd',
		js_cookie: 'https://cdn.jsdelivr.net/npm/js-cookie@3.0.0/dist/js.cookie.min',
		axios: 'https://cdn.jsdelivr.net/npm/axios@0.21.1/dist/axios.min',
		json5: 'https://cdn.jsdelivr.net/npm/json5@2.2.0/dist/index.min',
		vue_router: 'https://cdn.jsdelivr.net/npm/vue-router@3.5.2/dist/vue-router.min',
		http_vue_loader: 'https://cdn.jsdelivr.net/npm/http-vue-loader@1.4.2/src/httpVueLoader.min',
		less: 'https://cdn.jsdelivr.net/npm/less@4.1.1/dist/less.min'
	}
});


require(['init'], function () {
	debugger
})
// import Init from './init';
// import Vue from 'vue'
// import App from './App.vue'
// // 路由模式
// import RouterMode from './router/mode'
// import router from './router'

// Vue.config.productionTip = false

// // 配置路由模式
// RouterMode.config({
// 	// frontend || backend
// 	mode: 'frontend',
// });

// // 混入可观测的数据
// Vue.mixin({
// 	data() {
// 		return Init.mixinData
// 	}
// })
// // 附加其他数据
// Object.assign(Vue.prototype, Init.protoData);

// // 批量注册基础组件
// // ??????


// const app = new Vue({
// 	router,
// 	render: h => h(App)
// }).$mount('#app');

// // 生产环境，删除一些DOM
// if (process.env.NODE_ENV === 'production') {
// 	var n = document.querySelectorAll(".data,.node_remove");
// 	for (var i = 0; i < n.length; i++) {
// 		n[i].parentNode.removeChild(n[i]);
// 	}
// }

// if (process.env.NODE_ENV === "development") {
// 	window.app = app;
// } else {
// 	window.krk7jl7x = app;
// }

