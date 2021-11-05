// https://zhuanlan.zhihu.com/p/366664788
module.exports = ({ file }) => {
    const designWidth = file.dirname.includes("node_modules/vant") ? 375 : 750;

    return {
        plugins: {
            "postcss-px-to-viewport": {
                // https://www.codenong.com/js73e70c40cfff/
                viewportWidth: designWidth,
                viewportUnit: 'vmin',
                fontViewportUnit: 'vmin',
            },
        },
    };
};