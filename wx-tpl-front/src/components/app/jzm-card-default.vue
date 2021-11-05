<template>
    <div class="kvki5240">
        <div class="kvl1c2t4">
            <!-- 头部 -->
            <div class="df jcsb aic">
                <div class="df aic">
                    <img :src="head" class="kvl0avoo" />
                    <span class="ml20">
                        {{ name }}
                    </span>
                </div>

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
                <img :src="pic" class="kvl0hpfv" />
            </div>
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
                class="kvl1t4cc"
                class-prefix="icon"
                name="wenjianjia"
                color="#9c9c9c"
                @click="$emit('collect')"
            />
            <!-- 分享 -->
            <van-icon
                class="kvl1t4cc"
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
};
</script>

<style lang="less">
@import (reference) "@/assets/less/base.less";

.kvki5240 {
    background: #fff;
}
.kvl0avoo {
    width: 50px;
    height: 50px;
    border-radius: 100%;
}
.kvl0hpfv {
    max-width: ~"min(690px, 100%)";
    max-height: 380px;
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
</style>