<template>
    <div class="home">
        <a href="https://www.wuxuwang.com" target="_blank">
            <img alt="Vue logo" src="@/assets/img/krt3th48.jpg" />
        </a>
        <ul class="kseosphd_ul">
            <li>
                <a href="https://www.wuxuwang.com" target="_blank">
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
                <router-link to="/index/about"> 关于我们 </router-link>
            </li>
            <li>
                <a href="/admin">
                    http-vue-loader 实现的浏览器端解析 .vue 单文件
                    <br />
                    无须 webpack 编译，建议用于后台管理项目
                </a>
            </li>
        </ul>
        <!-- 测试 PHP 编码中文 query string -->
        <div v-html="ast.kuy6kzby.html()"></div>
        <!-- 测试 attrMap -->
        <div>
            {{ ast.kuz84lp2.attrMap() }}
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
};
</script>

<style lang="less">
.kseosphd_ul {
    display: inline-block;
    li {
        padding: 10px 0;
    }
}
</style>
