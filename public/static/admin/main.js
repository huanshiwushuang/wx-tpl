require.config({
	paths: {
		vue: 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min',
		html5parser: 'https://cdn.jsdelivr.net/npm/html5parser@2.0.2/dist/html5parser.umd',
		js_cookie: 'https://cdn.jsdelivr.net/npm/js-cookie@3.0.0/dist/js.cookie.min',
		axios: 'https://cdn.jsdelivr.net/npm/axios@0.21.1/dist/axios.min',
		json5: 'https://cdn.jsdelivr.net/npm/json5@2.2.0/dist/index.min',
		vue_router: 'https://cdn.jsdelivr.net/npm/vue-router@3.5.2/dist/vue-router.min',
		vue_loader: 'https://cdn.jsdelivr.net/npm/http-vue-loader@1.4.2/src/httpVueLoader.min',
		less: 'https://cdn.jsdelivr.net/npm/less@4.1.1/dist/less.min',
		nprogress: 'https://cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.min',
	},
	map: {
		'*': {
			'css': 'https://cdn.jsdelivr.net/npm/require-css@0.1.10/css.min.js'
		}
	},
	shim: {
		nprogress: {
			deps: [
				'css!https://cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.css'
			]
		}
	}
});

require(['init'], Init => {

	require(['vue', 'router/mode', 'router/index'], function (Vue, RouterMode, router) {
		(async () => {
			// 配置路由模式
			RouterMode.config({
				mode: 'ast',
			});

			// 混入可观测的数据
			Vue.mixin({
				data() {
					return Init.mixinData
				}
			})
			// 附加其他数据
			Object.assign(Vue.prototype, Init.protoData);

			// VueLoader 执行返回的是一个函数，该函数执行后返回 Promise
			const App = await vueLoader('@/App.vue');

			const app = new Vue({
				router,
				render: h => h(App)

			}).$mount('#app');

			window.app = app;
		})()
	})
	
})
