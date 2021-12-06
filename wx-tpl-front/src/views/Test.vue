<template>
    <div>
        测试页面

        <div>
            <h1 @click="$router.back()">
                返回
            </h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "Test",
};
</script>

<style lang="less">
@import (reference) "@/assets/less/index.less";
</style>