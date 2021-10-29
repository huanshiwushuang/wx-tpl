import local from './utils/local_storage';

// 路由配置
export const router = {
    hook: {
        mode: 'ast',
    }
}

// 环境
export const env = (() => {
    if (['development', 'production'].includes(local.value.env)) {
        return local.value.env;
    }
    return process.env.NODE_ENV;
})();

// 是否 模拟 数据
export const is_mock = (() => {
    if ([true, false].includes(local.value.is_mock)) {
        return local.value.is_mock
    }
    return false;
})();

// 是否 检查 数据
export const is_check = (() => {
    if ([true, false].includes(local.value.is_check)) {
        return local.value.is_check;
    }
    return (() => {
        if (env === 'development') {
            return true;
        }
        return false;
    })()
})();