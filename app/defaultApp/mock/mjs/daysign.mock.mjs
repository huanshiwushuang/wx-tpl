import Mock from 'mockjs';
import init from './utils/init.mjs';

// 任务栈，url 匹配的才会执行
const tasks = [
    {
        rurl: /^\/daysign(\/)?$/,
        async task() {
            let res = {
                template: {
                    'pic|1': [
                        // `https://cdn.seovx.com/?mom=302&random=@id`,
                        // `https://cdn.seovx.com/d/?mom=302&random=@id`,
                        // `https://cdn.seovx.com/ha/?mom=302&random=@id`,
                        `https://source.unsplash.com/690x380?&random=@id`
                    ],
                    'discuss_count|1000-10000': 1,
                    'list|10-20': [
                        {
                            'id': '@id',
                            'head': `https://api.prodless.com/avatar.png?size=80`,
                            'name|1': [
                                '@name',
                                '@cname',
                            ],
                            'how_ago': /\d{2}小时前/,
                            // 内容
                            'release_time': `@cword("零一二三四五六七八九")@cword("零一二三四五六七八九")@cword("零一二三四五六七八九")@cword("零一二三四五六七八九")年@cword("零一二三四五六七八九")月@cword("零一二三四五六七八九")日`,
                            'content': '@cparagraph(1, 4)',
                            'words|1': [
                                [
                                    {
                                        pinyin: 'suì',
                                        word: '岁'
                                    },
                                    {
                                        pinyin: 'yuè',
                                        word: '月'
                                    },
                                ],
                                [
                                    {
                                        pinyin: 'huì',
                                        word: '彗'
                                    },
                                    {
                                        pinyin: 'xīng',
                                        word: '星'
                                    },
                                ]
                            ],
                            author_say: '@csentence(5)',

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