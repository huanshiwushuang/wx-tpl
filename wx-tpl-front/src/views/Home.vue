<template>
    <div class="kyjt107e">
        <button @click="$router.push('/test')">
            阿斯顿
        </button>
        <div class="h" ref="kyjt0jve_ref"></div>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {};
    },
    methods: {},
    created() {},
    mounted() {
        const map = new window.BMapGL.Map(this.$refs.kyjt0jve_ref);
        const point = new window.BMapGL.Point(116.404, 39.915);
        map.centerAndZoom(point, 15); 
    },
};
</script>

<style lang="less">
@import (reference) "@/assets/less/index.less";
.kyjt107e {
    height: 100vh;
}
</style>
