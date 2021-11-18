<template>
    <div class="kvkh7nuy_com">
        <!-- 句子列表 -->
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
            <van-cell v-for="(item, index) in json.list" :key="index">
                <jzm-card-default v-bind="item" class="kvl2074f">
                </jzm-card-default>
            </van-cell>
        </van-list>
    </div>
</template>

<script>
export default {
    name: "home_nice",
    data() {
        return {
            loading: true,
            finished: false,
        };
    },
    computed: {},
    methods: {
        onLoad() {
            setTimeout(() => {
                // 加载状态结束
                this.loading = false;

                // 数据全部加载完成
                if (this.list.length >= 40) {
                    this.finished = true;
                }
            }, 1000);
        },
    },
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
