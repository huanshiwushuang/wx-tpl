import Mock from 'mockjs';
const modulesFiles = require.context('BACK_ROOT/app/defaultApp/mock', true, /\.mock\.json5$/);

// 读取后端中的所有 mock 规则
const mock_datas = modulesFiles.keys().reduce((sum, modulePath) => {
    const { default: defa } = modulesFiles(modulePath);

    sum.push(...defa);

    return sum;
}, []);

export default async function (response) {
    const url = response.config.url;
    const data = response.data;

    console.group(`Check 数据---${url}`);

    // 查找 check 规则
    const mock_matches = mock_datas.filter(item => {
        return new RegExp(item.rurl, 'i').test(url);
    });
    // 执行 check
    switch (mock_matches.length) {
        case 0:
            console.warn(`未找到 check 规则`);
            break;
        case 1:
            {
                const template = mock_matches[0].template;

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
            console.error(`找到 ${mock_matches.length} 个 check 规则`);
    }

    console.groupEnd(`Check 数据---${url}`);

    window.Mock = Mock;
}