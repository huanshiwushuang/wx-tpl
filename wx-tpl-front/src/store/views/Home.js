const state = {
    // tabbar_to
    tabbar_to: '/',
}
const getters = {
}
const mutations = {
    tabbar_to(state, payload) {
        if (payload === '/index/popular') {
            debugger
        }
        state.tabbar_to = payload;
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
