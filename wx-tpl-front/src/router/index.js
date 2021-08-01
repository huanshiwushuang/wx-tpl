import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/home.vue'),
	},
	{
		path: '/index/about',
		name: 'about',
		component: () => import(/* webpackChunkName: "about" */ '@/views/about.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router
