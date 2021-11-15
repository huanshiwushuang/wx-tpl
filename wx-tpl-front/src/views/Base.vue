<template>
    <div id="base">
        <!-- 被拦截了, 比如 404 || 要求登录 -->
        <router-view v-if="$route.meta.intercept"></router-view>
        <template v-else>
            <!-- header -->
            <router-view
                v-if="$route.meta.not_keep_alive"
                name="header"
            ></router-view>
            <keep-alive v-else>
                <router-view name="header"></router-view>
            </keep-alive>

            <!-- body -->
            <router-view v-if="$route.meta.not_keep_alive"></router-view>
            <keep-alive v-else>
                <router-view></router-view>
            </keep-alive>

            <!-- footer -->
            <router-view
                v-if="$route.meta.not_keep_alive"
                name="footer"
            ></router-view>
            <keep-alive v-else>
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
    methods: {},
};
</script>

<style lang="less">
@import (reference) "@/assets/less/index.less";
</style>
