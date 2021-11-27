const __filename = import.meta.url;
const __dirname = __filename.match(/(.+)\/[^/]*$/)[1];


export async function requirejs() {
    return (await import(`${__dirname}/module/require.js`));
}

export async function vue() {
    return (await import(`https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js`));
}

export async function vueLoader() {
    return await new Promise(async resolve => {
        let { require } = await requirejs();
        require(['https://cdn.jsdelivr.net/npm/http-vue-loader@1.4.2/src/httpVueLoader.js'], (res) => {
            resolve(res);
        })
    });
}

export async function lodash(name = 'lodash.min') {
    let res = await import(`https://cdn.jsdelivr.net/npm/lodash-es@4.17.21/${name}.js`);
    return res;
}

export async function axios() {
    return await new Promise(async resolve => {
        let { require } = await requirejs();
        require(['https://cdn.jsdelivr.net/npm/axios@0.24.0/dist/axios.min.js'], (res) => {
            resolve(res);
        })
    });
}

export async function vuex() {
    return (await import(`https://cdn.jsdelivr.net/npm/vuex@3.6.2/dist/vuex.esm.browser.js`));
}

export async function html5parser() {
    return await new Promise(async resolve => {
        let { require } = await requirejs();
        require(['https://cdn.jsdelivr.net/npm/html5parser@2.0.2/dist/html5parser.umd.js'], (res) => {
            resolve(res);
        })
    });
}

export async function jsCookie() {
    return (await import(`https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.mjs`));
}

export async function less() {
    return await new Promise(async resolve => {
        let { require } = await requirejs();
        require(['https://cdn.jsdelivr.net/npm/less@4.1.2/dist/less.min.js'], (res) => {
            resolve(res);
        })
    });
}

export async function vueCompositionAPI() {
    let requirejsPromise = requirejs();
    let vuePromise = vue();

    let { define } = await requirejsPromise;
    globalThis.Vue = (await vuePromise).default;

    define('vue', () => globalThis.Vue);

    return await new Promise(async resolve => {
        let { require } = await requirejs();
        require(['https://cdn.jsdelivr.net/npm/@vue/composition-api@1.0.5'], (res) => {
            resolve(res);
        })
    });
}

export async function vueDemi() {
    let vueCompositionAPIPromise = vueCompositionAPI();
    globalThis.VueCompositionAPI = (await vueCompositionAPIPromise).default;

    return await new Promise(async resolve => {
        let { require } = await requirejs();
        require(['https://cdn.jsdelivr.net/npm/vue-demi@0.12.1/lib/index.iife.min.js'], (res) => {
            resolve();
        })
    });
}

export async function echarts() {
    return await new Promise(async resolve => {
        let { require } = await requirejs();
        require(['https://cdn.jsdelivr.net/npm/echarts@5.2.2/dist/echarts.min.js'], (res) => {
            resolve(res);
        })
    });
}

export async function vueEcharts() {
    let requirejsPromise = requirejs();
    let echartsPromise = echarts();
    let vueDemiPromise = vueDemi();

    let { define } = await requirejsPromise;
    let { default: defa } = await echartsPromise;
    await vueDemiPromise;

    define('echarts', () => defa);

    return await new Promise(async resolve => {
        let { require } = await requirejs();
        require(['https://cdn.jsdelivr.net/npm/vue-echarts@6.0.0/dist/index.umd.min.js'], (res) => {
            resolve(res);
        })
    });
}

console.log(await vueEcharts());




