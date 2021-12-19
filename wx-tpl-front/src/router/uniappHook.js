import router from '.';
import store from '../store';
import { str } from '../utils/tools';

const Time = window.performance && window.performance.now
    ? window.performance
    : Date

export function genStateKey() {
    return Time.now().toFixed(3)
}

// 获取 transfer 字符串
const getTransferString = function () {
    let res = location.href.match(/_transfer=([^&#]+)/);
    if (res) {
        res = res[1];
    }
    return res;
}
// 解析 transfer 字符串为 json 对象
const parseTransferString = function (newTransferString) {
    const jsonStr = str.decode(newTransferString);
    let jsonObj;
    try {
        jsonObj = JSON.parse(jsonStr);
    } catch {
        alert(`JSON 反序列化失败---${jsonStr}`);
        return;
    }
    // 如果没有时间戳
    if (!jsonObj._timestamp) {
        alert(`数据没有时间戳---${JSON.stringify(jsonObj)}`);
        return;
    }
    return jsonObj;
}

let lastTimestamp = Date.now();
let listenerCount = 0;
let calledCount = 0;

// 初始化接收到的数据
const initTransferString = getTransferString();
if (initTransferString) {
    store.uniapp.state.receiveData = parseTransferString(initTransferString);
    lastTimestamp = store.uniapp.state.receiveData._timestamp;
}

const _addEventListener = window.addEventListener;

window.addEventListener = function (eventType, handler, options) {
    if (['popstate', 'hashchange'].includes(eventType)) {
        listenerCount++;

        const _handler = handler;

        handler = function () {
            calledCount++;

            const newTransferString = getTransferString();

            // 如果存在 transfer string
            if (newTransferString) {
                // 如果是本轮触发的最后一次
                if (calledCount % listenerCount === 0) {
                    // 如果没有 key
                    if (!history.state?.key) {
                        // 生成 key - replace
                        history.replaceState({
                            key: genStateKey(),
                        }, null, location.href);
                    }

                    const jsonObj = parseTransferString(newTransferString);

                    // 如果时间戳不合适
                    if (jsonObj._timestamp > lastTimestamp) {
                        // 保存时间戳
                        lastTimestamp = jsonObj._timestamp;
                        // 保存数据
                        store.uniapp.state.receiveData = jsonObj;
                        // 历史返回
                        history.back();

                        // 如果正在路由
                        if (store.router.state.isRouting) {
                            switch (store.router.state.action) {
                                case 'push':
                                    router.push(store.router.state.to);
                                    break;
                                case 'replace':
                                    router.replace(store.router.state.to);
                                    break;
                                default:
                                    console.error(`store.router.state.action 错误`);
                            }
                        }
                    }
                }
                return;
            }
            return _handler.apply(this, arguments);
        }
    }
    return _addEventListener.call(this, eventType, handler, options)
}
