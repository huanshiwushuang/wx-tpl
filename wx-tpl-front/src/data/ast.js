// html_ast
import { html } from '../utils/html_ast'

let ast = html.to_ast([...document.querySelectorAll('.data')].map(i => {
    return i.outerHTML
}).join(''));

export function set_ast(new_ast) {
    Object.keys(ast).forEach(key => {
        delete ast[key];
    })
    Object.keys(new_ast).forEach(key => {
        ast[key] = new_ast[key];
    })
}
export default ast;