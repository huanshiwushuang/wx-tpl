<template>
    <div>
        <!-- NavBar -->
        <jzm-navbar title="句子迷"></jzm-navbar>
        <!--Nav -->
        <van-tabs
            v-model="nav_index"
            swipeable
            sticky
            class="kw8wvuaw"
            @change="onTabsChange"
        >
            <van-tab v-for="v in nav" :title="v.label" :key="v.href">
                <!-- Body -->
                <keep-alive>
                    <router-view
                        v-if="
                            $route.matched[2] &&
                            v.name === $route.matched[2].name
                        "
                    ></router-view>
                </keep-alive>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            nav: [
                {
                    name: "home_nice",
                    label: "精选",
                    href: "/",
                },
                {
                    name: "home_newest",
                    label: "最新",
                    href: "/index/newest",
                },
                {
                    name: "home_popular",
                    label: "热门",
                    href: "/index/popular",
                },
                {
                    name: "home_rank",
                    label: "排行",
                    href: "/index/rank",
                },
            ],
            nav_index: 0,
        };
    },
    methods: {
        init() {
            // 激活的 nav index
            this.nav_index = this.nav.findIndex((v) => {
                return this.$route.matched[2].name === v.name;
            });
            // 激活的 nav item
            let item = this.nav[this.nav_index];
            // 同步 url 到匹配的导航
            item.href = this.$route.fullPath;
            // 同步 url 到 tabbar
            this.$store.views.Home.mutations.tabbarUrl(this.$route.fullPath);
        },
        onTabsChange(index) {
            // 网址跳转
            let v = this.nav[index];
            this.$router.replace(v.href);
            this.$store.views.Home.mutations.tabbarUrl(v.href);
        },
    },
    created() {
        this.init();
    },
};
</script>

<style lang="less">
@import (reference) "@/assets/less/index.less";

.kw8wvuaw {
    // reset vant
    .van-tab {
        .fs32;
    }
    .van-tabs__wrap {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.04);
        height: 78px;
        line-height: 78px;
    }
    .van-tabs__nav {
        padding: 0;
    }
    .van-tabs__line {
        bottom: 0;
        padding: 0 18px;
        border-radius: 0;
    }
}
</style>
