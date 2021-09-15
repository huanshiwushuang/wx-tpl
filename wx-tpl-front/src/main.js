import Init from './init';
import Vue from 'vue'
import App from './App.vue'
import store from './store'
// 路由模式
import RouterMode from './router/mode'
import router from './router'
// WebSocket 连接
import { start as startWebSocket, ws } from './assets/js/websocket'

Vue.config.productionTip = false

// 配置路由模式
RouterMode.config({
	mode: 'ast',
});

// 开启 websocket
startWebSocket({
	protocol: 'ws',
	url: 'remote.513902.xyz:80/wss',
	// 绑定地址
	bind_url: 'http://remote.513902.xyz/websocket/bindUid',
	// 用户 uid
	uid: Init.protoData.$cookie.get('PHPSESSID'),
});
Vue.prototype.$ws = ws;

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

