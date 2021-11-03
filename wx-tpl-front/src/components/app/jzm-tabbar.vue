<template>
    <div class="kvjmvqxx_com">
        <van-tabbar v-model="tabbar_index">
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="search">日签</van-tabbar-item>
            <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
            <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabbar_index: 0,
        };
    },
};
</script>

<style lang="less">
</style>