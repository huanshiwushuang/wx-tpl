// localStorage
import local from './local_storage';

export default {
    ast: JSON.parse(document.querySelector('#data').innerHTML),
    local,
    // 异步加载的组件
    coms: [],
    // body 的 class
    bodyClass: [],
    // 颜色变量
    // c_theme: '255,121,4'
    c_theme: '#FF7904',
}