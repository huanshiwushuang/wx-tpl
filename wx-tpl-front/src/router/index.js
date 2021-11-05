import Vue from 'vue'
import VueRouter from 'vue-router'
import hook from './hook'
import ast from '../data/ast'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: () => import('@/views/Base.vue'),
		children: [
			(() => {
				// 404 页面
				if (ast.kvbv37sy_404) {
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
					default: () => import('@/views/Home/Nice.vue'),
					footer: () => import('@/components/app/jzm-tab-bar.vue'),
				},
			},
			// 日签
			{
				path: '/daysign-index',
				components: {
					default: () => import('@/views/DaySign/Index.vue'),
					footer: () => import('@/components/app/jzm-tab-bar.vue'),
				},
			},
			// 分类
			{
				path: '/type-index',
				components: {
					default: () => import('@/views/Type/Index.vue'),
					footer: () => import('@/components/app/jzm-tab-bar.vue'),
				},
			},
			// 我的
			{
				path: '/my-index',
				components: {
					default: () => import('@/views/My/Index.vue'),
					footer: () => import('@/components/app/jzm-tab-bar.vue'),
				},
			},
			// 设置
			{
				path: '/settings',
				component: async () => {
					if (new URLSearchParams(location.search).get('key') === 'wxxbb') {
						return await import('@/views/Settings.vue');
					}
					return await import('@/views/404.vue');
				},
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
	routes
})

export default router

// 执行 hook
hook();
