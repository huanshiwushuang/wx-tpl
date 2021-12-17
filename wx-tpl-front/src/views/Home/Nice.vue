<template>
    <div class="kvkh7nuy_com">
        <div>
            {{ $store.uniapp.state.receiveData }}
        </div>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
                v-model="loading"
                :finished="finished"
                :error.sync="error"
                offset="0"
                error-text="请求失败，点击重新加载"
                finished-text="没有更多了"
                @load="onLoadNext"
            >
                <jzm-card-default
                    v-for="(v, k) in json.list"
                    v-bind="v"
                    :key="k"
                    class="kw6i8nt3"
                    @click.native="onClickNice"
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
            qs: {},

            hash: "",
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
        async onLoadNext() {
            try {
                let res = await this.$get(this.$route.path, {
                    ...this.qs,
                    page: this.qs.page - 0 + 1,
                });

                // 替换数据
                this.json.list.push(...res.json.list);
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
        async onRefresh() {
            try {
                let res = await this.$get(
                    `${this.$route.path}${location.search}`
                );
                // 合并数据
                Object.assign(this.json, res.json);

                // 重新初始化
                this.init();
                // 重置 finished
                this.finished = res.json.finished;
            } finally {
                this.refreshing = false;
            }
        },
        onClickNice() {
            this.$router.push({
                path: "/test",
            });
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
