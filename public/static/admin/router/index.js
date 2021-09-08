define(['vue_router', 'vue_loader'], (VueRouter, VueLoader) => {
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
		},
		{
			path: '/index/rrweb',
			name: 'about',
			component: () => {
				return new Promise(resolve => {
					requirejs(['ELEMENT'], ELEMENT => {
						Vue.use(ELEMENT);

						VueLoader('@/views/rrweb.vue')().then(com => {
							resolve(com);
						})
					})
				})
			},
		},
	]

	const router = new VueRouter({
		mode: 'history',
		base: '/admin',
		routes
	})

	return router;
})