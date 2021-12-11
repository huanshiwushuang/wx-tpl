<template>
    <div class="kvjmvqxx_com">
        <van-tabbar v-model="tabbar_index" :placeholder="true">
            <van-tabbar-item
                icon="wap-home-o"
                :to="$store.views.Home.state.currentNav.href"
                :replace="true"
            >
                首页
            </van-tabbar-item>

            <van-tabbar-item
                icon-prefix="icon"
                icon="biji"
                to="/daysign"
                :replace="true"
            >
                日签
            </van-tabbar-item>

            <div class="kw3416h9">
                <div class="kvl4qag2 tc">
                    <van-icon class-prefix="icon" name="yongyan" color="#fff" />
                </div>
            </div>

            <van-tabbar-item
                icon-prefix="icon"
                icon="fenlei"
                to="/type"
                :replace="true"
            >
                分类
            </van-tabbar-item>

            <van-tabbar-item
                icon-prefix="icon"
                icon="wode"
                to="/my"
                :replace="true"
            >
                我的
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name: "jzm_tab_bar",
    data() {
        return {
            tabbar_index: 0,
        };
    },
    methods: {
        init() {
            // 匹配路由，设置激活的 index
            this.tabbar_index = ["home", "daysign", "type", "my"].findIndex(
                (v) => {
                    return v === this.$route.matched[1].name;
                }
            );
        },
    },
    created() {
        this.init();
    },
};
</script>

<style lang="less">
@import (reference) "@/assets/less/index.less";

.kvl4qag2 {
    width: 80px;
    height: 80px;
    line-height: 80px;
    background: @c-theme;
    border-radius: 100%;
    align-self: center;
    font-size: 44px;
}
.kw3416h9 {
    .df;
    .aic;
    .jcc;
    flex: 1;
}
</style>