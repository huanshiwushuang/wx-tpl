<template>
    <div>
        我是测试
        {{ asd }}
    </div>
</template>
<script>
module.exports = {
    name: "test",
    data() {
        return {
            asd: 123,
        };
    },
};
</script>

<style lang="less">
@import "test.less";
</style>