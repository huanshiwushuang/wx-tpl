const res = {
    // 通过字符串参数，访问深层次对象数据
    v(data, deep_key) {
        const arr = deep_key.split('.');

        try {
            let res = data;
            for (let i of arr) {
                res = res[i];
            }
            return res;
        } catch (e) {
            console.error(`访问数据: `, data);
            console.error(`访问路径: `, deep_key);
            console.error(`错误: `, e);
        }
    },
    // 遍历 tree
    walk_tree(tree, options) {
        if (!Array.isArray(tree)) {
            throw new Error('please input array')
        }
        const visit = function (node, parent, index, options) {
            // 进入此节点
            options.enter && options.enter(node, parent, index)

            // 访问子节点的入口属性
            options.childrenProp = options.childrenProp || 'children'

            if (Array.isArray(node[options.childrenProp])) {
                for (let i = 0; i < node[options.childrenProp].length; i++) {
                    visit(node[options.childrenProp][i], node, i, options)
                }
            }

            // 离开此节点
            options.leave && options.leave(node, parent, index)
        }

        for (let i = 0; i < tree.length; i++) {
            visit(tree[i], null, i, options)
        }
    },
}

Object.assign(res, {
    // 同步 v-model 到 store
    sync_store(namespace, map) {
        const has_namespace = map !== undefined;

        if (!has_namespace) {
            map = namespace;
        }

        if (Array.isArray(map)) {
            return map.reduce((sum, key) => {
                sum[key] = {
                    get() {
                        if (!has_namespace) {
                            return res.v(this.$store.state, key);
                        }
                        return res.v(this.$store.state, `${namespace}.${key}`);
                    },
                    set(val) {
                        if (!has_namespace) {
                            this.$store.commit(key, val);
                        } else {
                            this.$store.commit(`${namespace.replace(/\./g, '/')}/${key}`, val);
                        }
                    },
                };
                return sum;
            }, {})
        }
        return {};
    }
})

export default res;