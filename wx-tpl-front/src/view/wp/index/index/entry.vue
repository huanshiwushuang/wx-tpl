<template>
    <div id="app" :class="appClass">
        <!-- main -->
        <router-view></router-view>
        <!-- 异步组件，比如弹窗 -->
        <div>
            <component
                v-for="(item, index) in coms"
                :key="index"
                :is="item"
                v-on="item.$listeners"
                v-bind="item.$attrs"
            >
				<component v-for="(ite, inde)  in item.$slots" :is="ite" :key="`${index}_${inde}`" v-on="ite.$listeners" v-bind="ite.$attrs"
				></component>
			</component>
        </div>
    </div>
</template>

<script>
// 入口文件
export default {
    name: "wx_app",
    data() {
        return {
            appClass: [],
        };
    },
    beforeCreate() {
        // 生产环境，删除一些DOM
        if (process.env.NODE_ENV === 'production') {
			var n = document.querySelectorAll(".data,.node_remove");
			for (var i = 0; i < n.length; i++) {
				n[i].parentNode.removeChild(n[i]);
			}
		}
    },
    created() {
        console.log("km33es43_this", this);
    },
};
</script>

<style lang="less">
@import (reference) "@/assets/less/base.less";
</style>
