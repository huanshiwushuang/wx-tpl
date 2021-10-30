import WS from '../utils/ws'
// cookie
import Cookie from "js-cookie"
// controllers
import controllers from './controller'
// request
import request from '../request'
// log
import log from '../utils/log'

// 初始化绑定 websocket
class InitWS extends WS {
    // 连接状态
    #state = 'init';
    #state_options = {
        init: 'init',
        initing: 'initing',
        inited: 'inited',
    };
    // 客户端 id
    #client_id = '';
    #client_id_tmp = '';
    // 配置选项
    #options_use = {
        bind_url: '',
        uid: '',
    };

    constructor(options_params, options_params_parent) {
        super(options_params_parent);

        this.#options_use = options_params;

        // 参数校验
        const options_values = Object.values(this.#options_use);
        for (let i of options_values) {
            if (!i) {
                return console.error('参数有误', i);
            }
        }

        // 处理消息
        this.addEventListener('message', this.#on_message);
        // 处理断开
        this.addEventListener('close', this.#handle_close_error);
        this.addEventListener('error', this.#handle_close_error);
        // 处理激活
        window.addEventListener('touchstart', this.#handle_activate.bind(this));
        window.addEventListener('mousemove', this.#handle_activate.bind(this));
        window.addEventListener('scroll', this.#handle_activate.bind(this));
    }
    // eslint-disable-next-line no-dupe-class-members
    async #on_message(event) {
        let data_json;

        try {
            data_json = JSON.parse(event.data);
        } catch (e) {
            return console.error(e, event);
        }

        // 根据 path 确定数据路径
        switch (data_json.path) {
            // 初始化
            case 'init':
                {
                    // 如果不是 init 状态
                    if (this.#state !== this.#state_options.init) {
                        return;
                    }

                    // 设置正在初始化
                    this.#state_set(this.#state_options.initing);
                    // 设置临时 客户端 id
                    this.#client_id_tmp = data_json.client_id;

                    try {
                        await request.post(this.#options_use.bind_url, {
                            check: 'kv7p8t8q',
                            client_id: this.#client_id_tmp,
                            uid: this.#options_use.uid,
                        });
                    } catch (e) {

                        // 初始状态
                        this.#state_set(this.#state_options.init);
                        // 绑定报错，断开 socket
                        this.disconnect();

                        return console.error(e);
                    }
                    // 绑定成功，通知 websocket server 进行验证
                    this.sendObj({
                        path: 'init_complete',
                    })
                }
                break;
            // 初始化完成
            case 'init_complete':
                log.green(`websocket 已连接`);

                this.#state_set(this.#state_options.inited);

                // 初始化完成，通知其他控制器
                controllers.forEach(controller => {
                    controller.onconnect.bind(this)();
                })

                break;
            // 关闭 socket
            case 'close':
                this.disconnect();
                break;
            default:
                controllers.forEach(controller => {
                    controller.onmessage.bind(this)(data_json);
                })
        }
    }
    // 处理-连接断开
    // eslint-disable-next-line no-dupe-class-members
    #handle_close_error(...args) {
        clearTimeout(this.#handle_close_error.timeout);

        this.#handle_close_error.timeout = setTimeout(() => {
            // 如果处于已初始化完成状态
            // 断开，才算是断开连接
            if (this.#state === this.#state_options.inited) {
                log.red(`websocket 已断开`);

                controllers.forEach(controller => {
                    controller.ondisconnect.apply(this, args);
                })
            }
            // 重置-初始化状态
            this.#state_set(this.#state_options.init);
        }, 50);
    }
    // 重新连接 websocket
    // eslint-disable-next-line no-dupe-class-members
    #handle_activate() {
        // websocket 已关闭
        if ([WebSocket.CLOSED, WebSocket.CLOSING].includes(this.readyState)) {
            this.connect();
        }
    }
    // eslint-disable-next-line no-dupe-class-members
    #state_set(state) {
        this.#state = state;

        switch (state) {
            case this.#state_options.init:
                // 重置 客户端 id
                this.#client_id = '';
                this.#client_id_tmp = '';
                break;
            case this.#state_options.initing:

                break;
            case this.#state_options.inited:
                // 正式 客户端 id
                this.#client_id = this.#client_id_tmp;
                break;
        }
    }
    // 发送数据
    // 之后考虑压缩加密
    sendObj(obj) {
        return super.sendObj(obj);
    }
    // 返回客户端 id
    get client_id() {
        return this.#client_id;
    }
}

// 创建 websocket
const ws = new InitWS({
    bind_url: '/websocket/bind_uid',
    uid: Cookie.get('PHPSESSID'),
});

ws.connect();
// 导出 websocket
export default ws;
