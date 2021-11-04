<template>
    <div class="kvki5240">
        <div class="df jcsb">
            <div>
                <img :src="head" />
                <span>
                    {{ name }}
                </span>
            </div>

            <van-button :color="c_theme" plain>单色按钮</van-button>
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
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="less">
.kvki5240 {
    padding: 20px 30px 0;
    background: #fff;
}
</style>