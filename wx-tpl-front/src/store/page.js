import mixin_data from '../data/mixin_data';

const state = {
    // 页面数据缓存
    cache: {},
    // 页面滚动位置记录
    saved_position: {},

    // from_url
    from_url: '',
    // to_url
    to_url: ''
}
const getters = {
}
const mutations = {
    cache(state, payload) {
        // 更新 store 的
        state.cache = payload;

        // 随即 更新 mixin_data
        mixin_data.page = payload;
        mixin_data.json = payload;
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
