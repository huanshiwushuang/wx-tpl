const baseUrl = `/static/admin`;

// require config
require.config({
    baseUrl,
    paths: {
        vue: `wxFast/assets/js/vue.min.js?noext`,
        httpVueLoader: `wxFast/assets/js/httpVueLoader.min.js?noext`,
        lodash: `wxFast/assets/js/lodash.min.js?noext`,
        axios: `wxFast/assets/js/axios.min.js?noext`,
        vuex: `wxFast/assets/js/vuex.min.js?noext`,
        html5parser: `wxFast/assets/js/html5parser.umd.js?noext`,
        'js-cookie': `wxFast/assets/js/js.cookie.min.js?noext`,
        less: `wxFast/assets/js/less.min.js?noext`,
        ELEMENT: `wxFast/modules/element-ui/index.js?noext`,
        'lz-string': `wxFast/assets/js/lz-string.min.js?noext`,
        // ******************************************************************
        '@vue/composition-api': `wxFast/assets/js/composition-api.js?noext`,
        'vue-demi': `wxFast/assets/js/vue-demi.js?noext`,
        echarts: `wxFast/assets/js/echarts.min.js?noext`,
        'vue-echarts': `wxFast/assets/js/vue-echarts/index.umd.js?noext`,
        // ******************************************************************
        utils: `wxFast/utils`,
        data: `wxFast/data`,
        // 移动
        moveable: `wxFast/assets/js/moveable.js?noext`,
        // 拖动
        vuedraggable: `wxFast/assets/js/vuedraggable.umd.min.js?noext`,
        sortablejs: `wxFast/assets/js/Sortable.min.js?noext`,
    },
    map: {
        '*': {
            'css': `assets/js/css.min.js`,
        }
    },
    shim: {
        'vue': {
            exports: `Vue`,
            deps: [
                'css!wxFast/assets/css/class.css',
            ]
        },
        'vue-demi': {
            exports: `VueDemi`,
        },
        'ELEMENT': {
            deps: [
                'css!wxFast/modules/element-ui/theme-chalk/index.css',
            ]
        },
    }
});
// wx-vuedraggable
define('wx-vuedraggable', () => {
    return new Promise(async resolve => {
        require(['wx-vue', 'vuedraggable'], (Vue, vuedraggable) => {
            resolve(vuedraggable);
        })
    })
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
// wx-mixin-data
define('wx-mixin-data', ['data/local.js'], (local) => {
    return {
        local,
    }
});
// wx-vue
define('wx-vue', () => {
    return new Promise(resolve => {
        require(['vue', 'wx-axios', 'httpVueLoader', 'less', 'lodash', 'utils/tools.js', 'wx-mixin-data'], (Vue, requestPromise, httpVueLoader, less, _, tools, wxMixinData) => {
            (async () => {
                const request = await requestPromise;

                window.Vue = Vue;
                // mixin data
                Vue.mixin({
                    data() {
                        return wxMixinData;
                    },
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
                    'wx-dialog',
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
                    size: `mini`,
                    zIndex: 2000,
                });
                resolve();
            })();
        })
    })
})
