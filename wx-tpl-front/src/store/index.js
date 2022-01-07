import Vue from 'vue';
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

    let nodeParent = tree;
    // 遍历当前文件 path 表示的每一个节点, 构建一颗 tree
    nodeNameArray.forEach((nodeName, index) => {
        let nodeCurrent = nodeParent._children.find(v => v._nodeName === nodeName);

        // 如果-不存在下一个节点
        if (!nodeCurrent) {
            nodeCurrent = createNode({}, {
                // 节点名
                _nodeName: {
                    enumerable: false,
                    configurable: false,
                    writable: false,
                    value: nodeName,
                },
            })
            nodeParent._children.push(nodeCurrent);
        }
        // 如果是最后一个 node, 为文件
        if (index === nodeNameArray.length - 1) {
            const nodeContent = nodeFiles(nodePath).default;
            Object.assign(nodeCurrent, nodeContent);
        }

        // 指向下一次循环使用的 node
        nodeParent = nodeCurrent;
    })

    return tree;
}, createNode({}, {
    _nodeName: {
        enumerable: false,
        configurable: true,
        writable: false,
        value: 'root',
    }
}));

// 遍历 tree
_.walkTree([res], {
    childrenProp: '_children',
    enter(node, parent) {
        if (parent) {
            parent[node._nodeName] = node;
        }

        // 数据观察
        if (node.state) {
            // 某些助手函数
            Object.defineProperties(node, {
                // 缓存 state 中的初始化数据
                _cache: {
                    enumerable: false,
                    configurable: false,
                    writable: true,
                    value: JSON.parse(JSON.stringify(node.state)),
                },
                // 重置自己
                _reset: {
                    enumerable: false,
                    configurable: false,
                    writable: false,
                    value() {
                        node.state = Vue.observable(JSON.parse(JSON.stringify(node._cache)));
                    }
                },
                // 重置子节点
                _resetChildren: {
                    enumerable: false,
                    configurable: false,
                    writable: false,
                    value() {
                        node._children.forEach(v => {
                            v._reset();
                        })
                    }
                },
                // 重置自己和子节点
                _resetWithChildren: {
                    enumerable: false,
                    configurable: false,
                    writable: false,
                    value() {
                        node._reset();
                        node._resetChildren();
                    }
                },
                // 所有的 state 属性添加重置方法
                ...Object.keys(node.state).reduce((sum, v) => {
                    sum[`_${v}Reset`] = {
                        enumerable: false,
                        configurable: false,
                        writable: false,
                        value() {
                            node.state[v] = node._cache[v];
                        }
                    }
                    return sum;
                }, {}),
                // 所有的 state 属性添加更新缓存的方法
                ...Object.keys(node.state).reduce((sum, v) => {
                    sum[`_${v}Cache`] = {
                        enumerable: false,
                        configurable: false,
                        writable: false,
                        value() {
                            node._cache[v] = node.state[v];
                        }
                    }
                    return sum;
                }, {}),
            })

            node.state = Vue.observable(node.state);
        }

        // 数据依赖
        if (node.getters) {
            const newGetters = {};
            Object.keys(node.getters).forEach((v) => {
                Object.defineProperty(newGetters, [v], {
                    enumerable: false,
                    configurable: false,
                    get: node.getters[v].bind(node)
                })
            });
            node.getters = newGetters;
        }

        // 某些通用的修改数据的方法
        if (node.mutations) {
            node.mutations = Object.keys(node.mutations).reduce((sum, v) => {
                sum[v] = node.mutations[v].bind(node);
                return sum;
            }, {});
        }

        // 异步获取数据的方法
        if (node.actions) {
            node.actions = Object.keys(node.actions).reduce((sum, v) => {
                sum[v] = node.actions[v].bind(node);
                return sum;
            }, {});
        }
    }
})

export default res;