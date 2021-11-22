<template>
    <div class="kvkh7nuy_com">
        <div class="kvmd2n2j">
            <!-- 背景图片 -->
            <div
                class="pa w h kwa9acm2"
                :style="{
                    background: `url(${json.pic}) center center no-repeat`,
                    'background-size': 'cover',
                }"
            ></div>
            <!-- 内容 -->
            <div class="pa w h">
                <!-- NavBar -->
                <jzm-navbar title="日签" class="kwa7hvk0"></jzm-navbar>
                <!-- 句子迷日签 -->
                <div class="kwa8al4v">句子迷日签</div>
                <!-- 讨论人数 -->
                <div class="kwa8c74f">
                    <van-icon name="comment-o" class="kwa8f8bc" />
                    <span class="fs24"> {{ json.discuss_count }}人讨论 </span>
                </div>
            </div>
        </div>
        <van-pull-refresh v-model="refreshing" @refresh="on_refresh">
            <!-- 每日一句，人生即时词典 -->
            <div class="kwab9dm1 tc">每日一句，人生即时词典</div>
            <van-list
                v-model="loading"
                :finished="finished"
                :error.sync="error"
                offset="0"
                error-text="请求失败，点击重新加载"
                finished-text="没有更多了"
                @load="on_load_next"
            >
                <!-- 列表 -->
                <jzm-card-daysign
                    v-for="v in json.list"
                    v-bind="v"
                    :key="v.id"
                    class="kwae4frh"
                ></jzm-card-daysign>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
export default {
    name: "daysign",
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
    computed: {},
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
    created() {
        this.init();
    },
};
</script>

<style lang="less">
@import (reference) "@/assets/less/index.less";
.kvmd2n2j {
    .pr;
    height: 400px;
    color: rgba(255, 255, 255, 0.9);
}

.kwa7hvk0 {
    // reset vant
    .van-nav-bar {
        background: transparent;
    }
    .van-nav-bar__title {
        filter: drop-shadow(0px 0px 2px black);
    }
    .van-nav-bar__title,
    .kwa74xo4_icon {
        color: rgba(255, 255, 255, 0.9);
    }
    .van-hairline--bottom {
        &:after {
            .dn;
        }
    }
}

.kwa8al4v {
    .pa;
    left: 30px;
    top: 50%;
    transform: translate(0, -50%);
    filter: drop-shadow(0px 0px 2px black);
}
.kwa8c74f {
    .pa;
    right: 30px;
    bottom: 30px;
    filter: drop-shadow(0px 0px 2px black);
}
.kwa8f8bc {
    transform: translate(0, 4px);
}
.kwab9dm1 {
    height: 64px;
    line-height: 64px;
    color: #626262;
}

.kwae4frh {
    border-bottom: 20px solid #f5f5f5;
    &:first-child {
        border-top: 20px solid #f5f5f5;
    }
}
</style>
