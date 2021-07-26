<template>
    <div id="app" :class="appClass">
		<router-view>
		</router-view>
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
    </div>
</template>

<script>
export default {
    name: "App",
};
</script>

<style lang="less">
</style>
