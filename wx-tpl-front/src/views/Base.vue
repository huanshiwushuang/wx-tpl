<template>
    <div id="base">
        <!-- 被拦截了, 比如 404 || 要求登录 || 设置页面 -->
        <router-view v-if="$route.meta.intercept"></router-view>

        <div>
            <router-view name="header"></router-view>
            <router-view></router-view>
            <router-view name="footer"></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "Base",
    data() {
        return {};
    },
    methods: {},
};
</script>

<style lang="less">
@import (reference) "@/assets/less/index.less";
</style>
