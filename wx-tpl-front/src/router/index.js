import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
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
	{
		path: '/index/about',
		name: 'about',
		component: () => import('@/views/About.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router
