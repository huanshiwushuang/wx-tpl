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
						}
					}
				}
				// 设置页面
				if (new URLSearchParams(location.search).has('settings')) {
					return {
						path: '*',
						component: async () => {
							return await import('@/views/Settings.vue');
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
				component: () => import('@/views/Home.vue'),
			},
			// 设置
			{
				path: '/settings',
				name: 'Settings',
				component: () => import('@/views/Settings.vue'),
			},
			// 关于
			{
				path: '/index/about',
				name: 'about',
				component: () => import('@/views/About.vue')
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
