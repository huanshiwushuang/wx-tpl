// const path = require('path');
// const config = require('../config');

// 子项目-根路径
// const subProjectRoot = path.resolve(config.projectRoot, 'src/h5');
// 子项目-入口 js 文件

const commonConfig = {
    isPage: true,
    // 不自动注入资源, 在页面中使用变量自定义注入位置
    inject: false,
    minify: {
        minimize: true,//是否打包为最小值
        removeAttrbuteQuotes: true,//去除引号
        removeComments: true,//去掉注释
        collapseWhitespace: true,//去掉空格
        minifyCss: true,//压缩css
        removeEmptyElements: false,//清理内容为空的元素
    },
    chunks: ['chunk-vendors', 'chunk-common'],
}

module.exports = {
    // module
    wp: {
        // controller
        index: {
            index: {
                ...commonConfig,
                // entry: path.resolve(subProjectRoot, 'main.js'),
                // 模板来源
                // template: path.resolve(subProjectRoot, `v1/index/index.html`),
                // templateContent: webpackConfig => {
                //     console.log(Object.values(webpackConfig.htmlWebpackPlugin.files.chunks));
                //     return `<div>123</div>`
                // }
                // 在这个页面中包含的块，默认情况下会包含
                // 提取出来的通用 chunk 和 vendor chunk。
                // chunks: ['chunk-vendors', 'chunk-common', 'asd']
            }
        },
        // 活动 APP
        // activity: {
        //     // page
        //     index: {
        //         ...commonConfig,
        //     },
        // },
        // 测试 APP
        // test: {
        //     // page
        //     index: {
        //         ...commonConfig,
        //         chunks: ['chunk-vendors'],
        //     },
        // },
        // // controller
        // yaopinzc: {
        //     // page
        //     index: {
        //         ...commonConfig,
        //     },
        //     // page
        //     detail: {
        //         ...commonConfig,
        //     }
        // }
    }
}
