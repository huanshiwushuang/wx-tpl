<template>
    <div class="kvkh7nuy_com">
        <!-- 句子列表 -->
        <van-pull-refresh v-model="refreshing" @refresh="on_refresh">
            <van-list
                v-model="loading"
                :finished="finished"
                :error.sync="error"
                error-text="请求失败，点击重新加载"
                finished-text="没有更多了"
                @load="on_load"
            >
                <jzm-card-default
                    v-for="(item, index) in json.list"
                    :key="index"
                    v-bind="item"
                    class="kvl2074f"
                >
                </jzm-card-default>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
export default {
    name: "home_nice",
    data() {
        return {
            loading: false,
            finished: false,
            refreshing: false,
            error: false,

            // 查询参数
            qs: {
                page: 1,
                pagesize: 10,
            },
        };
    },
    methods: {
        init() {
            Object.assign(this.qs, this.$route.query);
        },
        async on_load() {
            try {
                let res = await this.$get(location.pathname, {
                    ...this.qs,
                    page: this.qs.page - 0 + 1,
                });

                // 追加数据
                this.json.list.push(...res.json.list);
                // 同步到 store
                this.$store.commit("page/cache", {
                    ...this.$store.state.page.cache,
                    [location.pathname]: this.page,
                });
                // 页码 +1
                this.qs.page++;
                // 判断是否有更多
                this.finished = res.json.finished;
            } catch {
                this.error = true;
            }
            // 加载状态结束
            this.loading = false;
        },
        async on_refresh() {
            try {
                let res = await this.$get(
                    `${location.pathname}${location.search}`
                );
                // 合并页面数据
                Object.assign(this.json, res.json);

                // 同步到 store
                this.$store.commit("page/cache", {
                    ...this.$store.state.page.cache,
                    [location.pathname]: this.page,
                });
            } finally {
                this.refreshing = false;
            }
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
