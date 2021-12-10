export default {
    name: 'TestKKK',
    state: {
        name: 'TestKKK',
    },
    getters: {
        firstname() {
            return this.state.name.slice(0, 1);
        }
    },
    actions: {
        setName() {
            this.state.name = '李四';
        },
        getNode() {
            return this.$getNode('HAHA');
        }
    }
}