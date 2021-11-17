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
                                        active: new RegExp(
                                            `^${v.href}/?$`,
                                            'i'
                                        ).test(
                                            $store.state.views.Home.tabbar_to
                                        ),
                                    },
                                ]"
                                @click="handle_nav_click(v)"
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
                    label: "精选",
                    href: "/",
                },
                {
                    label: "最新",
                    href: "/index/newest",
                },
                {
                    label: "热门",
                    href: "/index/popular",
                },
                {
                    label: "排行",
                    href: "/index/rank",
                },
            ],
        };
    },
    methods: {
        handle_nav_click(nav_active) {
            this.$store.commit("views/Home/tabbar_to", nav_active.href);
        },
    },
    created() {
        this.$store.commit("views/Home/tabbar_to", this.$route.path);
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
