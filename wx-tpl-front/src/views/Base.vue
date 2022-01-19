<template>
    <div id="base">
        <!-- 被拦截了, 比如 404 || 要求登录 -->
        <router-view v-if="$route.meta.intercept"></router-view>
        <template v-else>
            <!-- header -->
            <keep-alive :exclude="$route.meta.exclude || []">
                <router-view name="header"></router-view>
            </keep-alive>

            <!-- body -->
            <keep-alive :exclude="$route.meta.exclude || []">
                <router-view></router-view>
            </keep-alive>

            <!-- footer -->
            <keep-alive :exclude="$route.meta.exclude || []">
                <router-view name="footer"></router-view>
            </keep-alive>
        </template>
    </div>
</template>

<script>
export default {
    name: "Base",
    data() {
        return {};
    },
    watch: {
        "$store.uniapp.state.receiveData"() {
            // switch (newValue.event) {
            // }
        },
    },
    created() {
        this.$toast.loading({
            message: "加载中",
            forbidClick: true,
        });

        Promise.all([
            new Promise((resolve, reject) => {
                // 如果是小程序
                if (/miniProgram/i.test(navigator.userAgent)) {
                    // 如果是微信小程序
                    if (/micromessenger/i.test(navigator.userAgent)) {
                        // 导入微信依赖库
                        requirejs(["jweixin"], function (wx) {
                            window.wx = wx;
                            // 导入 uniapp 依赖库
                            requirejs(["uniWebview"], function (uni) {
                                window.uni = uni;
                                // 可以进行 uniapp 通信了
                                document.addEventListener(
                                    "UniAppJSBridgeReady",
                                    function () {
                                        resolve();
                                    }
                                );
                            });
                        });
                    } else {
                        reject(`没有匹配的小程序`);
                    }
                } else {
                    resolve();
                }
            }),
            new Promise((resolve) => {
                window.addEventListener("load", function () {
                    resolve();
                });
            }),
        ]).then(() => {
            this.$toast.clear();
            // 可以通信了-与 uniapp
            this.$store.uniapp.state.canPostData = true;
            // if (window.uni) {
            //     // 向 uniapp 发送数据
            //     this.$store.uniapp.mutations.postData({
            //         // 只能用 ES5 语法-函数的 this 和底层对象都是 uniapp 的 globalThis
            //         // uni 和 vm 是 globalThis 的属性
            //         eval: function () {
            //             uni.showLoading({
            //                 mask: true,
            //                 title: "同步数据",
            //             });

            //             setTimeout(function () {
            //                 uni.navigateBack({});
            //                 uni.hideLoading();
            //             }, 1000);
            //         }.toString(),
            //     });
            // }
        });
    },
};
</script>

<style lang="less">
@import (reference) "@/assets/less/index.less";
#base {
    min-height: 100vh;
}
</style>
