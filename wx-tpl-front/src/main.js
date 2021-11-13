// style
import '@/assets/less/index.less';
// flexible
import '@/utils/flexible'
// vant pc 兼容
import '@vant/touch-emulator';
// config
import config from './config';
// mixin data
import mixin_data from './data/mixin_data';
// proto data
import proto_data from './data/proto_data';
// websocket
// import websocket from './websocket';
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
// UI 组件
import {
	Button,
	Toast,
	Tabbar,
	TabbarItem,
	Icon,
	PullRefresh,
	Tab, Tabs,
	Lazyload,
	Image,
	Loading,
} from 'vant';

// 注册组件
[
	Button,
	Toast,
	Tabbar,
	TabbarItem,
	Icon,
	PullRefresh,
	Tab, Tabs,
	{
		com: Lazyload,
		options: {
			lazyComponent: true,
		}
	},
	Image,
	Loading,
].forEach(com => {
	if (com.options) {
		Vue.use(com.com, com.options);
	} else {
		Vue.use(com);
	}
})

// 设置组件
Toast.setDefaultOptions({ duration: 3000 });
// 设置 vue
Vue.config.productionTip = false

Vue.mixin({
	data() {
		return mixin_data;
	},
	beforeCreate() {
		if (config.is_attach_com) {
			let name = this.$options.name;
			if (name) {
				if (this.$root[name] && Array.isArray(this.$root[name])) {
					this.$root[name].push(this);
				} else {
					this.$root[name] = [this];
				}
			}
		}
	},
	beforeDestroy() {
		let name = this.$options.name;
		if (config.is_attach_com && name) {
			if (Array.isArray(this.$root[name])) {
				let index = this.$root[name].indexOf(this);
				if (index != -1) {
					this.$root[name].splice(index, 1);
				}
			}
		}
	}
})
// 附加数据到原型
Object.assign(Vue.prototype, proto_data);

const app = new Vue({
	router,
	store,
	i18n,
	render: h => h(App)
}).$mount('#app');

export default app;

// 是否附加 app 到 window
if (config.is_attach_app) {
	window.app = app;
}
// 是否移除 DOM
if (config.is_remove_dom) {
	var n = document.querySelectorAll(".data,.node_remove");
	for (var i = 0; i < n.length; i++) {
		n[i].parentNode.removeChild(n[i]);
	}
}