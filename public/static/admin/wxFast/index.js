const baseUrl = `/static/admin`;

// require config
require.config({
    baseUrl,
    paths: {
        vue: 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js?noext',
        httpVueLoader: 'https://cdn.jsdelivr.net/npm/http-vue-loader@1.4.2/src/httpVueLoader.min',
        lodash: 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js?noext',
        axios: 'https://cdn.jsdelivr.net/npm/axios@0.24.0/dist/axios.min.js?noext',
        vuex: 'https://cdn.jsdelivr.net/npm/vuex@3.6.2/dist/vuex.min.js?noext',
        html5parser: 'https://cdn.jsdelivr.net/npm/html5parser@2.0.2/dist/html5parser.umd',
        'js-cookie': 'https://cdn.jsdelivr.net/npm/js-cookie@3.0.0/dist/js.cookie.min.js?noext',
        less: 'https://cdn.jsdelivr.net/npm/less@4.1.1/dist/less.min.js?noext',
        ELEMENT: 'wxFast/modules/element-ui/index.js?noext',
        'lz-string': 'https://cdn.jsdelivr.net/npm/lz-string@1.4.4/libs/lz-string.min.js?noext',
        // ******************************************************************
        '@vue/composition-api': 'https://cdn.jsdelivr.net/npm/@vue/composition-api@1.0.5?noext',
        'vue-demi': 'https://cdn.jsdelivr.net/npm/vue-demi@0.12.1/lib/index.iife.min.js?noext',
        echarts: 'https://cdn.jsdelivr.net/npm/echarts@5.1.2?noext',
        'vue-echarts': 'https://cdn.jsdelivr.net/npm/vue-echarts@6.0.0/dist/index.umd.js?noext',
        // ******************************************************************
    },
    map: {
        '*': {
            'css': 'https://cdn.jsdelivr.net/npm/require-css@0.1.10/css.min.js',
        }
    },
    shim: {
        'vue': {
            exports: 'Vue',
            deps: [
                'css!wxFast/assets/css/class.css',
            ]
        },
        'vue-demi': {
            exports: 'VueDemi',
        },
        'ELEMENT': {
            deps: [
                'css!wxFast/modules/element-ui/theme-chalk/index.css',
            ]
        },
    }
});
// wx-axios
define('wx-axios', () => {
    return new Promise(resolve => {
        require(['axios'], axios => {
            const axiosInstance = axios.create({
            });

            // 请求拦截
            axiosInstance.interceptors.request.use(async (request_config) => {
                return request_config;
            }, error => {
                return Promise.reject(error);
            })
            // 响应拦截
            axiosInstance.interceptors.response.use(async (response) => {
                return response.data;
            }, error => {
                return Promise.reject(error);
            })

            resolve({
                axios: axiosInstance,
                get(url, data, config) {
                    return axiosInstance.get(url, {
                        params: data,
                        ...config,
                    })
                },
                post(url, data, config) {
                    return axiosInstance.post(url, data, config)
                },
            });
        })
    })
})
// wx-vue
define('wx-vue', () => {
    return new Promise(resolve => {
        require(['vue', 'wx-axios', 'httpVueLoader', 'less', 'lodash', 'utils/tools.js'], (Vue, requestPromise, httpVueLoader, less, _, tools) => {
            (async () => {
                const request = await requestPromise;

                window.Vue = Vue;
                // mixin data
                Vue.mixin({
                    beforeCreate() {
                        let name = this.$options.name;
                        if (name) {
                            if (this.$root[name] && Array.isArray(this.$root[name])) {
                                this.$root[name].push(this);
                            } else {
                                this.$root[name] = [this];
                            }
                        }
                    },
                    beforeDestroy() {
                        let name = this.$options.name;
                        if (name) {
                            if (Array.isArray(this.$root[name])) {
                                let index = this.$root[name].indexOf(this);
                                if (index != -1) {
                                    this.$root[name].splice(index, 1);
                                }
                            }
                        }
                    }
                });
                // proto data
                Object.assign(Vue.prototype, {
                    $_: _,
                    $utils: {
                        tools,
                    },
                    // 请求
                    ...Object.keys(request).reduce((sum, key) => {
                        sum[`$${key}`] = request[key];
                        return sum;
                    }, {})
                })
                // httpVueLoader
                httpVueLoader.httpRequest = async url => {
                    // 替换 @
                    if (url.startsWith('@')) {
                        url = url.replace(/^@/, baseUrl);
                    }
                    return await request.get(url);
                }
                // less 处理
                httpVueLoader.langProcessor.less = async (lessText) => {
                    return (await less.render(lessText, {
                        globalVars: {
                            baseUrl,
                        }
                    })).css;
                }
                globalThis.httpVueLoader = httpVueLoader;
                // 全局组件注册
                [
                    'wx-table-pagination',
                    'wx-router-link',
                ].forEach(v => {
                    httpVueLoader.register(Vue, `@/wxFast/components/common/${v}.vue`);
                });

                resolve(Vue);
            })()
        })
    })
});
// vue-echarts 初始化
define('wx-echarts', () => {
    return new Promise(resolve => {
        require(['wx-vue'], (wxVuePromise) => {
            (async () => {
                await wxVuePromise;

                require(['@vue/composition-api'], VueCompositionAPI => {
                    globalThis.VueCompositionAPI = VueCompositionAPI;

                    require(['vue-echarts'], (VueECharts) => {
                        Vue.component("v-chart", VueECharts);
                        resolve();
                    })
                })
            })();
        })
    })
});
// wx-ELEMENT
define('wx-ELEMENT', () => {
    return new Promise(resolve => {
        require(['wx-vue', 'ELEMENT'], (VuePromise, ELEMENT) => {
            (async () => {
                let Vue = await VuePromise;
                ELEMENT.install(Vue, {
                    size: 'mini',
                    zIndex: 2000,
                });
                resolve();
            })();
        })
    })
})
