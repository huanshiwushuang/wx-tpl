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
};
</script>

<style lang="less">
@import (reference) "@/assets/less/index.less";
#base {
    min-height: 100vh;
}
</style>
