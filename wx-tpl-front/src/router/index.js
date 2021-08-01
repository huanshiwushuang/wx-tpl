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

let isFirst = true;
router.beforeEach(function (to, from, next) {
	if (isFirst) {
		isFirst = false;
		next();
	} else {
		// 如果只是改变了 hash ，则前端路由
		if ((from.fullPath.replace(from.hash, '') === to.fullPath.replace(to.hash, ''))) {
			next();
		} else {
			location = to.fullPath;
		}
	}
})


export default router
