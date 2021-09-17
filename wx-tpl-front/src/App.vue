<template>
	<div id="app">
		<router-view> </router-view>
		<!-- 异步组件，比如弹窗 -->
		<div>
			<component
				v-for="(item, index) in coms"
				:key="index"
				:is="item"
				v-on="item.listeners"
				v-bind="item.attrs"
			>
				<component
					v-for="(ite, inde) in item.slots"
					:is="ite"
					:key="`${index}_${inde}`"
					v-on="ite.listeners"
					v-bind="ite.attrs"
				></component>
			</component>
		</div>

		<!-- 临时 div，用于生成并获取 class，应用到 body 上 -->
		<div id="ksh34m2s" :class="bodyClass"></div>

		<!-- 设置面板 -->
		<div class="ktnq0y3h_mock" v-if="'set_app' in $route.query">
			<!-- 切换是否开启 mock 数据 -->
			<el-card>
				<div slot="header">设置</div>
				<div>
					<el-switch
						:value="local.value.ktnr5kx8_use_mock_data"
						@input="handleSwitchMock"
						active-text="开启 Mock 数据"
						inactive-text="关闭 Mock 数据"
					>
					</el-switch>
				</div>
			</el-card>
		</div>
	</div>
</template>

<script>
export default {
	name: "App",
	watch: {
		// 绑定 bodyClass 到 body 上
		bodyClass() {
			this.$nextTick(() => {
				document.body.classList =
					document.querySelector("#ksh34m2s").classList;
			});
		},
	},
	methods: {
		// 切换 Mock 数据是否开启
		handleSwitchMock(is_open) {
			this.local.set({
				ktnr5kx8_use_mock_data: is_open,
			});
		},
	},
};
</script>

<style lang="less">
@import (reference) "@/assets/less/base.less";

.ktnq0y3h_mock {
	.pf;
	right: 0;
	bottom: 0;
	z-index: 100000;
}
</style>
