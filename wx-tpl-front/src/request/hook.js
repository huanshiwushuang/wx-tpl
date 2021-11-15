import { proxy } from "ajax-hook";
// import { html } from '../utils/tools';
import store from '../store';

/* 
    hook 请求
    便于直接返回缓存的 page
*/
proxy({
    //请求发起前进入
    onRequest: (config, handler) => {
        let url_obj = new URL(config.url);

        // 如果有缓存
        let page = store.state.views.Base.pages[url_obj.pathname];
        if (page) {
            console.log(`数据缓存`, page, `---${url_obj.href}`);

            return handler.resolve({
                config: config,
                headers: {
                    'content-type': 'application/json',
                },
                response: page,
                status: 200,
                statusText: 'OK',
            });
        }

        handler.next(config);
    },
    //请求发生错误时进入，比如超时；注意，不包括http状态码错误，如404仍然会认为请求成功
    onError: (err, handler) => {
        handler.next(err)
    },
    //请求成功后进入
    onResponse: (response, handler) => {
        handler.next(response)
    }
})