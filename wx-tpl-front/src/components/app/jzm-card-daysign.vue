<template>
    <div class="kwabf0q9_com">
        <!-- 头部 -->
        <div class="df jcsb aic">
            <!-- 左边 -->
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
                <!-- 名字 -->
                <span class="ml20">
                    {{ name }}
                </span>
            </div>
            <!-- 右边: 多久之前 -->
            <div class="kwafdwqz">
                {{ how_ago }}
            </div>
        </div>
        <!-- 日签 -->
        <div class="kwactzqw df mt20">
            <!-- 左边: 日期 -->
            <div class="kwacwc7h_date df fdc aic fls">
                <div class="kwadx6j5">
                    {{ release_time }}
                </div>
                <div class="kwadrawm">句子迷日签</div>
            </div>
            <!-- 中间: 内容 -->
            <div class="flg df aic jcc">
                <div class="kwah6980">
                    {{ content }}
                </div>
            </div>
            <!-- 右边: 关键字 -->
            <div class="kwacwgbc_kw fls">
                <div
                    v-for="(v, k) in words"
                    :key="k"
                    class="kwai60bj df jcsb ma"
                >
                    <span>
                        {{ v.word }}
                    </span>
                    <span class="kwaifiie_py">
                        {{ v.pinyin }}
                    </span>
                </div>
                <!-- 作者说 -->
                <div class="kwaib6dd tr ma fs28">
                    {{ author_say }}
                </div>
            </div>
        </div>
        <!-- 操作 -->
        <div class="tr kvl1cref">
            <!-- 喜欢 -->
            <van-icon
                class="kvl1t4cc kwa2mwpr_id"
                :class="[
                    {
                        is_love,
                    },
                ]"
                :name="is_love ? 'like' : 'like-o'"
                @click="$emit('love')"
            />
            <span>
                {{ love_count }}
            </span>
            <!-- 收藏 -->
            <van-icon
                class="kvl1t4cc kvuqtyqk_id"
                class-prefix="icon"
                name="wenjianjia"
                @click="$emit('collect')"
            />
            <!-- 分享 -->
            <van-icon
                class="kvl1t4cc kvuqw3j4_id"
                class-prefix="icon"
                name="fenxiang"
                @click="$emit('share')"
            />
        </div>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    name: "jz_card_daysign",
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
        // 多久之前
        how_ago: {
            type: String,
            required: true,
        },
        // 发布时间
        release_time: {
            type: String,
            required: true,
        },
        // 内容
        content: {
            type: String,
            required: true,
        },
        // 关键词
        words: {
            type: Array,
            required: true,
        },
        // 作者说
        author_say: {
            type: String,
            required: true,
        },
        // 喜欢数量
        love_count: {
            type: Number,
            required: true,
        },
        // 是否喜欢
        is_love: {
            type: Boolean,
            required: true,
        },
    },
};
</script>

<style lang="less">
@import (reference) "@/assets/less/index.less";
.kwabf0q9_com {
    background: #fff;
    padding: 20px 30px 0;
}
.kwafdwqz {
    .fs24;
    color: #919191;
}
// *************************************************
.kwactzqw {
    border: 2px solid #000;
    background: url("~@/assets/img/kwadgb4s.jpg");
}
.kwacwc7h_date {
    .tc;
    padding: 20px 0;
    width: 66px;
    border-right: 1px solid #313131;
}
.kwacwgbc_kw {
    width: 140px;
    padding: 20px 0;
    border-left: 1px solid #313131;
}
.kwadrawm {
    .tc;
    .fs24;
    border: 1px solid @c_theme;
    margin-top: 50px;
    color: @c_theme;
    padding: 6px;
}
.kwadx6j5,
.kwadrawm {
    width: 1em;
    line-height: 1.2em;
}
.kwah6980 {
    writing-mode: vertical-rl;
    height: 450px;
    line-height: 1.2em;
    letter-spacing: 0.2em;
}
.kwai60bj {
    .fs36;
    width: 80%;
}
.kwaib6dd {
    margin-top: 87px;
    width: 80%;
}
.kwaifiie_py {
    transform: translate(0, 4px);
}
// *************************************************
.kvl1cref {
    color: #9a9a9a;
    height: 64px;
    line-height: 64px;
    padding: 0 30px 0;
}
.kvl1t4cc {
    margin-left: 70px;
    color: #9c9c9c;
}
.kwa2mwpr_id {
    &.is_love {
        color: red;
    }
}
.kvuqtyqk_id,
.kvuqw3j4_id {
    .fs32;
}
</style>