export default {
    state: {
        // tabbarUrl
        tabbarUrl: new URL(location.origin),
    },
    getters: {
    },
    mutations: {
        tabbarUrl(payload) {
            // 转换 url 为完整的 url
            if (typeof payload === 'string') {
                let a = document.createElement('a');
                a.href = payload;
                payload = new URL(a.href);
            }
            this.state.tabbarUrl = payload;
        }
    },
    actions: {
    }
}
