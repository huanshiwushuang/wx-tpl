// import Vue from 'vue';
import { _ } from '../utils/tools';

// 读取当前文件夹内所有 js 文件
const nodeFiles = require.context('.', true, /.js$/);

// 排除入口 index.js 文件
const nodePaths = nodeFiles.keys().filter(nodePath => {
    return !new RegExp('\\./index.js', 'i').test(nodePath);
})

// 处理 node
const createNode = (node, properties = {}) => {
    Object.defineProperties(node, {
        _children: {
            enumerable: false,
            configurable: false,
            writable: false,
            value: [],
        },
        ...properties,
    })
    return node;
}

const res = nodePaths.reduce((tree, nodePath) => {
    // 文件路径解析
    const nodeNameArray = nodePath.replace(/^\.\//, '').replace(/\.\w+$/, '').split('/');

    let nodeCurrent = tree;
    // 遍历当前文件 path 表示的每一个节点
    nodeNameArray.forEach((nodeName, index) => {
        let nodeNext = nodeCurrent[nodeName];

        // 如果-不存在下一个节点
        if (!nodeNext) {
            nodeNext = createNode({}, {
                // 节点名
                _nodeName: {
                    enumerable: false,
                    configurable: false,
                    writable: false,
                    value: nodeName,
                },
            })

            nodeCurrent[nodeName] = nodeNext;
        }

        // 如果是最后一个 node, 为文件
        if (index === nodeNameArray.length - 1) {
            const nodeContent = nodeFiles(nodePath).default;

            Object.assign(nodeNext, nodeContent);
        }

        // 指向下一次循环使用的 node
        nodeCurrent = nodeNext;
    })

    return tree;
}, createNode({}, {
    _nodeName: {
        enumerable: false,
        configurable: false,
        writable: false,
        value: 'root',
    }
}));

_.walkTree([res], {
    childrenProp: '_children',
    enter(node) {
        console.log(node);
    }
})

export default res;