<template>
    <div class="kvjmvqxx_com">
        <van-tabbar v-model="tabbar_index" :placeholder="true" route>
            <van-tabbar-item
                icon="wap-home-o"
                :to="$store.state.views.Home.tabbar_to"
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

            <div class="kvl4qag2 tc">
                <van-icon class-prefix="icon" name="yongyan" color="#fff" />
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
    data() {
        return {
            tabbar_index: 0,
        };
    },
};
</script>

<style lang="less">
@import (reference) "@/assets/less/index.less";

.kvl4qag2 {
    width: 80px;
    height: 80px;
    line-height: 80px;
    background: @c_theme;
    border-radius: 100%;
    align-self: center;
    font-size: 44px;
}
</style>