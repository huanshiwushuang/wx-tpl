import './uniappHook';
import Vue from 'vue';
import VueRouter from 'vue-router';
import hook from './hook';
import mixinData from '../data/mixinData';
import store from '../store';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: () => import('@/views/Base.vue'),
		children: [
			(() => {
				// 404 页面
				if (mixinData.page?.kvpcjcl7_404) {
					return {
						path: '*',
						component: async () => {
							return await import('@/views/404.vue');
						},
						meta: {
							intercept: true
						}
					}
				}
				// 返回一个绝对匹配不到的 path
				return {
					path: 'kvdgktrh',
				}
			})(),
			// 日签
			{
				alias: '/',
				path: '/home',
				name: 'Home',
				components: {
					default: () => import('@/views/Home.vue'),
					footer: () => import('@/components/app/jzm-tab-bar.vue'),
				},
			},
			// 设置
			{
				path: '/settings',
				component: async () => {
					return await import('@/views/Settings.vue');
				},
			},
			{
				path: '/test',
				component: () => import('@/views/Test.vue'),
			},
			// 404
			{
				path: '*',
				component: () => import('@/views/404.vue')
			}
		]
	},

]

const router = new VueRouter({
	mode: 'hash',
	routes,
	scrollBehavior() {
		const res = store.page.state.savedPosition[
			store.router.state.to.path
		] || { x: 0, y: 0 };
		// 根据 to 取出记录的对应页面的历史滚动位置
		console.log(`滚动页面---${store.router.state.to.path} ---到`, JSON.stringify(res));
		return res;
	}
})

export default router

// 执行 hook
hook();
