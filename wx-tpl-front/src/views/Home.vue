<template>
    <div>
        <!-- Header -->
        <div class="kw0hjnhc pr tc">
            <h1 class="kw0h39r8">句子迷</h1>
            <van-icon name="search" class="fr kw0i22hw cp" />
        </div>
        <van-sticky :offset-top="0">
            <div class="kw2w8g6k">
                <nav>
                    <ul class="kw2wexke_ul">
                        <li
                            v-for="(v, k) in nav"
                            :key="k"
                            class="kw2wkwk3_li"
                            :class="[
                                {
                                    active:
                                        v.href ===
                                        $store.state.views.Home.tabbar_to,
                                },
                            ]"
                            @click="handle_nav_click(v)"
                        >
                            <wx-router-link :href="v.href" replace>
                                {{ v.label }}
                            </wx-router-link>
                        </li>
                    </ul>
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
    transform: translate(0, -50%);
}

.kw2w8g6k {
    .fs32;
    height: 78px;
    line-height: 78px;
    background: #fff;
    filter: drop-shadow(0px 1px 0px black);
}
// reset vant
.van-sticky--fixed {
    .kw2w8g6k {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
}

.kw2wexke_ul {
    .df;
    justify-content: space-around;
}
.kw2wkwk3_li {
    padding: 0 18px;
    &.active {
        box-shadow: 0 -6px 0 0 @c_theme inset;
    }
}
</style>
