<template>
    <div id="base">
        <!-- 被拦截了, 比如 404 || 要求登录 -->
        <router-view v-if="$route.meta.intercept"></router-view>
        <template v-else>
            <!-- header -->
            <keep-alive :exclude="$route.meta.exclude || []">
                <router-view name="header"></router-view>
            </keep-alive>

            <!-- body -->
            <keep-alive :exclude="$route.meta.exclude || []">
                <router-view></router-view>
            </keep-alive>

            <!-- footer -->
            <keep-alive :exclude="$route.meta.exclude || []">
                <router-view name="footer"></router-view>
            </keep-alive>
        </template>
    </div>
</template>

<script>
export default {
    name: "Base",
    data() {
        return {};
    },
    created() {
        const that = this;

        // 确保 onload 触发之后-才允许用户操作-否则在小程序端历史记录会有异常
        this.$toast.loading({
            message: "加载中...",
            forbidClick: true,
            duration: 0,
        });
        window.addEventListener("load", function () {
            that.$toast.clear();
        });

    },
};
</script>

<style lang="less">
@import (reference) "@/assets/less/index.less";
#base {
    min-height: 100vh;
}

.kycpnyr4 {
    position: fixed;
    right: 0;
    top: 50%;
}
</style>
