import store from '../store';
import { str } from '../utils/tools';
import router from './index';
import VueRouter from 'vue-router';

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

// 初始化时间戳
let lastTimestamp = Date.now();

export default function () {
    router.beforeEach((to, from, next) => {
        let newTransferString = getTransferString();

        if (newTransferString) {
            switch (from) {
                // 第一次进入页面
                case VueRouter.START_LOCATION:
                    store.uniapp.state.receiveData = parseTransferString(newTransferString);
                    break;
                default:
                    {
                        const jsonObj = parseTransferString(newTransferString);

                        // 如果时间戳合适
                        if (jsonObj._timestamp > lastTimestamp) {
                            // 保存时间戳
                            lastTimestamp = jsonObj._timestamp;
                            // 保存数据
                            store.uniapp.state.receiveData = jsonObj;
                            next(false);
                            return;
                        }
                    }
            }
        }

        next();
    })
}