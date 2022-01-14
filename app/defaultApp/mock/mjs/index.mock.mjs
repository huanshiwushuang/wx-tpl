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
                            'id': '@id',
                            'head': `https://api.yimian.xyz/img?type=head&random=@id`,
                            'name|1': [
                                '@name',
                                '@cname',
                            ],

                            'pic|1': [
                                // `https://cdn.seovx.com/?mom=302&random=@id`,
                                // `https://cdn.seovx.com/d/?mom=302&random=@id`,
                                `https://cdn.seovx.com/ha/?mom=302&random=@id`,
                                `https://source.unsplash.com/690x380?&random=@id`,
                                `https://api.yimian.xyz/img?type=moe&size=1920x1080&random=@id`,
                                // `https://img1.baidu.com/it/u=3796593454,4087161325&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500`,
                            ],
                            'content': `@cparagraph(2,4)`,
                            'author|1': [
                                `@cname`,
                                `@name`,
                            ],
                            // 关注
                            'guanzhu|100-400': 1,
                            'is_guanzhu|1': true,
                            // 喜欢
                            'love_count|100-400': 1,
                            'is_love|1': true,
                            // 收藏
                            'is_shoucang|1': true,
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
                            'id': '@id',
                            'head': `https://api.yimian.xyz/img?type=head&random=@id`,
                            'name|1': [
                                '@name',
                                '@cname',
                            ],
                            // 690 * 380
                            'pic|1': [
                                // `https://cdn.seovx.com/?mom=302&random=@id`,
                                // `https://cdn.seovx.com/d/?mom=302&random=@id`,
                                // `https://cdn.seovx.com/ha/?mom=302&random=@id`,
                                `https://source.unsplash.com/690x380?&random=@id`,
                                `https://api.yimian.xyz/img?type=moe&size=1920x1080&random=@id`,
                                `https://img.paulzzh.com/touhou/random?random=@id`,
                                // `https://img1.baidu.com/it/u=3796593454,4087161325&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500`,
                            ],
                            'content': `@cparagraph(2,4)`,
                            'author|1': [
                                `@cname`,
                                `@name`,
                            ],

                            // 关注
                            'guanzhu|100-400': 1,
                            'is_guanzhu|1': true,
                            // 喜欢
                            'love_count|100-400': 1,
                            'is_love|1': true,
                            // 收藏
                            'is_shoucang|1': true,
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
                            'head': `https://api.yimian.xyz/img?type=head&random=@id`,
                            'name|1': [
                                '@name',
                                '@cname',
                            ],
                            'pic|1': [
                                // `https://cdn.seovx.com/?mom=302&random=@id`,
                                // `https://cdn.seovx.com/d/?mom=302&random=@id`,
                                // `https://cdn.seovx.com/ha/?mom=302&random=@id`,
                                `https://source.unsplash.com/690x380?&random=@id`,
                                `https://api.yimian.xyz/img?type=moe&size=1920x1080&random=@id`,
                                `https://img.paulzzh.com/touhou/random?random=@id`,
                                // `https://img1.baidu.com/it/u=3796593454,4087161325&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500`,
                            ],
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
                    'finished|4-1': false,
                    'list|10-20': [
                        {
                            'id': '@id',
                            'rank|+1': 1,
                            'love_count|100-400': 1,
                            'is_love|1': true,
                            'content': '@cparagraph(2,4)',
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