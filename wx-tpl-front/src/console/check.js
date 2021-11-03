import Mock from 'mockjs';

export default async function (response) {
    // bug: 如果监听 /app 下的所有，则 webpack 会一直编译
    const modulesFiles = require.context('BACK_ROOT/app/defaultApp/mock/mjs', true, /\.mock\.mjs$/);

    // 读取后端中的所有 mock 规则
    const mock_rules = [];
    const keys = modulesFiles.keys();
    for (let modulePath of keys) {
        // array
        let mock_rule = await modulesFiles(modulePath).default;

        mock_rules.push(...mock_rule);
    }

    // 开始 check
    const url = response.config.url;
    const data = response.data;

    console.group(`Check 数据---${url}`);

    // 执行 check
    switch (mock_rules.length) {
        case 0:
            console.warn(`未找到 check 规则`);
            break;
        case 1:
            {
                const template = mock_rules[0].template;

                if (['object', 'string'].includes(typeof template)) {
                    let result = Mock.valid(template, data);

                    if (result.length) {
                        console.error('check 不通过');
                        console.error('check 规则', template);
                        console.error('check 数据', data);
                        console.error('check 结果', result);
                    } else {
                        console.info('check 通过');
                    }
                } else {
                    console.error(`check 规则只能是对象 or 字符串`);
                    console.error(`当前规则`, template);
                }
            }
            break;
        default:
            console.error(`找到 ${mock_rules.length} 个 check 规则`);
    }

    console.groupEnd(`Check 数据---${url}`);

    window.Mock = Mock;
}