export default {
    state: {
        // 历史栈
        stack: [],
    },
    getters: {
        // 历史栈-映射
        stackMap() {
            return this.state.stack.reduce((sum, v) => {
                sum[v.path] = v;
                return sum;
            }, {})
        }
    },
    mutations: {

    },
    actions: {

    }
}
