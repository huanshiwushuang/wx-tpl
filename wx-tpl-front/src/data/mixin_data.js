// localStorage
import local from './local_storage';
// config
import config from '../config';
// env
import { env } from '../utils/tools';

const data = JSON.parse(document.querySelector('#data').innerHTML);

// 数据校验
(async () => {
    if (config.is_check) {
        let { default: console_check } = await import('../console/check');

        console_check({
            url: location.pathname,
            check_data: data,
        });
    }
})();

const res = {
    json: data,
    local,
    // 异步加载的组件
    coms: [],
    // body 的 class
    bodyClass: [],
    // 颜色变量
    // c_theme: '255,121,4'
    c_theme: '#FF7904',
    // 是否移动端
    is_mobile_ua: env.is_mobile_ua(),
};

// 响应式更新
const update = () => {
    res.is_mobile_ua = env.is_mobile_ua();
}
window.addEventListener('resize', update)
window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
        update()
    }
})


export default res;