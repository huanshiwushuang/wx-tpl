import { str } from '@/utils/tools';

const initSendData = (sendData = {}) => {
    return {
        ...sendData,
        _from: 'h5',
        _timestamp: Date.now(),
    }
}

export default {
    state: {
        // 发送的数据
        sendData: null,
        // 接收的数据
        receiveData: null,
    },
    getters: {
        // 编码后的数据
        sendDataEncoded() {
            return str.encode(JSON.stringify(this.state.sendData));
        }
    },
    mutations: {
        // 设置 sendData
        postMessage(data) {
            this.state.sendData = {
                ...initSendData(data),
            }
        }
    },
    actions: {
    }
}
