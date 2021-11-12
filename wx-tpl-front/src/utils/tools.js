// 字符串压缩库
import LZString from "lz-string";
// html 解析库
import { parse, walk, SyntaxKind } from "html5parser";

// 仿 loadsh 数据处理库
export const _ = {
    // 遍历-树
    walk_tree(tree, options) {
        if (!Array.isArray(tree)) {
            throw new Error('please input array')
        }
        const visit = function (node, parent, index, options) {
            // 进入此节点
            options.enter && options.enter(node, parent, index)

            // 访问子节点的入口属性
            options.childrenProp = options.childrenProp || 'children'

            if (Array.isArray(node[options.childrenProp])) {
                for (let i = 0; i < node[options.childrenProp].length; i++) {
                    visit(node[options.childrenProp][i], node, i, options)
                }
            }

            // 离开此节点
            options.leave && options.leave(node, parent, index)
        }

        for (let i = 0; i < tree.length; i++) {
            visit(tree[i], null, i, options)
        }
    },
    // 通过字符串参数，访问深层次对象数据
    v(data, deep_key) {
        const arr = deep_key.split('.');

        try {
            let res = data;
            for (let i of arr) {
                res = res[i];
            }
            if ([undefined, null].includes(res)) {
                console.error(`_.v 访问返回 ${res}`)
                console.error(`访问数据`, data);
                console.error(`访问路径`, deep_key);
            }
            return res;
        } catch (e) {
            console.error(`访问数据: `, data);
            console.error(`访问路径: `, deep_key);
            console.error(`错误: `, e);
        }
    },
    // https://www.runoob.com/w3cnote/js-random.html
    // 生成指定范围随机数
    random_num(min, max) {
        var range = max - min;
        var random = Math.random();
        var num = min + Math.round(random * (range + 1));
        return num;
    }
}

// html 处理
export const html = {
    to_ast(html_str) {
        // 记录遍历中, 待删除的无用节点
        const waitRemove = [];
        // 解析 html
        let ast = parse(html_str);

        // 不再被动构建 attributeMap，改为自己 walk 时，主动构建
        // let ast = parse(html_str, {
        // 	setAttributeMap: true,
        // })
        walk(ast, {
            enter(node, parent) {

                Object.defineProperties(node, {
                    // 记录 parent，方便删除无用的子节点
                    parent: {
                        enumerable: false,
                        configurable: true,
                        get() {
                            return parent;
                        }
                    },
                    // 添加 v 方法，用于访问子属性
                    v: {
                        enumerable: false,
                        configurable: true,
                        writable: true,
                        value(deep_key) {
                            return _.v(node, deep_key);
                        }
                    }
                })

                // 删除无用属性
                delete node.attributeMap;

                switch (node.type) {
                    // 文本节点
                    case SyntaxKind.Text:
                        var trimVal = node.value.trim();
                        // 空文本节点
                        if (trimVal === "") {
                            waitRemove.push(node);
                        }
                        // 非空文本节点
                        else {
                            node.value = trimVal;
                            node.html = node.toString = function () {
                                return node.value;
                            };
                            // 定义 getter 属性
                            Object.defineProperties(node, {
                                str: {
                                    enumerable: false,
                                    configurable: true,
                                    get() {
                                        return node.toString();
                                    }
                                }
                            })
                        }
                        break;
                    // 标签节点
                    case SyntaxKind.Tag:
                        // 注释节点
                        if (["!--"].includes(node.name)) {
                            waitRemove.push(node);
                        }
                        else {
                            // 重写所有 attr
                            node.attr = node.attributes.map(item => {
                                return {
                                    key: item.name.value,
                                    // 对所有 value 进行解码，统一处理 & 被转义的情况
                                    // 此处三元运算，是为了防止，value 无值
                                    val: item.value ? html.get_text(item.value.value) : item.value,
                                    // 单双引号，便于之后 ast.to_html
                                    quote: item.value ? item.value.quote : null,
                                }
                            })
                            delete node.attributes;

                            // 定义 getter 属性
                            Object.defineProperties(node, {
                                attr_map: {
                                    enumerable: false,
                                    configurable: true,
                                    get() {
                                        return node.attr.reduce((sum, item) => {
                                            sum[item.key] = item.val;
                                            return sum;
                                        }, {});
                                    }
                                }
                            })

                            // 附加 html 属性
                            if (node.close) {
                                node.html = function () {
                                    return html_str.slice(node.open.start, node.close.end);
                                };
                            } else {
                                node.html = function () {
                                    return html_str.slice(node.open.start, node.open.end);
                                };
                            }

                            // 重写 node 的 toString
                            node.toString = function () {
                                return html.get_text(this.html());
                            }
                            Object.defineProperties(node, {
                                str: {
                                    enumerable: false,
                                    configurable: true,
                                    get() {
                                        return node.toString();
                                    }
                                }
                            })

                            // 有 id 属性的 node，提到根节点来
                            let id = node.attr_map.id;

                            if (id) {
                                ast[id] = node;
                            }
                            // 有 class 属性的 node，提到根节点来
                            if (node.attr_map.class) {
                                let arr = node.attr_map.class.trim().replace(/[\s\t\r\n]+/g, ' ')
                                    .split(' ');

                                arr.forEach(item => {
                                    if (Array.isArray(ast[item])) {
                                        ast[item].push(node);
                                    } else {
                                        ast[item] = [node];
                                    }
                                })
                            }
                            // 有cid，则设置属性到 body 的同级
                            let cid = node.attr_map['data-cid']
                            if (cid) {
                                if (parent.cid) {
                                    parent.cid[cid] = node;
                                } else {
                                    parent.cid = {
                                        [cid]: node
                                    };
                                }
                            }
                        }
                        break;
                }
            }
        });

        // 遍历删除无用的 node
        waitRemove.forEach(item => {
            if (item.parent) {
                item.parent.body.splice(item.parent.body.indexOf(item), 1)
            } else {
                ast.splice(ast.indexOf(item), 1);
            }
        });

        return ast;
    },
    get_text(str) {
        let div = document.createElement('div');
        div.innerHTML = str;
        return div.innerText.trim();
    },
}

// 处理 ast
export const ast = {
    to_html(ast) {
        if (!Array.isArray(ast)) {
            throw new Error('please input array');
        }

        let res = '';
        walk(ast, {
            // 属性节点拼装
            // 需要区分 enter 和 leave
            // 确保 子节点已 拼装完毕
            // 才在 leave 中拼装 close 属性
            enter(node) {
                switch (node.type) {
                    case SyntaxKind.Text:
                        res += node.value.trim();
                        break;
                    case SyntaxKind.Tag: {
                        let attr = node.attr.map(i => {
                            return `${i.key}=${i.quote}${i.val}${i.quote}`;
                        }).join(' ');

                        res += `<${node.rawName} ${attr}>`
                        break;
                    }
                }
            },
            leave(node) {
                switch (node.type) {
                    case SyntaxKind.Tag:
                        // 如果元素节点有结束标签
                        if (node.close) {
                            res += node.close.value;
                        }
                        break;
                }
            }
        })

        return res;
    }
}

// string 处理
export const str = {
    // 编码
    encode(val) {
        const src = ['-', "\\+"];
        const dist = ["__", "_"];

        let res = LZString.compressToEncodedURIComponent(val);
        src.forEach((item, index) => {
            res = res.replaceAll(new RegExp(item, 'g'), dist[index]);
        })

        return res;
    },
    // 解码
    decode(val) {
        const src = ["__", "_"];
        const dist = ['-', "+"];

        let res = val;
        src.forEach((item, index) => {
            res = res.replace(new RegExp(item, 'g'), dist[index]);
        })

        res = LZString.decompressFromEncodedURIComponent(res);

        return res;
    }
}

// json 处理
export const json = {
    // 针对一些可能 单双引号 混用的不合法的json，处理，使用场景很少
    normalize(str) {
        return str
            .replace(/'/g, '"').replace(/[\s\r\n]*([\][{},"])[\s\r\n]*/g, '$1').replace(/,([}\]])/g, '$1').replace(/([{,])([^:{"]+?):/g, '$1"$2":');
    }
}

// 环境信息检测
export const env = {
    is_ua_mobile() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return true;
        }
        return false;
    },
    is_mobile() {
        if (/Android|Linux|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform)) {
            return true;
        }
        return false;
    }
}