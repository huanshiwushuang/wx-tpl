<template>
    <div>
        <!-- 被拦截了, 比如 404 || 要求登录 || 设置页面 -->
        <router-view v-if="$route.meta.intercept"></router-view>
        <div v-else>
            我才是Base
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "Base",
};
</script>

<style lang="less">
@import (reference) "@/assets/less/base.less";
</style>
