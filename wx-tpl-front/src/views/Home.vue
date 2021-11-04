<template>
    <div class="kvkh7nuy_com">
        <jzm-card-default
            v-for="(item, index) in cards"
            :key="index"
            v-bind="item"
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
        // 卡片
        cards() {
            return this.$v("kvjp1c6c").map((item) => {
                return {
                    head: this.$v("cid.head.attrMap().src", item),
                    name: this.$v("cid.name.toString()", item),
                    pic: this.$v("cid.pic.attrMap().src", item),

                    content: this.$v("cid.content.toString()", item),
                    author: this.$v("cid.author.toString()", item) + "",
                    love: this.$v("attrMap().data-love", item) + "",
                };
            });
        },
    },
    methods: {},
    created() {
    },
};
</script>

<style lang="less">
@import (reference) "@/assets/less/base.less";
</style>
