const state = {
    // 页面数据缓存
    cache: {},
    // 页面滚动位置记录
    savedPosition: {},

    // fromPathname
    fromPathname: '',
    // toPathname
    toPathname: ''
}
const getters = {
}
const mutations = {
    cache(state, payload) {
        // 存储新的对象，防止被 mixin_data 直接修改
        state.cache = JSON.parse(JSON.stringify(payload));
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
