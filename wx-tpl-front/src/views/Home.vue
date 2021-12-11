<template>
    <div>
        <!-- NavBar -->
        <jzm-navbar title="句子迷"></jzm-navbar>
        <!--Nav -->
        <van-tabs
            v-model="navIndex"
            swipeable
            sticky
            class="kw8wvuaw"
            @change="onTabsChange"
        >
            <van-tab v-for="v in navs" :title="v.label" :key="v.href">
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
            navs: [
                {
                    name: "HomeNice",
                    label: "精选",
                    href: "/",
                },
                {
                    name: "HomeNewest",
                    label: "最新",
                    href: "/index/newest",
                },
                {
                    name: "HomePopular",
                    label: "热门",
                    href: "/index/popular",
                },
                {
                    name: "HomeRank",
                    label: "排行",
                    href: "/index/rank",
                },
            ],
            navIndex: 0,
        };
    },
    methods: {
        init() {
            // 激活的 nav index
            this.navIndex = this.navs.findIndex((v) => {
                return this.$route.matched[2].name === v.name;
            });

            let currentNav = this.navs[this.navIndex];
            // 同步 url 到匹配的导航
            currentNav.href = this.$route.fullPath;
            // 同步 url 到 tabbar
            this.$store.views.Home.state.currentNav = currentNav;
        },
        onTabsChange(index) {
            // 网址跳转
            let v = this.navs[index];
            this.$router.replace(v.href);

            this.$store.views.Home.state.currentNav = this.navs[index];
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
