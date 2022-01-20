<template>
    <div class="kyjt107e">
        <button @click="$router.push('/test')">阿斯顿</button>
        <div class="h" ref="kymbm93t_ref"></div>
    </div>
</template>

<script>
import helper from "@/utils/helper";

export default {
    name: "Home",
    data() {
        return {
            map: null,
        };
    },
    watch: {
        "$store.uniapp.state.canPostData"(newValue) {
            if (newValue) {
                this.$store.uniapp.mutations.postData({
                    eval: function () {
                        var window = this;
                        var vm = window.vm;
                        var uni = window.uni;

                        uni.showLoading({
                            title: "正在定位",
                        });

                        uni.getLocation({
                            type: "wgs84",
                            success: function (data) {
                                vm.$store.pages.index.index.mutations.postData({
                                    event: "kyl4kfu0_getLocationSuccess",
                                    data,
                                });
                            },
                            fail: function () {
                                vm.$store.pages.index.index.mutations.postData({
                                    event: "kyl79gxd_getLocationFail",
                                });
                            },
                            complete: function () {
                                uni.navigateBack({});
                            },
                        });
                    }.toString(),
                });
            }
        },
    },
    methods: {
        // 初始化 transfer 回调
        initTransferCallback() {
            [
                {
                    event: "kyl4kfu0_getLocationSuccess",
                    callback: this.getLocationSuccess,
                },
                {
                    event: "kyl79gxd_getLocationFail",
                    callback: this.getLocationFail,
                },
                {
                    event: "kyl79jfm_getLocationComplete",
                    callback: this.getLocationComplete,
                },
            ].forEach((v) => {
                this.$root.$once(v.event, v.callback);
            });
        },
        async getLocationSuccess({ data }) {
            // 创建地图
            this.map = new BMapGL.Map(this.$refs.kymbm93t_ref);
            // 坐标转换
            helper.wgs84ToBd09Point(
                [[data.longitude, data.latitude]],
                (points) => {
                    // 初始化地图中心
                    this.map.centerAndZoom(points[0], 18);
                    // 创建标注
                    this.map.addOverlay(new BMapGL.Marker(points[0]));
                }
            );
        },
        getLocationFail() {
            this.$toast.fail(`定位获取失败，你个 SB`);
        },
        getLocationComplete() {
            alert("完成");
        },
    },
    created() {
        this.initTransferCallback();
    },
    mounted() {
        // this.getLocationSuccess({
        //     data: {
        //         longitude: 116.404,
        //         latitude: 39.915,
        //     },
        // });
    },
};
</script>

<style lang="less">
@import (reference) "@/assets/less/index.less";
.kyjt107e {
    height: 100vh;
}
</style>
