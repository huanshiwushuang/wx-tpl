define(['vue', 'vue_router', 'vue_loader'], (Vue, VueRouter, VueLoader) => {
	Vue.use(VueRouter)

	const routes = [
		{
			path: '/',
			name: 'home',
			component: VueLoader('@/views/home.vue'),
		},
		{
			path: '/index/about',
			name: 'about',
			component: VueLoader('@/views/about.vue'),
		}
	]

	const router = new VueRouter({
		mode: 'history',
		base: '/admin',
		routes
	})

	return router;
})