<template>
    <span>
        <span v-if="!attrs.to" class="kottxxgn_span">
            <slot></slot>
        </span>
        <a
            v-else-if="attrs.to && !/^[/.]/.test(attrs.to) || use_a"
            v-bind="attrs"
            v-on="$listeners"
            :href="attrs.to"
            :to="false"
            class="kottxbbz_a"
        >
            <slot></slot>
        </a>
        <router-link v-else v-bind="attrs" v-on="$listeners" class="kottxbbz_a">
            <slot></slot>
        </router-link>
    </span>
</template>

<script>
export default {
    inheritAttrs: false,
    name: "wx_router_link",
	props: {
		// 是否使用 原生 a 标签
		use_a: {
			type: Boolean,
		}
	},
    computed: {
        klbwesjw_config() {
            return this.ast.klbwesjw_config.json;
        },
        url_whitelist() {
            return JSON.parse(this.klbwesjw_config.url_whitelist);
        },
        attrs() {
            // 给 a 标签添加 nofollow noopener no referrer
            let url = (this.$attrs.to || "").trim();
            let defa = {
                rel: "nofollow noopener noreferrer",
            };
			// 戊戌数据
            if (/wuxuwang\.com/.test(url) || /^\//.test(url)) {
                delete defa.rel;
            }
			// 网址白名单
            if (this.url_whitelist.includes(url)) {
                delete defa.rel;
            }
            return {
                ...defa,
                ...this.$attrs,
            };
        },
    },
};
</script>

<style lang="less">
@import (reference) "@/assets/less/base.less";
</style>
