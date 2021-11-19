import Mock from 'mockjs';
import init from './utils/init.mjs';

// 任务栈，url 匹配的才会执行
const tasks = [
    {
        rurl: '/',
        async task() {
            let res = {
                template: {
                    'finished|4-1': false,
                    'list|10-20': [
                        {
                            'head': `@image(80x80)`,
                            'name|1': [
                                '@name',
                                '@cname',
                            ],
                            'guanzhu|100-400': 1,
                            'pic': `@image(690x380)`,
                            'content': `@cparagraph(2,4)`,
                            'author|1': [
                                `@cname`,
                                `@name`,
                            ],
                            'love|100-400': 1
                        }
                    ]
                }
            }
            return {
                ...res,
                data: Mock.mock(res.template),
            }
        }
    },
    {
        rurl: /^\/index\/newest(\/)?$/,
        async task() {
            let res = {
                template: {
                    'list|10-20': [
                        {
                            'head': `@image(80x80)`,
                            'name|1': [
                                '@name',
                                '@cname',
                            ],
                            'guanzhu|100-400': 1,
                            'pic': `@image(690x380)`,
                            'content': `@cparagraph(2,4)`,
                            'author|1': [
                                `@cname`,
                                `@name`,
                            ],
                            'love|100-400': 1
                        }
                    ]
                }
            }
            return {
                ...res,
                data: Mock.mock(res.template),
            }
        }
    },
    {
        rurl: /^\/index\/popular(\/)?$/,
        async task() {
            let res = {
                template: {
                    'list|10-20': [
                        {
                            'head': `@image(80x80)`,
                            'name|1': [
                                '@name',
                                '@cname',
                            ],
                            'pic': `@image(690x450)`,
                            'content': `@cparagraph(2,4)`,
                            'author|1': [
                                `@cname`,
                                `@name`,
                            ],
                        }
                    ]
                }
            }
            return {
                ...res,
                data: Mock.mock(res.template),
            }
        }
    },
    {
        rurl: /^\/index\/rank(\/)?$/,
        async task() {
            let res = {
                template: {
                    'list|10-20': [
                        {
                            'head': `@image(80x80)`,
                            'name|1': [
                                '@name',
                                '@cname',
                            ],
                            'guanzhu|100-400': 1,
                            'pic': `@image(690x380)`,
                            'content': `@cparagraph(2,4)`,
                            'author|1': [
                                `@cname`,
                                `@name`,
                            ],
                            'love|100-400': 1
                        }
                    ]
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