<template>
    <div class="kvkh7nuy_com">
        <!-- 句子列表 -->
        <jzm-card-default
            v-for="(item, index) in json.list"
            :key="index"
            v-bind="item"
            class="kvl2074f"
        >
        </jzm-card-default>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {};
    },
    computed: {
    },
    methods: {},
    created() {},
};
</script>

<style lang="less">
@import (reference) "@/assets/less/base.less";

.kvl2074f {
    border-bottom: 20px solid #f5f5f5;
    &:first-child {
        border-top: 20px solid #f5f5f5;
    }
}
</style>
