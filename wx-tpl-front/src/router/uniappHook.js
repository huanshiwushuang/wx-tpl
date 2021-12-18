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
// 初始化接收到的数据
const initTransferString = getTransferString();
if (initTransferString) {
    store.uniapp.state.receiveData = parseTransferString(initTransferString);
    lastTimestamp = store.uniapp.state.receiveData._timestamp;
}

const _addEventListener = window.addEventListener;

window.addEventListener = function (eventType, handler, options) {
    if (['popstate', 'hashchange'].includes(eventType)) {

        const _handler = handler;

        handler = function () {
            const newTransferString = getTransferString();

            // 如果存在 transfer string && 不等于首次进入页面的 transfer string
            if (newTransferString) {
                const jsonObj = parseTransferString(newTransferString);

                // 如果时间戳不合适
                if (jsonObj._timestamp > lastTimestamp) {
                    // 保存时间戳
                    lastTimestamp = jsonObj._timestamp;
                    // 保存数据
                    store.uniapp.state.receiveData = jsonObj;
                }
                return;
            }
            return _handler.apply(this, arguments);
        }
    }
    return _addEventListener.call(this, eventType, handler, options)
}
