<template>
    <div class="df fdc flg">
        <!-- Header -->
        <div class="kw0hjnhc pr tc">
            <h1 class="kw0h39r8">句子迷</h1>
            <van-icon name="search" class="fr kw0i22hw cp" />
        </div>
        <van-sticky :offset-top="0">
            <div class="kw2w8g6k">
                <nav>
                    <div class="kw2wexke_box">
                        <wx-router-link
                            v-for="(v, k) in nav"
                            :key="k"
                            :href="v.href"
                            replace
                        >
                            <div
                                class="kw2wkwk3_item"
                                :class="[
                                    {
                                        active: nav_index === k,
                                    },
                                ]"
                                @click="handle_nav_click(v, k)"
                            >
                                {{ v.label }}
                            </div>
                        </wx-router-link>
                    </div>
                </nav>
            </div>
        </van-sticky>

        <!-- Body -->

        <keep-alive>
            <router-view></router-view>
        </keep-alive>
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
            // 激活的 nav
            this.nav_index = this.nav.findIndex(
                (i) => i.name === this.$route.matched[2].name
            );
            // 同步 url 到匹配的导航
            let item = this.nav.find((v) => {
                return this.$route.matched[2].name === v.name;
            });
            item.href = this.$route.fullPath;
            // 同步 url 到 tabbar
            this.$store.commit("views/Home/tabbar_url", this.$route.fullPath);
        },
        handle_nav_click(v, k) {
            this.nav_index = k;
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
    padding: 25px 0;
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

.kw2w8g6k {
    .fs32;
    height: 78px;
    line-height: 78px;
    background: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.04);
}

.kw2wexke_box {
    .df;
    justify-content: space-around;
}
.kw2wkwk3_item {
    padding: 0 18px;
    &.active {
        box-shadow: 0 -6px 0 0 @c_theme inset;
    }
}
</style>
