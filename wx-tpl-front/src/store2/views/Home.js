export default {
    state: {
        // tabbar_url
        tabbar_url: new URL(location.origin),
    },
    getters: {
    },
    mutations: {
        tabbar_url(payload) {
            // 转换 url 为完整的 url
            if (typeof payload === 'string') {
                let a = document.createElement('a');
                a.href = payload;
                payload = new URL(a.href);
            }
            this.state.tabbar_url = payload
        }
    },
    actions: {
    }
}
