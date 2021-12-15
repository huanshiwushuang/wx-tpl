// VueRouter
import VueRouter from 'vue-router';
import store from '../store';
import router from './index';
import { str } from '../utils/tools';

// 初始化时间戳
let lastTimestamp = Date.now();
// 是否是历史回退
let isHistoryBack = false;

export default function () {
    router.beforeEach(async (to, from, next) => {
        // 历史回退之后-或许继续路由
        if (isHistoryBack) {
            isHistoryBack = false;

            if (store.page.state.isRouteing) {
                return next(store.router.state.to);
            }

            return next(false);
        }

        const newTransfer = to.query.transfer;

        // 如果没有数据传递
        if (!newTransfer) {
            return next();
        }

        let jsonStr = str.decode(newTransfer)
        let jsonObj = JSON.parse(jsonStr);

        // 如果解码为 JSON 失败
        if (!jsonObj) {
            alert('transfer 解码失败');
            return next();
        }

        // 如果没有时间戳
        if (!jsonObj._timestamp) {
            alert('数据没有时间戳');
            return next();
        }

        // 如果时间戳不合适
        if (jsonObj._timestamp <= lastTimestamp) {
            return next();
        }

        // 保存时间戳
        lastTimestamp = jsonObj._timestamp;
        // 保存数据
        store.uniapp.state.hashData = jsonObj;

        // 如果首次进入页面
        if (from === VueRouter.START_LOCATION) {
            return next();
        }

        // 阻止本次路由
        next(false);
        // 历史回退
        isHistoryBack = true;
        router.go(-1);
    })
}
