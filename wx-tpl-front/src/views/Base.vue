<template>
    <div>
        <!-- 被拦截了, 比如 404 || 要求登录 || 设置页面 -->
        <router-view v-if="$route.meta.intercept"></router-view>

        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div>
                <router-view name="header"></router-view>
                <router-view></router-view>
                <router-view name="footer"></router-view>
            </div>
        </van-pull-refresh>
    </div>
</template>

<script>
export default {
    name: "Base",
    data() {
        return {
            isLoading: false,
        }
    },
    methods: {
        onRefresh() {
            console.log('下拉刷新');
            setTimeout(() => {
                this.isLoading = false;
            }, 2000)
        }
    }
};
</script>

<style lang="less">
@import (reference) "@/assets/less/base.less";
</style>
