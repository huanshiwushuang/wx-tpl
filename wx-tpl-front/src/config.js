import local from './data/local';

// requirejs 配置
window.requirejs.config({
    paths: {
        jweixin: 'https://res.wx.qq.com/open/js/jweixin-1.4.0.js?noext',
        uniWebview: 'https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js?noext',
    }
})
// 防止某些库与 requirejs 冲突
// const _amd = window.define.amd;
// Object.defineProperties(window.define, {
//     amd: {
//         get() {
//             // 防止与高德 jssdk 冲突
//             if (/amap\.com\/maps/.test(document.currentScript.src)) {
//                 return false;
//             }
//             return _amd;
//         }
//     }
// })


const res = {
    // 路由模式
    routerMode: (() => {
        if (['ast', 'refresh', 'api'].includes(local.value.routerMode)) {
            return local.value.routerMode;
        }
        return 'ast';
    })(),
    // 是否 检查 数据
    isCheck: (() => {
        if ([true, false].includes(local.value.isCheck)) {
            return local.value.isCheck;
        }
        return false;
    })(),
    // 是否 mock 数据
    isMock: (() => {
        // if ([true, false].includes(local.value.isMock)) {
        //     return local.value.isMock;
        // }
        // return false;
        return true;
    })(),
    // 是否打印配置信息
    isPrintConfig: (() => {
        if ([true, false].includes(local.value.isPrintConfig)) {
            return local.value.isPrintConfig;
        }
        return false;
    })(),
    // 是否移除 dom
    isRemoveDom: (() => {
        if ([true, false].includes(local.value.isRemoveDom)) {
            return local.value.isRemoveDom;
        }
        return true;
    })(),
    // 是否附加组件到 app 上
    isAttachCom: (() => {
        if ([true, false].includes(local.value.isAttachCom)) {
            return local.value.isAttachCom;
        }
        return false;
    })(),
    // 是否附加 app 到 window 上
    isAttachApp: (() => {
        if ([true, false].includes(local.value.isAttachApp)) {
            return local.value.isAttachApp;
        }
        return false;
    })(),
    // axiosBaseUrl
    axiosBaseUrl: (() => {
        return local.value.axiosBaseUrl || location.origin;
    })(),
}
// 保存配置
local.set(res);

export default res;

if (res.isPrintConfig) {
    const settingsUrl = new URL(location.href);

    settingsUrl.pathname = '/settings';
    settingsUrl.searchParams.set('jzm', '1');

    console.group(`配置信息---${settingsUrl.toString()}`);

    console.table(Object.keys(res).map(key => {
        return {
            key,
            value: res[key],
        }
    }), [
        'key',
        'value',
    ]);

    console.groupEnd(`配置信息`);
}