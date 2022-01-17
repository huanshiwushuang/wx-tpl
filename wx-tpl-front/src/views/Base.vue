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
    created() {
        const that = this;

        // 确保 onload 触发之后-才允许用户操作-否则在小程序端历史记录会有异常
        this.$toast.loading({
            message: "加载中",
            forbidClick: true,
            duration: 0,
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
                    that.$toast.clear();
                    resolve();
                });
            }),
        ]).then(() => {
            if (window.uni) {
                // 向 uniapp 发送数据
                this.$store.uniapp.mutations.postData({
                    event: "load",
                    title: "同步状态",
                });
            }
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
