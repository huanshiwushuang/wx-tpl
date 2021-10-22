import WS from '@/assets/js/utils/ws';
import Record from './controller/record';
import Init from '@/init';
import Vue from 'vue';
import { deflate } from 'pako';
import { throttle } from 'lodash-es';
// API
import Code from '@/../../app/defaultApp/websocket/api/code.json5';

class MyWS extends WS {
    sendObj() {
        this.send(
            deflate(JSON.stringify(obj)).buffer
        )
    }
}

const options_use = {
    protocol: 'ws',
    url: 'remote.513902.xyz:80/wss',
    // 绑定地址
    bind_url: 'http://remote.513902.xyz/websocket/bindUid',
    // 用户 uid
    uid: Init.protoData.$cookie.get('PHPSESSID'),
}

export let ws;

Vue.prototype.$ws = ws;

function start() {
    // 创建 websocket
    ws = new MyWS({
        protocol: options_use.protocol,
        url: options_use.url,
    });
    ws.connect();

    // 状态-初始化
    let state_init = {
        init: 'init',
        initing: 'initing',
        initted: 'initted',

        state: 'init',
    }
    // 所有的控制器
    const all_controller = [
        Record
    ];

    // 处理-收到消息
    ws.addEventListener('message', async e => {
        let data_json = {};

        try {
            data_json = JSON.parse(e.data);
        } catch (e) {
            return console.error(e);
        }

        // 根据 dist 确定数据交给哪个控制器处理
        switch (data_json.code) {
            // 初始化
            case Code.ktmsynva_init:
                {
                    // 如果不是初始化状态
                    if (state_init.state !== state_init.init) {
                        return;
                    }
                    // 正在初始化
                    state_init.state = state_init.initing;

                    try {
                        await fetch(options_use.bind_url, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                client_id: data_json.client_id,
                                uid: options_use.uid,
                            })
                        })
                    } catch (e) {
                        console.error(e);

                        // 初始状态
                        state_init.state = state_init.init;

                        // 绑定报错，断开 socket
                        ws.disconnect();
                        return;
                    }
                    // 绑定成功，通知 websocket server 进行验证
                    ws.sendObj(({
                        source: 'main',
                        type: 'inited'
                    }))
                }
                break;
            // 初始化完成
            case Code.ktmu2q9m_inited:
                state_init.state = state_init.inited;

                // 初始化完成，通知其他控制器
                all_controller.forEach(item => {
                    item.onconnect();
                })
                break;
            // 关闭 socket
            case Code.ktmu4f61_close:
                ws.disconnect();
                break;
            // Record 处理-checkout
            case Code.ktn053fj_checkout:
                Record.onmessage(data_json);
                break;
        }

    });

    // 处理-连接断开
    const handleCloseError = function (...args) {

        clearTimeout(handleCloseError.timeout);

        handleCloseError.timeout = setTimeout(() => {
            // 如果处于已初始化完成状态 || 正在初始化
            // 断开，才算是断开连接
            if (state_init.state !== state_init.init) {
                all_controller.forEach(controller => {
                    controller.ondisconnect.apply(this, args);
                })
            }
            // 重置-初始化状态
            state_init.state = state_init.init;
        }, 50);

    }
    ws.addEventListener('close', handleCloseError);
    ws.addEventListener('error', handleCloseError);

    // 处理-重新连接 websocket
    // throttle 节流
    const active_websocket = throttle(function () {
        // socket 已关闭
        if ([WebSocket.CLOSED, WebSocket.CLOSING].includes(ws.readyState)) {
            // 自动重连次数已用尽 || 未启用自动重连
            if (ws.options_use.reconnectionTryCount <= 0 || !ws.options_use.reconnection) {
                ws.connect();
            }
        }
    }, 3000);
    window.addEventListener('touchstart', active_websocket);
    window.addEventListener('mousemove', active_websocket);
    window.addEventListener('scroll', active_websocket);
}

// 启动 websocket
try {
    start();
} catch (e) {
    console.error(e);
}

