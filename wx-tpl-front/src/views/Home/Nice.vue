<template>
    <div class="kvkh7nuy_com">
        <!-- 句子列表 -->
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="on_load"
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
            loading: false,
            finished: false,

            // 查询参数
            qs: {
                page: 1,
                pagesize: 10,
            },
        };
    },
    methods: {
        init() {},
        async on_load() {
            let res = await this.$get(this.page.request_url, {
                ...this.qs,
                page: this.qs.page + 1,
            });

debugger
            this.$store.commit("page/cache", {
                ...this.$store.state.page.cache,
                [this.page.request_url]: {
                    ...this.page,
                    json: {
                        ...this.json,
                        list: [...this.json.list, ...res.json.list],
                    },
                },
            });

            // 加载状态结束
            this.loading = false;
            // 页码 +1
            this.qs.page++;
        },
    },
    created() {
        this.init();
    },
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
