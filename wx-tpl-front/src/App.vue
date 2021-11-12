<template>
    <div
        id="app"
        :class="[
            {
                not_ua_mobile: !is_ua_mobile,
            },
        ]"
    >
        <router-view> </router-view>
        <!-- 异步组件，比如弹窗 -->
        <div>
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
};
</script>

<style lang="less">
@import (reference) "@/assets/less/index.less";
#app {
    &.not_ua_mobile {
        border: 30px solid transparent;
        border-image: ~'url("~@/assets/img/kvvzwjfg.png") 30/30 stretch';
    }
}
</style>
