const state = {
    // tabbar_url
    tabbar_url: new URL(location.origin),
}
const getters = {
}
const mutations = {
    tabbar_url(state, payload) {
        // 转换 url 为完整的 url
        if (typeof payload === 'string') {
            let a = document.createElement('a');
            a.href = payload;
            payload = new URL(a.href);
        }
        state.tabbar_url = payload
    }
}
const actions = {
}

export default {
    state,
    getters,
    mutations,
    actions
}
