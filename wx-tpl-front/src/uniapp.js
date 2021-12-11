import store from './store';

// 监听 hashchange 事件-实现接收小程序传递来的数据
window.onhashchange = function () {
    store.uniapp.state.hashData = location.hash.slice(1);
    // alert(store.uniapp.state.hashData);
    // history.back();
}