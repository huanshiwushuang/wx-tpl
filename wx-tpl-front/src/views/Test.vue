<template>
    <div>
        测试页面

        <div>
            <h1 @click="$router.back()">返回</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "Test",

    created() {
        this.$store.uniapp.mutations.postData({
            eval: function () {
                uni.showToast({
                    title: '哈哈',
                    success: function () {
                        
                    },
                })
                setTimeout(() => {
                    uni.navigateBack({});
                }, 1000)
            }.toString(),
        });
    },
};
</script>

<style lang="less">
@import (reference) "@/assets/less/index.less";
</style>