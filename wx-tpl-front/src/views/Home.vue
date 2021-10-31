<template>
    <div class="home tc">
        <!-- 中英文切换 -->
        <h2>中英文切换</h2>
        <div>
            <van-button type="primary" @click="toggleLang">切换</van-button>
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
            <wx-router-link href="/index/about"
                class="kvevouol"
            > 关于我们 </wx-router-link>
        </div>
    </div>
</template>

<script>
import { getLanguage, setLanguage } from "../lang";

export default {
    name: "Home",
    data() {
        return {
            currentPage: 1,
        };
    },
    methods: {
        toggleLang() {
            setLanguage(getLanguage() === "zh_cn" ? "en-us" : "zh-cn");
            location.reload();
        },
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
