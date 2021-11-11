<template>
    <div>
        <!-- 被拦截了, 比如 404 || 要求登录 || 设置页面 -->
        <router-view v-if="$route.meta.intercept"></router-view>

        <div>
            <router-view name="header"></router-view>
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <router-view></router-view>
            </van-pull-refresh>
            <router-view name="footer"></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "Base",
    data() {
        return {
            isLoading: false,
        };
    },
    methods: {
        onRefresh() {
            console.log("下拉刷新");
            setTimeout(() => {
                this.isLoading = false;
            }, 1000);
        },
    },
};
</script>

<style lang="less">
@import (reference) "@/assets/less/base.less";
</style>
