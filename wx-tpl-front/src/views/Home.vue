<template>
    <div class="home tc">
        <!-- 中英文切换 -->
        <h2>中英文切换</h2>
        <div>
            <van-button type="primary" @click="toggle_lang">切换</van-button>
            {{ $t("kv1s0cif") }}
            <van-pagination
                v-model="currentPage"
                :total-items="24"
                :items-per-page="5"
            />
        </div>
        <!-- 页面切换 -->
        <h2>页面切换</h2>
        <div>
            <wx-router-link href="/index/about" class="kvevouol">
                关于我们
            </wx-router-link>
        </div>
        <!--  -->
        <!-- Field 是基于 Cell 实现的，可以使用 CellGroup 作为容器来提供外边框。 -->
        <van-cell-group>
            <van-field
                v-model="user_name"
                label="文本"
                placeholder="请输入用户名"
            />
        </van-cell-group>

        <div v-html="$v('kvg1aqto.html')()"></div>
        <div>
            <h2>
                js 解码后的数据：
            </h2>
            {{ $str_decode($v("kvg521pw").toString()) }}
        </div>
    </div>
</template>

<script>
import { getLanguage, setLanguage } from "../lang";
import helper from "@/utils/helper";

export default {
    name: "Home",
    data() {
        return {
            currentPage: 1,
        };
    },
    computed: {
        // 同步数据到 store
        ...helper.sync_store("views.A.B.C", ["user_name"]),
    },
    methods: {
        toggle_lang() {
            setLanguage(getLanguage() === "zh_cn" ? "en-us" : "zh-cn");
            location.reload();
        },
    },
    created() {
        console.log(this);
    },
};
</script>

<style lang="less">
@import (reference) "@/assets/less/base.less";
.kvevouol {
    .fwb;
    color: @c_theme;
}
</style>
