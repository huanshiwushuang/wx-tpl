// VueRouter
import VueRouter from 'vue-router';
import store from './store';
import router from './router';
import { str } from './utils/tools';


// 初始化时间戳
let lastTimestamp = Date.now();

router.beforeEach(async (to, from, next) => {
    const newTransfer = to.query.transfer;

    // 如果有
    if (newTransfer) {
        let jsonStr;
        let jsonObj;

        try {
            jsonStr = str.decode(newTransfer)
            jsonObj = JSON.parse(jsonStr);
            // 如果解码为 JSON 成功
            if (jsonObj) {
                // 数据必须有时间戳
                if (jsonObj.timestamp) {
                    // 接收到数据
                    store.uniapp.state.hashData = jsonObj;

                    // 首次进入页面
                    if (from === VueRouter.START_LOCATION) {
                        lastTimestamp = jsonObj.timestamp;
                        next();
                    } else {
                        // 上一次数据时间戳 && 新的时间戳 大于 上一次的
                        if (jsonObj.timestamp > lastTimestamp) {
                            lastTimestamp = jsonObj.timestamp;

                            router.go(-1);
                            next(false);
                        } else {
                            next();
                        }
                    }
                } else {
                    alert('数据没有时间戳');
                    next();
                }
            }
            else {
                alert('transfer 解码失败');
                next();
            }
        } catch {
            // alert('newTransfer---', newTransfer);
            // alert('oldTransfer---', oldTransfer);
            // alert('jsonStr---', jsonStr);
            // alert('jsonObj---', jsonObj);
            next();
        }

    } else {
        next();
    }
})
