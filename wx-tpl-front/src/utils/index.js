export default {
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
    }
}