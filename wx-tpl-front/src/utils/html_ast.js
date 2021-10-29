// html 解析库
import { parse, walk, SyntaxKind } from "html5parser";
import JSON5 from 'json5';

export const html = {
    to_ast(html_str) {
        console.time("to_ast");

        const waitRemove = [];

        let ast = parse(html_str);

        // 不再被动构建 attributeMap，改为自己 walk 时，主动构建
        // let ast = parse(html_str, {
        // 	setAttributeMap: true,
        // })
        walk(ast, {
            enter(node, parent) {
                // 记录 parent，方便删除无用的子节点
                node.parent = parent;
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
                            node.html = function () {
                                return node.value;
                            };
                            node.toString = function () {
                                return node.value;
                            }
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

                            // 重写所有 attrMap
                            node.attrMap = (key) => {
                                if (key) {
                                    return node.attr.find(i => i.key === key)?.val || '';
                                }

                                return node.attr.reduce((sum, item) => {
                                    sum[item.key] = item.val;
                                    return sum;
                                }, {});
                            };

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

                            // 有 id 属性的 node，提到根节点来
                            let id = node.attrMap('id');

                            if (id) {
                                ast[id] = node;
                            }
                            // 有 class 属性的 node，提到根节点来
                            if (node.attrMap('class')) {
                                let arr = node.attrMap('class').trim().replace(/[\s\t\r\n]+/, ' ')
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
                            let cid = node.attrMap('cid')
                            if (cid) {
                                if (parent.cid) {
                                    parent.cid[cid] = node;
                                } else {
                                    parent.cid = {
                                        [cid]: node
                                    };
                                }
                            }

                            // 根据 type 确定是否需要格式化为 JSON5
                            switch (node.attrMap('type').replace(/[\s\t]/g, '')) {
                                case 'text/json5':
                                    try {
                                        node.json = JSON5.parse(node.body[0]?.value?.trim() || '{}');
                                    } catch (e) {
                                        console.error(`json5 parse error: ${node.html()}`)
                                    }
                                    break;
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

        console.timeEnd("to_ast");
        return ast;
    },
    get_text(str) {
        let div = document.createElement('div');
        div.innerHTML = str;
        return div.innerText.trim();
    },
}
export const ast = {
    to_html(ast) {
        if (!Array.isArray(ast)) {
            throw new Error('please input array');
        }
        console.time('to_html');

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

        console.timeEnd('to_html');

        return res;
    }
}