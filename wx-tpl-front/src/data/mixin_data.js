// localStorage
import local from './local_storage';
// store
import store from '../store';
// tools
import { env, html } from '../utils/tools';

// 提取 page 数据缓存到 store
const ast = html.to_ast(document.documentElement.outerHTML);
const page = JSON.parse(ast.page.str);

store.commit('views/Base/pages', {
    ...store.state.views.Base.pages,
    [location.pathname]: page,
});

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
    // c_theme: '255,121,4'
    c_theme: '#FF7904',
    // 是否移动端
    is_mobile_ua: env.is_mobile_ua(),
};

export default res;