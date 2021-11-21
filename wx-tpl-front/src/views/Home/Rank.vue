<template>
    <div>
        <van-pull-refresh v-model="refreshing" @refresh="on_refresh">
            <div class="kw4q8hp0">每周三 12:00 更新</div>

            <van-list
                v-model="loading"
                :finished="finished"
                :error.sync="error"
                offset="0"
                error-text="请求失败，点击重新加载"
                finished-text="没有更多了"
                @load="on_load"
            >
                <div
                    v-for="v in json.list"
                    :key="v.id"
                    class="df kw9bbfh1"
                    :class="[`rank_${v.rank}`]"
                >
                    <div>
                        <!-- 徽章 -->
                        <div class="pr">
                            <i class="icon icon-huizhang kw9c6p5k_icon"> </i>
                            <div class="pa kw9c43zc">
                                {{ v.rank }}
                            </div>
                        </div>
                    </div>
                    <div class="kw9bv0fn">
                        <div class="df jcsb aic mb16">
                            <div class="kw9dxfxj_love">
                                {{ v.love_count }}人喜欢
                            </div>
                            <div class="kw9dyalr_is_love df aic">
                                <i class="icon icon-xihuan"></i>
                                <div class="ml6">喜欢</div>
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

                // 替换数据
                this.json.list = [
                    ...this.json.list.slice(-1),
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

                window.scrollTo(0, 0);
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
.kw9bbfh1 {
    padding: 30px 30px 17px 30px;
    + .kw9bbfh1 {
        border-top: 20px solid #f5f5f5;
    }
    // 名次
    &.rank_1 {
        .kw9c6p5k_icon,
        .kw9dxfxj_love {
            color: #ff515a;
        }
    }
    &.rank_2 {
        .kw9c6p5k_icon,
        .kw9dxfxj_love {
            color: #fe9017;
        }
    }
    &.rank_3 {
        .kw9c6p5k_icon,
        .kw9dxfxj_love {
            color: #f6c800;
        }
    }
}
.kw9bv0fn {
    margin-left: 26px;
}
.kw9c6p5k_icon {
    font-size: 90px;
    color: #ccc;
}
.kw9c43zc {
    .fs24;
    left: 50%;
    bottom: 13px;
    color: #fff;
    transform: translate(-50%, 0px);
}

.kw9dyalr_is_love {
    .fs24;
    border: 1px solid #9a9a9a;
    padding: 8px 12px;
    color: #9a9a9a;
    border-radius: 10px;
}
</style>
