import store from '../store';
// import router from './index';
import { str } from '../utils/tools';

const getTransferString = function () {
    let res = location.href.match(/transfer=([^&#]+)/);
    if (res) {
        res = res[1];
    }
    return res;
}

// 初始化 transfer-便于在页面回退之时-和其做对比
const initTransferString = getTransferString();
// 初始化时间戳
let lastTimestamp = Date.now();
let isHistoryBack = false;
// 监听器的数量
let listenerCount = 0;
// 监听器本轮触发次数
let triggerCount = 0;


const _addEventListener = window.addEventListener;

window.addEventListener = function (eventType, handler, options) {
    if (['popstate', 'hashchange'].includes(eventType)) {
        // 记录事件总数量
        listenerCount++;

        const _handler = handler;
        handler = function () {
            // 记录触发次数
            triggerCount++;

            // 如果是历史返回
            if (isHistoryBack) {
                // 如果本轮事件最后一次触发
                if (triggerCount % listenerCount === 0) {
                    isHistoryBack = false;
                }
                return;
            }

            const newTransferString = getTransferString();
            // 如果存在 transfer string && 不等于首次进入页面的 transfer string
            if (newTransferString && newTransferString !== initTransferString) {
                // 如果不是最后一个监听器被触发
                if (triggerCount % listenerCount !== 0) {
                    return;
                }
                const jsonStr = str.decode(newTransferString);
                const jsonObj = JSON.parse(jsonStr);

                // 如果解码为 JSON 失败
                if (!jsonObj) {
                    alert(`transfer 解码失败---${newTransferString}`);
                    return;
                }
                // 如果没有时间戳
                if (!jsonObj._timestamp) {
                    alert(`数据没有时间戳---${JSON.stringify(jsonObj)}`);
                    return;
                }
                // 如果时间戳合适
                if (jsonObj._timestamp > lastTimestamp) {
                    // 保存时间戳
                    lastTimestamp = jsonObj._timestamp;
                    // 保存数据
                    store.uniapp.state.hashData = jsonObj;
                    // 返回
                    isHistoryBack = true;
                    history.back();
                    return;
                }
            }
            return _handler.apply(this, arguments);
        }
    }

    return _addEventListener.call(this, eventType, handler, options)
}