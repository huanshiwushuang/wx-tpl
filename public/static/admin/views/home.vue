<template>
    <div class="home">
        <a
            href="https://www.wuxuwang.com"
            target="_blank"
        >
            <img
                alt="Vue logo"
                src="/static/admin/assets/img/krt3th48.jpg"
            />
        </a>

        <ul class="kseoxuv4_ul">
            <li>
                /admin 下的页面由 http-vue-loader 实现，浏览器端直接加载解析 .vue 单文件<br>
                可打开控制台查看加载的文件
            </li>
            <li>
                <a
                    href="https://www.wuxuwang.com"
                    target="_blank"
                >
                    打开官网
                </a>
            </li>
            <li>
                <a
                    href="https://github.com/huanshiwushuang/wx-tpl"
                    target="_blank"
                >
                    github 地址
                </a>
            </li>
            <li>
                <router-link to="/index/about">
                    关于我们
                    <b>【点击查看效果】</b>
                </router-link>
            </li>
            <li>
                <a href="/">
                    前往网站根路径，查看 webpack 打包加载的页面
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
module.exports = {
    name: "Home",
    async created() {
        let res = await import(
            "/static/admin/lib/module_httpVueLoader/config.js"
        );

        debugger;
    },
};
</script>

<style lang="less">
.kseoxuv4_ul {
    display: inline-block;
    li {
        padding: 10px 0;
    }
}
</style>
