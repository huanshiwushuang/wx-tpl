import Vue from 'vue';
import VueRouter from 'vue-router';
import hook from './hook';
import mixin_data from '../data/mixin_data';
import store from '../store';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: () => import('@/views/Base.vue'),
		children: [
			(() => {
				// 404 页面
				if (mixin_data.page?.kvpcjcl7_404) {
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
				components: {
					default: () => import('@/views/Home.vue'),
					footer: () => import('@/components/app/jzm-tab-bar.vue'),
				},
				children: [
					{
						path: '',
						name: 'home_nice',
						component: () => import('@/views/Home/Nice.vue'),
					},
					{
						path: 'index/newest',
						name: 'home_newest',
						component: () => import('@/views/Home/Newest.vue'),
					},
					{
						path: 'index/popular',
						name: 'home_popular',
						component: () => import('@/views/Home/Popular.vue'),
					},
					{
						path: 'index/rank',
						name: 'home_rank',
						component: () => import('@/views/Home/Rank.vue'),
					},
				]

			},
			// 日签
			{
				path: '/daysign',
				name: 'daysign',
				components: {
					default: () => import('@/views/DaySign/Index.vue'),
					footer: () => import('@/components/app/jzm-tab-bar.vue'),
				},
			},
			// 分类
			{
				path: '/type',
				name: 'type',
				components: {
					default: () => import('@/views/Type/Index.vue'),
					footer: () => import('@/components/app/jzm-tab-bar.vue'),
				},
			},
			// 我的
			{
				path: '/my',
				name: 'my',
				components: {
					default: () => import('@/views/My/Index.vue'),
					footer: () => import('@/components/app/jzm-tab-bar.vue'),
				},
			},
			// 设置
			{
				path: '/settings',
				component: async () => {
					if (new URLSearchParams(location.search).has('wxxbb')) {
						return await import('@/views/Settings.vue');
					}
					return await import('@/views/404.vue');
				},
			},
			{
				path: '/test',
				component: () => import('@/views/Settings'),
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
	mode: 'history',
	routes,
	scrollBehavior() {
		const res = store.state.page.saved_position[
			store.state.page.to_url
		];
		// 根据 to_url 取出记录的对应页面的历史滚动位置
		console.log(`滚动页面---${store.state.page.to_url} ---到`, JSON.stringify(res));
		return res;
	}
})

export default router

// 执行 hook
hook();
