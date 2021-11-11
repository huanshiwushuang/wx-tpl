<template>
    <div class="kvkh7nuy_com">
        <!-- 句子列表 -->
        <jzm-card-default
            v-for="(item, index) in cards"
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
        // 卡片
        cards() {
            return this.$v("kvjp1c6c_li").map((item) => {
                return {
                    head: item.v("cid.head.attr_map.src"),
                    name: item.v("cid.name.str"),
                    guanzhu: item.v("cid.guanzhu.str"),
                    pic: item.v("cid.pic.attr_map.src"),

                    content: item.v("cid.content.str"),
                    author: item.v("cid.author.str"),
                    love: Number(item.v("attr_map.data-love")),
                };
            });
        },
    },
    methods: {},
    created() {},
};
</script>

<style lang="less">
@import (reference) "@/assets/less/index.less";

.kvl2074f {
    border-bottom: 20px solid #f5f5f5;
    &:first-child {
        border-top: 20px solid #f5f5f5;
    }
}
</style>
