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
                            this.$store.commit(`${namespace}/${key}`, val);
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