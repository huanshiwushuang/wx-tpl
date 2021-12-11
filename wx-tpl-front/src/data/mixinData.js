// localStorage
import local from './local';
// tools
import { env } from '../utils/tools';

const res = {
    // 占位，之后在 router 中重写
    page: null,
    json: null,
    // local
    local,
    // 异步加载的组件
    coms: [],
    // body 的 class
    bodyClass: [],
    // 颜色变量
    // cTheme: '255,121,4'
    cTheme: '#FF7904',
    // 是否移动端
    isMobileUA: env.isMobileUA(),
};

export default res;