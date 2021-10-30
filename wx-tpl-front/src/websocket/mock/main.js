const modulesFiles = require.context('.', true, /.js$/)

// webpack 读取当前目录下的所有除了 main.js 的模块，将导出合并为一个
const sum = modulesFiles.keys().filter(modulePath => {
    return !new RegExp('./main.js', 'i').test(modulePath);
}).reduce((sum, modulePath) => {
    const { default: defa } = modulesFiles(modulePath);

    sum.push(...defa);

    return sum;
}, []);

export default sum;