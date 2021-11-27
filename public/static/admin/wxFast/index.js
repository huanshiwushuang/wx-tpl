// https://cdn.jsdelivr.net/npm/requirejs@2.3.6/require.js

// require config
require.config({
    baseUrl: 'http://192.168.100.5/static/admin',
    paths: {
        wxFast: 'wxFast',

        vue: 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js?noext',
        vueLoader: 'https://cdn.jsdelivr.net/npm/http-vue-loader@1.4.2/src/httpVueLoader.min',
        lodash: 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js?noext',
        axios: 'https://cdn.jsdelivr.net/npm/axios@0.24.0/dist/axios.min.js?noext',
        vuex: 'https://cdn.jsdelivr.net/npm/vuex@3.6.2/dist/vuex.min.js?noext',
        html5parser: 'https://cdn.jsdelivr.net/npm/html5parser@2.0.2/dist/html5parser.umd',
        'js-cookie': 'https://cdn.jsdelivr.net/npm/js-cookie@3.0.0/dist/js.cookie.min.js?noext',
        less: 'https://cdn.jsdelivr.net/npm/less@4.1.1/dist/less.min.js?noext',
        // ******************************************************************
        'vue-demi': 'https://cdn.jsdelivr.net/npm/vue-demi@0.12.1/lib/index.iife.min.js?noext',
        '@vue/composition-api': 'https://cdn.jsdelivr.net/npm/@vue/composition-api@1.0.5?noext',
        echarts: 'https://cdn.jsdelivr.net/npm/echarts@5.1.2?noext',
        'vue-echarts': 'https://cdn.jsdelivr.net/npm/vue-echarts@6.0.0?noext',
    },
    map: {
        '*': {
            'css': 'https://cdn.jsdelivr.net/npm/require-css@0.1.10/css.min.js'
        }
    },
    shim: {
    }
})
// define('vue-echarts', () => {
//     return new Promise(resolve => {
//         require(['Vue'], Vue => {
//             require(['Vue'], Vue => {
//                 require(['Vue'], Vue => {

//                 })
//             })
//         })
//     });
// })
require(['wxFast'], () => {
    debugger
})