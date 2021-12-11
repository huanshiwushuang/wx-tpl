import { str } from '../utils/tools';

// localStorage 版本号
const v = `kvc4regy`;
const local = {
    get() {
        let obj;
        let store;

        // 防止无写存储权限，导致 app 崩溃
        try {
            store = localStorage.getItem("wuxuwang.com");

        } catch (e) {
            // 无权限写存储，直接 return
            return console.error(e);
        }

        // json 解析错误，则重置
        try {
            store = store ? str.decode(store) : '{}';

            obj = JSON.parse(store);

            // 版本号错误，则重置
            if (!obj.v || parseInt(obj.v, 36) < parseInt(v, 36)) {
                local.reset();
                return local.get();
            }
        } catch (e) {
            console.warn('local get JSON.parse error');
            local.reset();
            return local.get();
        }
        local.value = obj;
        return obj;
    },
    reset() {
        local.value = {
            v,
        };
        local.set();
    },
    // 有参数-合并保存 value
    // 无参数-直接保存 value
    set(obj) {
        if (obj) {
            this.value = Object.assign({}, this.value, obj)
        }
        // 防止无写存储权限，导致 app 崩溃
        try {
            localStorage.setItem("wuxuwang.com", str.encode(JSON.stringify(this.value)));
        } catch (e) {
            return console.error(e);
        }
    },
};
Object.assign(local, {
    value: local.get()
})

export default local;