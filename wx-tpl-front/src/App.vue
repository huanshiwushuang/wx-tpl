<template>
    <div id="app">
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
</style>
