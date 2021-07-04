import "./init.js";
import Vue from "vue";
import router from "./router";
// vue-toastification
// https://www.npmjs.com/package/vue-toastification#installation
// https://maronato.github.io/vue-toastification/
// import Toast from "vue-toastification";
// import "vue-toastification/dist/index.css";
// elementui
import { Button, Autocomplete, Switch, Table, TableColumn, Input, DatePicker, Popover, Tree, Select, Option, Checkbox, Pagination, Dialog, Dropdown, DropdownMenu, DropdownItem, Carousel, CarouselItem, Tabs, TabPane, Message, Notification, Drawer, Scrollbar, Loading, Badge, Collapse, CollapseItem, Image, Radio, Tooltip, Cascader, Timeline, TimelineItem } from "@/assets/element-ui";
import "@/assets/element-ui/packages/theme-chalk/src/base.scss";
// wx_page_base
// import wxPageBase from "@/components/common/wx-page-base.vue";
// import wxPageHeader from "@/components/common/wx-page-header.vue";
// import wxPageFooter from "@/components/index/wx-page-index-footer.vue";
// import wxComDblistTable from "@/components/dblist/common/wx-com-dblist-table.vue";
// app base less
import "@/assets/less/base.less";
import wxRouterLink from '@/components/base/wx-router-link.vue';
Vue.component('wx-router-link', wxRouterLink);


// Vue.use(Toast, {
//     // You can set your default options here
// });
Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Autocomplete);
Vue.use(Switch);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Input);
Vue.use(DatePicker);
Vue.use(Popover);
Vue.use(Tree);
Vue.use(Select);
Vue.use(Option);
Vue.use(Checkbox);
Vue.use(Pagination);
Vue.use(Loading);
Vue.use(Dialog);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Drawer);
Vue.use(Scrollbar);
Vue.use(Badge);
Vue.use(Collapse);
Vue.use(Radio);
Vue.use(CollapseItem);
Vue.use(Image);
Vue.use(Tooltip);
Vue.use(Cascader);
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;

// Vue.component('wxPageBase', wxPageBase);
// Vue.component('wxPageHeader', wxPageHeader);
// Vue.component('wxPageFooter', wxPageFooter);
// Vue.component('wxComDblistTable', wxComDblistTable);


Vue.component('wxShadowDom', () => import('@/components/base/wx-shadow-dom.vue'));
Vue.component('wxComRichText', () => import('@/components/common/wx-com-rich-text.vue'));
Vue.component('wxComOpenvip', () => import('@/components/common/wx-com-openvip.vue'));

export default {
	newVue({ entry }) {
		return new Promise(resolve => {
			let createApp = () => {
				let ap = new Vue({
					router,
					render: (h) => h(entry),
					beforeCreate() {
						Vue.prototype.$app = this;
						// 执行一次，附加全局变量
						if (process.env.NODE_ENV === "development") {
							window.app = this;
						} else {
							window.kir1d2d7 = this;
						}
					},
					created () {
					},
					mounted() {
						// 动态附加-鼠标手势
						// (async () => {
						// 	let { default: smartGesture } = await import("gh-smart-gesture");
						// 	Vue.prototype.$gesture = new smartGesture({
						// 		timeDelay: 0,
						// 		activeColor: '',
						// 		onSwipe: list => {
						// 			this.$bus.$emit('kjpu7umi_swipe', list);
						// 		},
						// 		onGesture: (rst, points) => {
						// 			this.$bus.$emit('kjpu9grt_gesture', [rst, points]);
						// 		}
						// 	});
						// })()
					}
				}).$mount('#app');
				return ap;
			}
			// mock
			({
				development: () => {
					// if (mixinData.url.params.has('nomock')) {
						resolve(createApp());
					// } else {
					// 	import('./mock').then(() => {
					// 		resolve(createApp());
					// 	});
					// }
				},
				production: () => {
					// if (mixinData.url.params.has('mock')) {
						import('./mock').then(() => {
							resolve(createApp());
						});
					// } else {
					// 	resolve(createApp());
					// }
				}
			})[process.env.NODE_ENV]();
		});
	}
}
