const ENV = /window/i.test(globalThis.constructor.name) ? 'browser' : 'nodejs';

// 输出数据
export const output_promise = () => {
    let resolve;
    let reject;
    const res = new Promise((_resolve, _reject) => {
        resolve = _resolve;
        reject = _reject;
    });
    res.resolve = function (...args) {
        switch (ENV) {
            case 'browser':
                // 导出数据给 前端 check
                resolve(...args);
                break;
            case 'nodejs':
                process.stdout.write(JSON.stringify(...args));
                resolve();
                break;
        }
    }
    res.reject = reject;
    return res;
}
// 获取参数
export const get_params = () => {
    switch (ENV) {
        case 'browser':
            return {
                baseUrl: location.pathname
            }
        case 'nodejs':
            // PHP 端必须传入 baseUrl，用于匹配
            const args = process.argv.slice(2);
            return {
                baseUrl: args[0] || null,
            }
    }
}
// 匹配url，执行 tasks
export const exec_tasks = async (tasks) => {
    // 最终输出的是多任务执行后的数组
    const filter = tasks.filter(item => {
        // 过滤 url
        return new RegExp(item.rurl, 'i').test(get_params().baseUrl);
    });
    let result = await Promise.all(
        filter.map(item => {
            // 执行任务栈
            return item.task();
        })
    )
    let res = result.map((item, index) => {
        // 输出带上 rurl
        Object.assign(item, {
            rurl: filter[index].rurl,
        })
        return item;
    });
    return res;
}