import Vue from 'vue';
import VueRouter from 'vue-router';
// https://www.cnblogs.com/LittlePanger/p/12626692.html
// https://www.npmjs.com/package/nprogress
// import NProgress from 'nprogress'

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		// pc 端组件展示页面
		{
			path: '/test',
			component: () =>
				import("@/components/test.vue"),
		},
	]
})

export default router;
