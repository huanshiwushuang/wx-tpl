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
            {{ $v("kuz84lp2.attrMap")() }}
        </div>
        <!-- 国际化测试 -->
        <div>
            {{ $t("kv1s0cif") }}
            <el-button @click="kv1s45ip" type="primary">切换</el-button>
        </div>
        <!-- 测试 wx-router-link -->
        <div>
            <wx-router-link href="/index/about" class="a b c">
                超链接
            </wx-router-link>
        </div>
        <div>
            <wx-router-link href="https://www.baidu.com"> 外站 </wx-router-link>
        </div>
        <div>
            <wx-router-link v-bind="ast.kv201rze.attrMap()" class="a b c">
                测试url编码
            </wx-router-link>
        </div>
    </div>
</template>

<script>
import { getLanguage, setLanguage } from "@/lang";

export default {
    name: "Home",
    methods: {
        kv1s45ip() {
            setLanguage(getLanguage() === "zh-cn" ? "en-us" : "zh-cn");
        },
    },
    created() {
        // console.log(base62x);
    },
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
