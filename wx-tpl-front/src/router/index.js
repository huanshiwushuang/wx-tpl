import Init from '@/init.js';
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
		// 如果只是改变了 hash ，则前端路由【防止 hash 改变导致的无限重定向】
		if ((from.fullPath.replace(from.hash, '') === to.fullPath.replace(to.hash, ''))) {
			next();
		} else {
			location = to.fullPath;
		}
	}
})


router.afterEach(function (to) {
	// 更新 url 对象
	Init.mixinData.url = {
		...to,
		query: Object.keys(to.query).reduce((sum, key) => {
			sum[key] = Array.isArray(to.query[key]) ? to.query[key] : [to.query[key]];
			return sum;
		}, {})
	};
})

console.log(Init);

export default router
