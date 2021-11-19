const state = {
    // 页面数据缓存
    cache: {},
    // 页面滚动位置记录
    saved_position: {},

    // from_pathname
    from_pathname: '',
    // to_pathname
    to_pathname: ''
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
