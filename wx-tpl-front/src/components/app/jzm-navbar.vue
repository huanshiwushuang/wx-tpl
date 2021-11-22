<template>
    <div class="kwa79j7s_com">
        <van-nav-bar v-bind="attrs">
            <template #right>
                <van-icon name="search" class="kwa74xo4_icon" />
            </template>
        </van-nav-bar>
    </div>
</template>

<script>
export default {
    name: "jzm-navbar",
    computed: {
        attrs() {
            return this.$attrs;
        },
    },
};
</script>

<style lang="less">
@import (reference) "@/assets/less/index.less";
.kwa79j7s_com {
    .van-nav-bar__title {
        .fwb;
        .fs36;
        color: #000;
    }
    .kwa74xo4_icon {
        font-size: 42px;
        color: #000;
    }
}
</style>