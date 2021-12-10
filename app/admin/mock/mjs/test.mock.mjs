import Mock from 'mockjs';
import init from './utils/init.mjs';

// 任务栈，url 匹配的才会执行
const tasks = [
    {
        rurl: '/admin/test',
        async task() {
            let res = {
                template: {
                    data: {
                        'list|8-13': [
                            {
                                id: '@id',
                                name: '@name',
                                cname: '@cname',
                                'age|0-200': 1,
                                address: '@cparagraph',
                                url: 'http://@domain',
                            }
                        ],
                        'count|100-200': 1,
                    }
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
    init.initParams(params);
    // 执行任务
    init.execTasks(tasks).then(result => {
        output.resolve(result);
    })
    return output;
};
init.isNodejs() && start();
export default start;