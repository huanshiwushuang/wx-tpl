<template>
    <div class="kw3gy252_com">
        <div class="kw3haws5_box">
            <!-- 卡片 -->
            <template v-for="(v, k) in show_list">
                <!-- 动画 -->
                <transition
                    name="van-fade"
                    :key="k"
                    @afterLeave="on_after_leave"
                >
                    <div
                        v-if="v._v_if"
                        :style="v._style"
                        class="kw3hzwom_card df fdc"
                    >
                        <van-image :src="v.pic" class="kw3ikkah">
                            <template v-slot:loading>
                                <div class="kvurdces_loading">
                                    <van-loading :color="c_theme" />
                                </div>
                            </template>
                            <template v-slot:error>
                                <div class="kvurf9qz_error kw350amm_error">
                                    <van-icon name="photo" />
                                </div>
                            </template>
                        </van-image>
                        <div class="kwbjxzv7 flg df jcc aic">
                            <div>
                                <!-- 内容 -->
                                <div>
                                    {{ v.content }}
                                </div>
                                <!-- 作者 -->
                                <div class="tr">
                                    ————
                                    {{ v.name }}
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </template>
        </div>
        <div class="tc kw3jjoux">
            <van-button
                type="default"
                class="kw3k0r9b_icon"
                @click="on_click_close"
            >
                <van-icon name="cross" />
            </van-button>
            <van-button
                type="default"
                class="kw3k0r9b_icon"
                @click="on_click_love"
            >
                <van-icon name="like" class="kw3k759k_id" />
            </van-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "home_popular",
    data() {
        return {
            is_transition_end: true,
        };
    },
    computed: {
        show_list() {
            return this.json.list.slice(0, 3).map((v, index) => {
                return Object.assign(v, {
                    _style: {
                        transform: `translate(-50%, ${
                            index * 0.02898550724637683 * 100
                        }%) scale(${1 - index * 0.02898550724637683})`,
                        "z-index": `${5 - index}`,
                    },
                });
            });
        },
    },
    methods: {
        // 关闭
        on_click_close() {
            if (this.json.list[0]) {
                this.json.list[0]._v_if = false;
                // 动画开始
                this.is_transition_end = false;
            }
        },
        // 喜欢
        on_click_love() {
            if (this.json.list[0]) {
                this.json.list[0]._v_if = false;
                // 动画开始
                this.is_transition_end = false;
            }
        },
        // 动画结束回调
        on_after_leave() {
            this.json.list.shift();
            // 动画结束
            this.is_transition_end = true;
        },
    },
    created() {
        this.json.list = this.json.list.map((v) => {
            return {
                ...v,
                // 私有额外的属性
                _v_if: true,
            };
        });
    },
    activated() {
        this.body_class.push("kw9b4hlh");
    },
    deactivated() {
        this.body_class.splice(this.body_class.indexOf("kw9b4hlh"), 1);
    },
};
</script>

<style lang="less">
@import (reference) "@/assets/less/index.less";
.kw3gy252_com {
    padding: 30px;
}
.kw3haws5_box {
    .pr;
    height: 865px;
}
.kw3hzwom_card {
    .pa;
    .w;
    .h;
    .oh;
    left: 50%;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 1px 17px 0 rgba(0, 0, 0, 0.19);
    transition: all 0.3s;
}
.kw3ikkah {
    width: 690px;
    height: 450px;
}
// ******************
.kvurdces_loading,
.kvurf9qz_error {
    .df;
    .aic;
    .jcc;
    .h;
}
.kw350amm_error {
    font-size: 150px;
}
// ******************
.kw3jjoux {
    .df;
    justify-content: space-around;
    margin-top: 70px;
}
.kw3k0r9b_icon {
    .tc;
    border: 1px solid #949494;
    border-radius: 100%;
    width: 100px;
    height: 100px;
    line-height: 100px;
    color: #949494;
    font-size: 52px;
    background: transparent;
}
.kw3k759k_id {
    .pr;
    top: 4px;
    left: 1px;
    color: red;
}

.kw9b4hlh {
    background: #f4f4f4;
}

.kwbjxzv7 {
    padding: 20px;
    line-height: 2em;
}
</style>
