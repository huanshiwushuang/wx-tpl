import Axios from 'axios';
import Mock from 'mockjs';
import helper from './helper.mjs';

// 生成输出的 promise
const output_promise = helper.output_promise();

// 传入参数
const exec = function (params = {}) {
    // 浏览器需要接收参数
    helper.init_params(params);

    // 任务栈，url 匹配的才会执行
    const tasks = [
        {
            rurl: '/index/json',
            async task() {
                let res = {
                    template: {
                        name: '@cname',
                    }
                }
                return {
                    ...res,
                    data: Mock.mock(res.template),
                }
            }
        },
        {
            // 匹配请求的url
            rurl: '/index/about',
            async task() {
                let res = {};
                let result = {};
                try {
                    result = await Axios.get('https://v1.jinrishici.com/all.json')
                } catch (e) {
                    output.reject(e);
                }

                res = {
                    // mockjs 语法的数据生成规则
                    template: {
                        'name': `${result.data.content}-@cname`,
                    },
                };

                Object.assign(res, {
                    data: Mock.mock(res.template),
                })
                return res;
            }
        }
    ];

    // 执行任务
    helper.exec_tasks(tasks).then(result => {
        output_promise.resolve(result);
    })

    return output_promise;
};

helper.is_nodejs() && exec();
export default exec;