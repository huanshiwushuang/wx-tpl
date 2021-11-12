<template>
    <a v-bind="attrs" v-on="listeners">
        <slot></slot>
    </a>
</template>

<script>
export default {
    name: "wx_router_link",
    props: {},
    computed: {
        attrs() {
            // 内部根据 host 判断 is
            let is = "router-link";
            let a = document.createElement("a");
            a.href = this.$attrs.href;
            if (location.host !== a.host) {
                is = "a";
            }

            // 合并外部判断 is
            let options = {
                is,
                ...this.$attrs,
            };

            // 区分 is
            switch (options.is) {
                case "router-link":
                    options.to = this.$attrs.href;
                    delete options.href;
                    break;
                case "a":
                    break;
                default:
                    delete options.href;
            }

            return options;
        },
        listeners() {
            return {
                ...this.$listeners,
            };
        },
    },
};
</script>

<style lang="less">
@import (reference) "@/assets/less/index.less";
</style>
