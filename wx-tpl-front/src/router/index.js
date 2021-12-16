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
			// 首页
			{
				path: '/',
				name: 'Home',
				components: {
					default: () => import('@/views/Home.vue'),
					footer: () => import('@/components/app/jzm-tab-bar.vue'),
				},
				children: [
					{
						path: '',
						name: 'HomeNice',
						component: () => import('@/views/Home/Nice.vue'),
					},
					{
						path: 'index/newest',
						name: 'HomeNewest',
						component: () => import('@/views/Home/Nice.vue'),
					},
					{
						path: 'index/popular',
						name: 'HomePopular',
						component: () => import('@/views/Home/Popular.vue'),
					},
					{
						path: 'index/rank',
						name: 'HomeRank',
						component: () => import('@/views/Home/Rank.vue'),
					},
				]

			},
			// 日签
			{
				path: '/daysign',
				name: 'Daysign',
				components: {
					default: () => import('@/views/DaySign.vue'),
					footer: () => import('@/components/app/jzm-tab-bar.vue'),
				},
			},
			// 分类
			{
				path: '/type',
				name: 'Dype',
				components: {
					default: () => import('@/views/Type/Index.vue'),
					footer: () => import('@/components/app/jzm-tab-bar.vue'),
				},
			},
			// 我的
			{
				path: '/my',
				name: 'My',
				components: {
					default: () => import('@/views/My/Index.vue'),
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
