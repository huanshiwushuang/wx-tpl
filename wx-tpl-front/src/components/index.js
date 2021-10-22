import Vue from 'vue';

const modulesFiles = require.context('.', true, /.vue$/)

// webpack 读取当前目录下的所有除了 index.js 的模块，注册全局组件
modulesFiles.keys().forEach((modulePath) => {
    const value = modulesFiles(modulePath)
    Vue.component(modulePath.match(/[/\\](.+)\.vue$/)[1], value.default)
})
