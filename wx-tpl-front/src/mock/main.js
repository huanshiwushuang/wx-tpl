const modulesFiles = require.context('.', true, /.js$/)

// webpack 读取当前目录下的所有除了 main.js 的模块，将导出合并为一个
modulesFiles.keys().filter(modulePath => {
    return !new RegExp('./main.js', 'i').test(modulePath);
}).forEach((modulePath) => {
    modulesFiles(modulePath);
});