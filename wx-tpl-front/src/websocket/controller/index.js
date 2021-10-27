const modulesFiles = require.context('.', true, /.js$/)

// webpack 读取当前目录下的所有除了 index.js 的模块，将导出合并为一个
const sum = modulesFiles.keys().filter(modulePath => {
    return !new RegExp('./index.js', 'i').test(modulePath);
}).map((modulePath) => {
    const value = modulesFiles(modulePath)

    return value.default;
})

export default sum