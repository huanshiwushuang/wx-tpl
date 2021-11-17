import LZString from "lz-string";

const ENV = /window/i.test(globalThis.constructor.name) ? 'browser' : 'nodejs';

// 浏览器需要外部传入参数
let params = {};

// 初始化参数
async function init_params(p) {
    Object.assign(params, p);
}
// 输出数据
function output() {
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
// 匹配url，执行 tasks
async function exec_tasks(tasks) {
    // 最终输出的是多任务执行后的数组
    const filter = tasks.filter(item => {
        // 过滤 url
        if (item.rurl instanceof RegExp) {
            return item.rurl.test(params.pathname);
        } else if (typeof item.rurl === 'function') {
            return item.rurl(params.pathname);
        } else {
            return new RegExp(`^${item.rurl}$`, 'i').test(params.pathname);
        }
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
// 编码
function str_encode(val) {
    const src = ['-', "\\+"];
    const dist = ["__", "_"];

    let res = LZString.compressToEncodedURIComponent(val);
    src.forEach((item, index) => {
        res = res.replaceAll(new RegExp(item, 'g'), dist[index]);
    })

    return res;
}
// 解码
function str_decode(val) {
    const src = ["__", "_"];
    const dist = ['-', "+"];

    let res = val;
    src.forEach((item, index) => {
        res = res.replace(new RegExp(item, 'g'), dist[index]);
    })

    res = LZString.decompressFromEncodedURIComponent(res);

    return res;
}
// 是否浏览器
function is_browser() {
    return ENV === 'browser';
}
// 是否nodejs
function is_nodejs() {
    return ENV === 'nodejs';
}

switch (ENV) {
    case 'nodejs':
        // PHP 端必须传入 pathname，用于匹配
        // 传入一个json字符串参数
        const str = process.argv.slice(2)[0] || '{}';
        Object.assign(params, JSON.parse(str_decode(str)));
        break;
}

export default {
    output,
    exec_tasks,
    init_params,
    is_browser,
    is_nodejs
}