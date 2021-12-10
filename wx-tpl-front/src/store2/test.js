import { _ } from '../utils/tools';
export default {
    state: {
        name: '张三',
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
            // return this.$getNode('HAHA');
            const asd = {
                name: 'A',
                age: 18,
                children: [
                    {
                        name: 'B',
                        aa: 'aa',
                        bb: 'bb',
                        children: [
                            {
                                name: 'C',
                                haha: '哈哈',
                                zxc: 'zxc',
                            }
                        ]
                    },
                    {
                        name: 'D',
                        aa: '111aa',
                        bb: '222bb',
                        children: [
                            {
                                name: 'E',
                                haha: '333哈哈',
                                zxc: '444zxc',
                            }
                        ]
                    }
                ]
            };

            _.walkTree([asd]);
            return asd;
        }
    },
}