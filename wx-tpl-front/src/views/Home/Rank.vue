<template>
    <div>
        <div class="kw4q8hp0">每周三 12:00 更新</div>

        <van-pull-refresh v-model="refreshing" @refresh="on_refresh">
            <van-list
                v-model="loading"
                :finished="finished"
                :error.sync="error"
                error-text="请求失败，点击重新加载"
                finished-text="没有更多了"
                @load="on_load"
            >
                <div v-for="v in json.list" :key="v.id" class="df">
                    <div>
                        {{ v.rank }}
                    </div>
                    <div>
                        <div class="df">
                            <div>
                                {{ v.love }}
                            </div>
                            <div>
                                {{ v.is_love }}
                            </div>
                        </div>
                        <div>
                            {{ v.content }}
                        </div>
                        <div>
                            {{ v.author }}
                        </div>
                    </div>
                </div>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
export default {
    name: "home_rank",
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
        async on_load() {
            try {
                let res = await this.$get(this.$route.path, {
                    ...this.qs,
                    page: this.qs.page - 0 + 1,
                });

                // 追加数据
                this.json.list.push(...res.json.list);
                // 同步到 store
                this.$store.commit("page/cache", {
                    ...this.$store.state.page.cache,
                    [this.$route.path]: this.page,
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
};
</script>

<style lang="less">
@import (reference) "@/assets/less/index.less";

.kw4q8hp0 {
    .fs24;
    height: 63px;
    line-height: 63px;
    background: #f5f5f5;
    padding-left: 30px;
}
</style>
