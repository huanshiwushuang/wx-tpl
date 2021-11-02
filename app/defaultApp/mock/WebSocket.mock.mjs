import Axios from 'axios';

let resolve = () => { };
let reject = () => { };

(async () => {
    let result = {};
    let res = [];

    try {
        result = await Axios.get('https://v1.jinrishici.com/all.json')
    } catch (e) {
        reject(e);
    }

    // 最终导出的数据
    res = [
        {
            // 匹配请求的url
            rurl: '/index/about',
            // mockjs 语法的数据生成规则
            template: {
                'name': `${result.data.content}-@name`,
            },
        }
    ]

    // 导出数据
    resolve_json(res);
})()



const resolve_json = (data) => {
    // 打印数据给 后端 mock
    if (!/window/i.test(globalThis.constructor.name)) {
        process.stdout.write(JSON.stringify(data));
    }
    // 导出数据给 前端 check
    resolve(data);
}
export default new Promise(async (_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
});



