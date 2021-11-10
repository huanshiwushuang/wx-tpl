// base style
import '@/assets/less/base.less';
// flexible
import 'amfe-flexible'
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
].forEach(com => {
	Vue.use(com);
})

// 设置组件
Toast.setDefaultOptions({ duration: 3000 });
// 设置 vue
Vue.config.productionTip = false

Vue.mixin({
	data() {
		return {
			// fix-bug: 如果直接使用 mixinData 对象，则 在使用 vue-echarts 时，貌似 vue-echarts 会修改到 mixinData，导致所有组件被混入 echarts 的一些方法
			...mixin_data
		}
	},
	beforeCreate() {
		if (config.is_attach_com) {
			let name = this.$options.name;
			if (name) {
				if (this.$root[name]) {
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
			let index = this.$root[name].indexOf(this);
			if (index != -1) {
				this.$root[name].splice(index, 1);
			}
		}
	}
})
// 附加数据到原型
Object.assign(Vue.prototype, {
	...proto_data
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