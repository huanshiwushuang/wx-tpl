import { proxy } from "ajax-hook";
import Init from './init';
import Mock from 'mockjs';

const { mixinData: { local } } = Init;

console.log(Mock);

proxy({
    //请求发起前进入
    onRequest: (config, handler) => {
        // 根据配置-使用 mock 数据 or 真实数据
        console.log(local);

        console.log(config.url);

        handler.next(config);
    },
    //请求发生错误时进入，比如超时；注意，不包括http状态码错误，如404仍然会认为请求成功
    onError: (err, handler) => {
        console.log(err.type)
        handler.next(err)
    },
    //请求成功后进入
    onResponse: (response, handler) => {
        console.log(response.response)
        handler.next(response)
    }
})