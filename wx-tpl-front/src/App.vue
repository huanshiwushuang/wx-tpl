<template>
    <div class="kvxm27pw_com">
        <!-- 内容 -->
        <div id="app" :class="[{ not_mobile_ua: !is_mobile_ua }]">
            <router-view> </router-view>
            <!-- 异步组件，比如弹窗 -->
            <component
                v-for="(item, index) in coms"
                :key="index"
                :is="item"
                v-on="item.listeners"
                v-bind="item.attrs"
            >
                <component
                    v-for="(ite, inde) in item.slots"
                    :is="ite"
                    :key="`${index}_${inde}`"
                    v-on="ite.listeners"
                    v-bind="ite.attrs"
                ></component>
            </component>
        </div>

        <!-- PC 端的手机外壳 -->
        <div v-show="!is_mobile_ua" class="kvxj0euv_phone"></div>

        <!-- 临时 div，用于生成并获取 class，应用到 body 上 -->
        <div id="ksh34m2s" :class="bodyClass" style="display: none"></div>
    </div>
</template>

<script>
export default {
    name: "App",
    watch: {
        // 绑定 bodyClass 到 body 上
        bodyClass() {
            this.$nextTick(() => {
                document.body.classList =
                    document.querySelector("#ksh34m2s").classList;
            });
        },
    },
    created() {
        this.bodyClass.push({
            not_mobile_ua: !this.is_mobile_ua,
        });
    },
};
</script>

<style lang="less">
@import (reference) "@/assets/less/index.less";
// PC 端
body {
    &.not_mobile_ua {
        * {
            max-width: ~"min(calc(750px - 17px), 100%)";
        }

        #app {
            .bsbb;
            padding: ~"20PX 0 24PX 0";
            min-height: 100vh;
            background: #fff;
            // reset tabbar
            .kvjmvqxx_com {
                .van-tabbar--fixed {
                    bottom: ~"24PX";
                }
            }
        }

        .van-tabbar--fixed {
            left: auto;
        }
        #nprogress {
            max-width: none;

            * {
                max-width: none;
            }
        }
    }
    .kvxm27pw_com {
        max-width: none;
    }
    .kvxj0euv_phone {
        .pf;
        .bsbb;
        width: ~"calc(750px)";
        height: 100vh;
        left: 50%;
        top: 0;
        z-index: 2;
        transform: translate(-50%, 0);
        max-width: none;
        pointer-events: none;
        border-style: solid;
        border-width: ~"53PX 50PX 54PX 50PX";
        border-image: ~'url("~@/assets/img/kvvzwjfg.png") 53 50 54 50/53PX 50PX 54PX 50PX/8PX 8PX 6PX 9PX';
        box-shadow: 0 0 0 40px #fff;
        border-radius: 90px;
    }
}
</style>
