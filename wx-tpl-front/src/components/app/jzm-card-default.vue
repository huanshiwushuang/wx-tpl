<template>
    <div class="kvki5240">
        <div class="kvl1c2t4">
            <!-- 头部 -->
            <div class="df jcsb aic">
                <div class="df aic">
                    <!-- 头像 -->
                    <van-image :src="head" lazy-load round class="kvl0avoo">
                        <template v-slot:loading>
                            <div class="kvurdces_loading fs14">
                                <van-loading :color="c_theme" />
                            </div>
                        </template>
                        <template v-slot:error>
                            <div class="kvurf9qz_error">
                                <van-icon name="photo" />
                            </div>
                        </template>
                    </van-image>
                    <span class="ml20">
                        {{ name }}
                    </span>
                </div>

                <!-- 关注 -->
                <van-button
                    plain
                    round
                    size="small"
                    class="kvl0dnb6"
                    @click="$emit('subscribe')"
                >
                    关注
                </van-button>
            </div>
            <!-- 配图 和 内容 -->
            <div class="mt20 tc">
                <van-image :src="pic" lazy-load class="kvl0hpfv">
                    <template v-slot:loading>
                        <div class="kvurdces_loading">
                            <van-loading :color="c_theme" />
                        </div>
                    </template>
                    <template v-slot:error>
                        <div class="kvurf9qz_error">
                            <van-icon name="photo" />
                        </div>
                    </template>
                </van-image>
            </div>
            <!-- 作者 -->
            <div class="kvl1vv1u">
                <div class="kvl1xrv7">
                    {{ content }}
                </div>
                <div class="tr kvl120z0">——&ensp;{{ author }}</div>
            </div>
        </div>
        <!-- 操作 -->
        <div class="tr kvl1cref">
            <!-- 喜欢 -->
            <van-icon
                class="kvl1t4cc"
                class-prefix="icon"
                name="xihuan"
                color="#9c9c9c"
                @click="$emit('love')"
            />
            <span>
                {{ love }}
            </span>
            <!-- 收藏 -->
            <van-icon
                class="kvl1t4cc kvuqtyqk_id"
                class-prefix="icon"
                name="wenjianjia"
                color="#9c9c9c"
                @click="$emit('collect')"
            />
            <!-- 分享 -->
            <van-icon
                class="kvl1t4cc kvuqw3j4_id"
                class-prefix="icon"
                name="fenxiang"
                color="#9c9c9c"
                @click="$emit('share')"
            />
        </div>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    name: "jzm-jingxuan",
    props: {
        // 头像
        head: {
            type: String,
            required: true,
        },
        // 名字
        name: {
            type: String,
            required: true,
        },
        // 配图
        pic: {
            type: String,
            required: true,
        },
        // 内容
        content: {
            type: String,
            required: true,
        },
        // 作者
        author: {
            type: String,
            required: true,
        },
        // 喜欢数量
        love: {
            type: Number,
            required: true,
        },
    },
    mounted() {
        setTimeout(() => {
            // window.document.write(`${devicePixelRatio}<br>`);
        }, 1000);
    },
};
</script>

<style lang="less">
@import (reference) "@/assets/less/index.less";

.kvki5240 {
    background: #fff;
}
.kvl0avoo {
    width: 80px;
    height: 80px;
}
.kvl0hpfv {
    .oh;
    width: 690px;
    height: 380px;
    border-radius: 6px;
}
.kvl1xrv7 {
    line-height: 1.6em;
}
.kvl120z0 {
    line-height: 3em;
    color: #646464;
    opacity: 0.7;
}
.kvl1c2t4 {
    padding: 20px 30px 0;
}
.kvl1cref {
    color: #9a9a9a;
    height: 64px;
    line-height: 64px;
    padding: 0 30px 0;
    border-top: 1px solid #f4f4f4;
}
.kvl1t4cc {
    margin-left: 70px;
}
.kvl0dnb6 {
    min-width: 120px;
    height: 44px;
}
.kvuqtyqk_id,
.kvuqw3j4_id {
    .fs32;
}
.kvurdces_loading,
.kvurf9qz_error {
    .df;
    .aic;
    .jcc;
    .h;
}
</style>