import Vue from 'vue'
import VueRouter from 'vue-router'
import hook from './hook'
import mixin_data from '../data/mixin_data'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: () => import('@/views/Base.vue'),
		children: [
			(() => {
				// 404 页面
				if (mixin_data.ast.kvpcjcl7_404) {
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
				path: '/daysign',
				components: {
					default: () => import('@/views/DaySign/Index.vue'),
					footer: () => import('@/components/app/jzm-tab-bar.vue'),
				},
			},
			// 分类
			{
				path: '/type',
				components: {
					default: () => import('@/views/Type/Index.vue'),
					footer: () => import('@/components/app/jzm-tab-bar.vue'),
				},
			},
			// 我的
			{
				path: '/my',
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
