import Mock from 'mockjs';
import init from './utils/init.mjs';

// 任务栈，url 匹配的才会执行
const tasks = [
    {
        rurl: /^\/daysign(\/)?$/,
        async task() {
            let res = {
                template: {
                }
            }
            return {
                ...res,
                data: Mock.mock(res.template),
            }
        }
    },
];

// 传入参数
const start = function (params = {}) {
    // 生成输出的 promise
    const output = init.output();

    // 浏览器需要接收参数
    init.init_params(params);
    // 执行任务
    init.exec_tasks(tasks).then(result => {
        output.resolve(result);
    })
    return output;
};
init.is_nodejs() && start();
export default start;