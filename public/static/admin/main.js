require.config({
	paths: {
		vue: '/static/admin/assets/js/vue.min.js?noext',
		html5parser: '/static/admin/assets/js/html5parser.umd.js?noext',
		js_cookie: '/static/admin/assets/js/js.cookie.min.js?noext',
		axios: '/static/admin/assets/js/axios.min.js?noext',
		json5: '/static/admin/assets/js/json5.min.js?noext',
		vue_router: '/static/admin/assets/js/vue-router.min.js?noext',
		vue_loader: '/static/admin/assets/js/httpVueLoader.min.js?noext',
		less: '/static/admin/assets/js/less.min.js?noext',
		nprogress: '/static/admin/assets/js/nprogress.min.js?noext',
		vuex: '/static/admin/assets/js/vuex.min.js?noext',
		chemdraw: 'lib/chemdrawweb/chemdrawweb',
		fileSaver: '/static/admin/assets/js/FileSaver.min.js?noext',
		ELEMENT: 'https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.3/index.min',
		uploader: '/static/admin/assets/js/vue-uploader.min.js?noext',
		JSZip: '/static/admin/assets/js/jszip.min.js?noext',
		CryptoJS: '/static/admin/assets/js/crypto-js/index.min.js?noext',
	},
	map: {
		'*': {
			'css': 'https://cdn.jsdelivr.net/npm/require-css@0.1.10/css.min.js'
		}
	},
	shim: {
		nprogress: {
			deps: [
				'css!https://cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.css',
			]
		},
		chemdraw: {
			exports: 'perkinelmer',
		},
		fileSaver: {
			// 无用, 直接访问 window.saveAs 即可
			exports: 'saveAs',
		},
		ELEMENT: {
			deps: [
				'css!https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.3/theme-chalk/index.min.css',
			],
		},
	}
});

require(['init'], Init => {

	require(['vue', 'router/mode', 'router/index', 'store/index', 'ELEMENT', 'uploader'], function (Vue, RouterMode, router, store, ELEMENT, uploader) {
		(async () => {
			Vue.use(ELEMENT);

			Vue.use(uploader);

			// 配置路由模式
			RouterMode.config({
				mode: 'ast',
			});

			// 混入可观测的数据
			Vue.mixin({
				data() {
					return {
						// [kszjdyuu]-fix-bug: 如果直接返回 mixinData 对象，则 在使用 vue-echarts 时，貌似 vue-echarts 会修改到 mixinData，导致所有组件被混入 echarts 的一些方法
						...Init.mixinData,
					}
				}
			})
			// 附加其他数据
			Object.assign(Vue.prototype, Init.protoData);

			// VueLoader 执行返回的是一个函数，该函数执行后返回 Promise
			const App = await vueLoader('@/App.vue');

			const app = new Vue({
				router,
				store,
				render: h => h(App)

			}).$mount('#app');

			window.app = app;
		})()
	})

})
