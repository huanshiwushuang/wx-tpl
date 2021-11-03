// https://zhuanlan.zhihu.com/p/366664788
module.exports = ({ file }) => {
    const designWidth = file.dirname.includes("node_modules/vant") ? 375 : 750;

    return {
        plugins: {
            "postcss-px-to-viewport": {
                viewportWidth: designWidth,
            },
        },
    };
};