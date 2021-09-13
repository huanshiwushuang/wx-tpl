export default class Data {
    // 发送数据的节点
    static node_send(node) {
        return {
            source: null,
            type: null,
            ...node,
        }
    }
    // 接收数据的节点
    static node_receive(node) {
        return {
            dist: null,
            type: null,
            ...node,
        }
    }
}