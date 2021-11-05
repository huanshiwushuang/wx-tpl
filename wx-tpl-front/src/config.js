import local from './data/local_storage';

const res = {
    // 路由模式
    router_mode: (() => {
        if (['ast', 'refresh', 'api'].includes(local.value.router_mode)) {
            return local.value.router_mode;
        }
        return 'ast';
    })(),
    // 是否 检查 数据
    is_check: (() => {
        if ([true, false].includes(local.value.is_check)) {
            return local.value.is_check;
        }
        return false;
    })(),
    // 是否 mock 数据
    is_mock: (() => {
        if ([true, false].includes(local.value.is_mock)) {
            return local.value.is_mock;
        }
        return false;
    })(),
    // 是否打印配置信息
    is_print_config: (() => {
        if ([true, false].includes(local.value.is_print_config)) {
            return local.value.is_print_config;
        }
        return false;
    })(),
    // 是否移除 dom
    is_remove_dom: (() => {
        if ([true, false].includes(local.value.is_remove_dom)) {
            return local.value.is_remove_dom;
        }
        return true;
    })(),
    // 是否附加组件到 app 上
    is_attach_com: (() => {
        if ([true, false].includes(local.value.is_attach_com)) {
            return local.value.is_attach_com;
        }
        return false;
    })(),
}

// 保存配置
local.set(res);

export default res;

if (res.is_print_config) {
    const settings_url = new URL(location.href);
    settings_url.searchParams.set('settings', 1);

    console.group(`配置信息---${settings_url.toString()}`);

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