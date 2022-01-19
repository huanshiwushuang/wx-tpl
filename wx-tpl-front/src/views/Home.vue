<template>
    <div class="kyjt107e">
        <button @click="$router.push('/test')">阿斯顿</button>
        <div class="h" id="container"></div>
    </div>
</template>

<script>
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

                        uni.getLocation({
                            type: "wgs84",
                            success: function (data) {
                                uni.navigateBack({});

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
                                // vm.$store.pages.index.index.mutations.postData({
                                //     event: "kyl79jfm_getLocationComplete",
                                // });
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
        getLocationSuccess({ data }) {
            alert(JSON.stringify(data));
        },
        getLocationFail() {
            // this.$toast.fail(`定位获取失败`);
            alert("失败");
        },
        getLocationComplete() {
            alert("完成");
        },
    },
    created() {
        this.initTransferCallback();
    },
    mounted() {
        requirejs(["amap"], function (AMapLoader) {
            // 防止与高德地图的 define 函数冲突
            const _define = window.define;
            window.define = undefined;

            // 初始化地图
            AMapLoader.load({
                key: "a5bd8925749b18a59ac2fab361ae0fa5",
                version: "2.0",
                plugins: ["AMap.ToolBar", "AMap.Driving"],
                AMapUI: {
                    version: "1.1",
                    plugins: [],
                },
                Loca: {
                    version: "2.0",
                },
            })
                .then((AMap) => {
                    this.map = new AMap.Map("container", {
                        viewMode: "3D",
                        zoom: 5,
                        zooms: [2, 22],
                        center: [116.397428, 39.90923],
                    });
                })
                .catch((e) => {
                    console.log(e);
                });

            window.define = _define;
        });
    },
};
</script>

<style lang="less">
@import (reference) "@/assets/less/index.less";
.kyjt107e {
    height: 100vh;
}
</style>
