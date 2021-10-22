const modulesFiles = require.context('.', true, /\.js$/)

// webpack 读取当前目录下的所有除了 index.js 的模块，将导出合并为一个
const sum = modulesFiles.keys().filter(modulePath => {
    return !new RegExp('./index.js', 'i').test(modulePath);
}).reduce((sum, modulePath) => {
    const value = modulesFiles(modulePath)

    const tmp_sum = Object.values(value).reduce((sum, item) => {

        Object.assign(sum, item);

        return sum;
    }, {});

    Object.assign(sum, tmp_sum);

    return sum;
}, {})


export default {
    object: sum,
    array: Object.keys(sum).map(item => {
        return {
            code: item,
            ...sum[item],
        }
    })
}