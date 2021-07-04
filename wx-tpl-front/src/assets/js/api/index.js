import Axios from 'axios';
import Vue from 'vue';
import NProgress from 'nprogress';

// 添加响应拦截器
Axios.interceptors.request.use(function (config) {
	// axiosCfg = cfg;
	// console.log(Vue.prototype.$app);
	const { $app } = Vue.prototype;
	if ($app) {
		console.log($app);
	}

	// 可视化分析才开启
	(function () {
		if (/\/analysis/.test(this.$url.path)) {
			NProgress.start();
		}
	}.bind(Vue.prototype))();

	return config;
});
Axios.interceptors.response.use(function (res) {

	let { $app } = Vue.prototype;
		// 循环 code 数组
	(function () {
		if (res.data.code) {
			(async () => {
				for (let i of res.data.code) {
					switch (i.value) {
						// 加载 VIP 弹窗组件
						case this.$config.klrolk91_dialog_vip:
							var rsp = await import('@/components/common/wx-page-dialog-openvip.vue');
							if (!this.coms.includes(rsp.default)) {
								this.coms.push(rsp.default);
							}
							break;
						// 全局 message 提示
						case this.$config.klrolc8j_message:
							this.$message(i);
							break;
						// 跳转
						case this.$config.klrol9vc_jump:
							location = i.url;
							break;
						// 延迟
						case this.$config.klrol744_delay:
							await new Promise((resolve) => {
								setTimeout(() => {
									resolve();
								}, i.ms)
							})
							break;
					}
				}
			})()
		}
	}.bind($app))();

	NProgress.done();
	return res;
}, function (err) {
	// console.log(err);

	NProgress.done();
	return Promise.reject(err);
});
