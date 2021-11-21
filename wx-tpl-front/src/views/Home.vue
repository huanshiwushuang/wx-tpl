<template>
    <div>
        <!-- Header -->
        <div class="kw0hjnhc pr tc">
            <h1 class="kw0h39r8">句子迷</h1>
            <van-icon name="search" class="fr kw0i22hw cp" />
        </div>
        <!--Nav -->
        <van-tabs
            v-model="nav_index"
            swipeable
            sticky
            class="kw8wvuaw"
            @change="on_tabs_change"
        >
            <van-tab v-for="v in nav" :title="v.label" :key="v.href">
                <!-- Body -->
                <keep-alive>
                    <router-view
                        v-if="v.name === $route.matched[2].name"
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
            this.$store.commit("views/Home/tabbar_url", this.$route.fullPath);
        },
        on_tabs_change(index) {
            // 网址跳转
            let v = this.nav[index];
            this.$router.replace(v.href);
            this.$store.commit("views/Home/tabbar_url", v.href);
        },
    },
    created() {
        this.init();
    },
};
</script>

<style lang="less">
@import (reference) "@/assets/less/index.less";

.kw0h39r8 {
    .fs36;
    margin: 0;
    // padding: 25px 0;
    height: 90px;
    line-height: 90px;
    font-family: cursive;
}

.kw0hjnhc {
    background: #fff;
    border-bottom: 2px solid #f5f5f5;
}

.kw0i22hw {
    .pa;
    .fs36;
    right: 30px;
    top: 50%;
    transform: scale(1.3) translate(0, -30%);
}

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
