const state = {
    // 历史栈
    stack: [],
    // 历史栈-指针
    pointer: -1,
    // 进入当前页面的 action
    // push || replace || back || forward
    action: '',
    // currentState
    currentState: null,

}
const getters = {
    // 当前历史
    current() {
        return state.stack[state.pointer];
    },
    // 最后一个历史
    last() {
        return state.stack.slice(-1)[0];
    }
}
const mutations = {
}
const actions = {
}

export default {
    state,
    getters,
    mutations,
    actions
}
