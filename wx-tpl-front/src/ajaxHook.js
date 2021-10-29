
import { proxy } from "ajax-hook"

proxy({
    //请求发起前进入
    onRequest: async (config, handler) => {
        // 根据配置-使用 mock 数据 or 真实数据
        debugger
        if (is_mock) {
            await import('./mock/main');
        }
        handler.next(config);
    },
    //请求发生错误时进入，比如超时；注意，不包括http状态码错误，如404仍然会认为请求成功
    onError: (err, handler) => {
        handler.next(err)
    },
    //请求成功后进入
    onResponse: (response, handler) => {
        debugger
        if (is_check) {
            console.error('检查 数据');
            // await import('./mock');
        }
        handler.next(response)
    }
})