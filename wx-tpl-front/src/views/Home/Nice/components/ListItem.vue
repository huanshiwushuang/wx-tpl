<template>
    <div>
        <jzm-card-default v-bind="source"> </jzm-card-default>
    </div>
</template>

<script>
export default {
    name: "home_nice_components_listitem",
    props: {
        index: {
            type: Number,
        },
        source: {
            type: Object,
            default: () => {},
        },
    },
};
</script>

<style lang="less">
@import (reference) "@/assets/less/index.less";
</style>
