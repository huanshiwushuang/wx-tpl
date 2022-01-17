import store from '../store';
import { str } from '../utils/tools';

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
// 监听器的数量
let listenerCount = 0;
// 正常调用的数量
let calledCount = 0;
// 返回调用的数量
let backCalledCount = 0;
// 是否是返回
let isBack = false;

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
            // 如果是返回触发的
            if (isBack) {
                backCalledCount++;
                // 如果是本轮触发的最后一次
                if (backCalledCount % listenerCount === 0) {
                    isBack = false;
                }
                return;
            }

            const newTransferString = getTransferString();

            calledCount++;

            // 如果存在 transfer string
            if (newTransferString && newTransferString !== initTransferString) {
                const jsonObj = parseTransferString(newTransferString);

                // 如果时间戳合适
                if (jsonObj._timestamp > lastTimestamp) {
                    // 如果是本轮触发的最后一次
                    if (calledCount % listenerCount === 0) {
                        // 保存时间戳
                        lastTimestamp = jsonObj._timestamp;
                        // 保存数据
                        store.uniapp.state.receiveData = jsonObj;
                        // 历史返回
                        isBack = true;
                        history.back();
                    }
                    return;
                }
            }
            return _handler.apply(this, arguments);
        }
    }
    return _addEventListener.call(this, eventType, handler, options)
}