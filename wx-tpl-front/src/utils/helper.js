// 项目助手：其他都是通用了，此文件仅用于当前项目
import { _ } from './tools';

export default {
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
                            return _.v(this.$store.state, key);
                        }
                        return _.v(this.$store.state, `${namespace}.${key}`);
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
}