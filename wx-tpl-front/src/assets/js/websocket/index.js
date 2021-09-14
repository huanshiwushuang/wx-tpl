import Vue from 'vue';
import WS from '@/assets/js/utils/ws';
import Record from './controller/record';
import Init from '@/init';
import Data from './data/data'

const { $post: Post } = Init.protoData;

// 配置
const config = {
    // websocket 协议
    protocol: 'wss',
    // websocket 网址
    url: 'remote.513902.xyz:443/wss',
    // 绑定地址
    bind_url: 'https://remote.513902.xyz/websocket/bindUid',
    // 用户 uid
    uid: Init.protoData.$cookie.get('PHPSESSID'),
}

// 创建 websocket
const ws = new WS({
    protocol: config.protocol,
    url: config.url,
});
ws.connect();

Vue.prototype.$ws = ws;

// 初始化状态
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
    switch (data_json.dist) {
        case 'record':
            Record.onmessage(data_json);
            break;
        default:
            // type 数据类型
            switch (data_json.type) {
                // 初始化
                case 'init':
                    {
                        // 如果不是初始化状态
                        if (state_init.state !== state_init.init) {
                            return;
                        }
                        // 正在初始化
                        state_init.state = state_init.initing;

                        try {
                            await Post(config.bind_url, {
                                client_id: data_json.client_id,
                                uid: config.uid,
                            });
                        } catch (e) {
                            console.error(e);

                            // 初始状态
                            state_init.state = state_init.init;

                            // 绑定报错，断开 socket
                            ws.disconnect();
                            return;
                        }
                        // 绑定成功，通知 websocket server 进行验证
                        ws.sendObj(Data.node_send({
                            source: 'main',
                            type: 'inited'
                        }))
                    }
                    break;
                // 初始化完成
                case 'inited':
                    state_init.state = state_init.inited;

                    // 初始化完成，通知其他控制器
                    all_controller.forEach(item => {
                        item.onconnect();
                    })
                    break;
                // 关闭 socket
                case 'close':
                    ws.disconnect();
                    break;
            }
    }
});

// 处理-连接断开
const handleCloseError = function (...args) {
    clearTimeout(handleCloseError.timeout);

    handleCloseError.timeout = setTimeout(() => {
        all_controller.forEach(controller => {
            controller.ondisconnect.apply(this, args);
        })

        // 重置-初始化状态
        state_init.state = state_init.init;
    }, 50);
}
ws.addEventListener('close', handleCloseError);
ws.addEventListener('error', handleCloseError);

// 处理-重新连接 websocket
const active_websocket = () => {
    if ([WebSocket.CLOSED, WebSocket.CLOSING].includes(ws.readyState)) {
        ws.connect();
    }
}
window.addEventListener('touchstart', active_websocket);
window.addEventListener('mousemove', active_websocket);
window.addEventListener('scroll', active_websocket);

export default ws;