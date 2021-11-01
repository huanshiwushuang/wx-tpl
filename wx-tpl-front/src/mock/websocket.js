export default [
    {
        rurl: '/websocket/bind_uid',
        mock_template: ['bind success'],
    },
    {
        rurl: '/list',
        mock_template: [],
        // 用 mock_template ，渲染 render_template
        render_template: 'index/index'
    }
]