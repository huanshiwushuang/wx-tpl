// localStorage
import local from './local_storage';

// config
import config from '../config';

const data = JSON.parse(document.querySelector('#data').innerHTML);

(async () => {
    // 数据校验
    if (config.is_check) {
        let { default: console_check } = await import('../console/check');

        console_check({
            url: location.pathname,
            check_data: data,
        });
    }
})()

export default {
    data,
    local,
    // 异步加载的组件
    coms: [],
    // body 的 class
    bodyClass: [],
    // 颜色变量
    // c_theme: '255,121,4'
    c_theme: '#FF7904',
}