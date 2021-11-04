import Mock from 'mockjs';
import init from './utils/init.mjs';
import request from './utils/request.mjs';
import { _ } from './utils/tools.mjs';

// 生成输出的 promise
const output = init.output();

// 任务栈，url 匹配的才会执行
const tasks = [
    {
        rurl: '/',
        async task() {
            const num = _.random_num(3, 6);
            const head = await request.get_head(num);
            const juzi = await request.get_juzi(num);
            const pic = await request.get_pic(num);

            let res = {
                template: {
                    list: head.map((item, index) => {
                        return {
                            head: item,
                            name: '@cname',
                            pic: pic[index],
                            juzi: juzi[index],
                            'love|50-200': 1,
                        }
                    })
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