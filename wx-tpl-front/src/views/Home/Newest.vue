<template>
    <div class="kvkh7nuy_com">
        <!-- 句子列表 -->
        <van-pull-refresh v-model="refreshing" @refresh="on_refresh">
            <van-list
                v-model="loading"
                :finished="finished"
                :error.sync="error"
                offset="0"
                error-text="请求失败，点击重新加载"
                finished-text="没有更多了"
                @load="on_load_next"
            >
                <jzm-card-default
                    v-for="(v, k) in json.list"
                    v-bind="v"
                    :key="k"
                    class="kw6i8nt3"
                >
                </jzm-card-default>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
export default {
    name: "home_newest",
    data() {
        return {
            loading: false,
            finished: false,
            refreshing: false,
            error: false,

            // 查询参数
            qs: {},
        };
    },
    methods: {
        // 初始化
        init() {
            this.loading = false;
            this.finished = this.json.finished;
            this.refreshing = false;
            this.error = false;

            Object.assign(
                this.qs,
                {
                    page: 1,
                    pagesize: 10,
                },
                this.$route.query
            );
        },
        async on_load_next() {
            try {
                let res = await this.$get(this.$route.path, {
                    ...this.qs,
                    page: this.qs.page - 0 + 1,
                });

                // 替换数据
                this.json.list = [
                    ...this.json.list.slice(-2),
                    ...res.json.list,
                ];
                // 同步到 store
                this.$store.commit("page/cache", {
                    ...this.$store.state.page.cache,
                    [this.$route.path]: this.page,
                });
                // 页码 +1
                this.qs.page++;
                // 判断是否有更多
                this.finished = res.json.finished;

                window.scrollTo(0,0);
            } catch {
                this.error = true;
            }
            // 加载状态结束
            this.loading = false;
        },
        async on_refresh() {
            try {
                let res = await this.$get(
                    `${this.$route.path}${location.search}`
                );
                // 合并数据
                Object.assign(this.json, res.json);

                // 同步到 store
                this.$store.commit("page/cache", {
                    ...this.$store.state.page.cache,
                    [this.$route.path]: this.page,
                });

                // 重新初始化
                this.init();
                // 重置 finished
                this.finished = res.json.finished;
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
.kw6i8nt3 {
    border-bottom: 20px solid #f5f5f5;
    &:first-child {
        border-top: 20px solid #f5f5f5;
    }
}
</style>
