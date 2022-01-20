<template>
    <div class="kyjt107e">
        <button @click="getUserProfile">获取用户信息</button>
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
            // 真实定位
            dataPosition: null,
        };
    },
    computed: {
        // 计算定位
        computedPosition() {
            // 真实位置 || 北京位置
            return (
                this.dataPosition || {
                    longitude: 116.404,
                    latitude: 39.915,
                }
            );
        },
    },
    watch: {
        "$store.uniapp.state.canPostData"(newValue) {
            if (newValue) {
                this.getLocation();
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
                    event: "kymmu4hc_getUserProfileSuccess",
                    callback: this.getUserProfileSuccess,
                },
                {
                    event: "kymmuxrn_getUserProfileFail",
                    callback: this.getUserProfileFail,
                },
            ].forEach((v) => {
                this.$root.$on(v.event, v.callback);
            });
        },
        // 获取用户位置信息
        getLocation() {
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
        },
        async getLocationSuccess({ data }) {
            // 保存真实定位
            this.dataPosition = data;

            // 创建地图
            this.map = new BMapGL.Map(this.$refs.kymbm93t_ref);
            // 坐标转换
            helper.wgs84ToBd09Point(
                [[data.longitude, data.latitude]],
                (points) => {
                    // 初始化地图中心
                    this.map.centerAndZoom(points[0], 11);
                    // 创建标注
                    this.map.addOverlay(new BMapGL.Marker(points[0]));
                }
            );
        },
        getLocationFail() {
            setTimeout(() => {
                this.$dialog
                    .alert({
                        message: "定位获取失败，重新定位",
                    })
                    .then(() => {
                        this.getLocation();
                    });
            }, 100);
        },
        // 获取用户基础信息
        getUserProfile() {
            this.$store.uniapp.mutations.postData({
                eval: function () {
                    var window = this;
                    var vm = window.vm;
                    var uni = window.uni;

                    uni.showModal({
                        content: "应用将获取您的个人信息",
                        showCancel: false,
                        success: function (res) {
                            if (res.confirm) {
                                uni.getUserProfile({
                                    desc: "仅用于本应用功能实现",
                                    success: function (data) {
                                        console.log(data);

                                        vm.$store.pages.index.index.mutations.postData(
                                            {
                                                event: "kymmu4hc_getUserProfileSuccess",
                                                data,
                                            }
                                        );
                                    },
                                    fail: function () {
                                        vm.$store.pages.index.index.mutations.postData(
                                            {
                                                event: "kymmuxrn_getUserProfileFail",
                                            }
                                        );
                                    },
                                });
                            }
                        },
                        complete: function () {
                            uni.navigateBack({});
                        },
                    });
                }.toString(),
            });
        },
        getUserProfileSuccess() {
            this.$toast.success("获取用户信息成功");
        },
        getUserProfileFail() {
            this.$toast.fail("获取用户信息失败");
        },
    },
    created() {
        this.initTransferCallback();
    },
};
</script>

<style lang="less">
@import (reference) "@/assets/less/index.less";
.kyjt107e {
    height: 100vh;
}
</style>
