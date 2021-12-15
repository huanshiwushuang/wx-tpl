// 进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
// 路由
import router from './index';
// request
import request, { axios_options } from '../request';
// 语言包
import { languageStatus } from '@/lang';
// 配置
import config from '../config';
// ast
import mixinData from '../data/mixinData';
// store
import store from '../store';
// VueRouter
import VueRouter from 'vue-router';
// tools
import { html } from '../utils/tools';

// ****************************************************
// 配置进度条
NProgress.configure({ showSpinner: false });
// 路由模式
const options = {
	// ast: 前端路由-请求页面
	// refresh：后端路由-刷新页面
	mode: config.router_mode || 'ast',
};
// ****************************************************
// 是否新的路由
let isNewRoute = false;
let page = null;
let _to, _from;
// 开始 hook
function hook() {
	router.beforeEach(async (to, from, next) => {
		// ****************************************************
		_to = to;
		_from = from;
		page = null;
		NProgress.done();
		store.router.state.to = to;
		store.router.state.from = from;
		store.page.state.isRouteing = true;
		store.history.state.lastState = store.history.state.currentState;
		// ****************************************************
		switch (options.mode) {
			case 'ast': {
				// 记录页面滚动位置
				// 放上面-同步记录-防止被 await 影响到
				store.page.state.savedPosition = {
					...store.page.state.savedPosition,
					[_from.path]: {
						x: window.scrollX,
						y: window.scrollY,
					}
				};
			}
				break;
		}
		// ****************************************************
		// 等待语言包加载完毕
		const languageLoad = languageStatus.waitLoaded();
		await languageLoad;
		// ****************************************************
		// 判断 options 的 mode
		switch (options.mode) {
			// 后端路由-refresh
			case 'refresh':
				// 如果不是第一次进入页面
				if (_from !== VueRouter.START_LOCATION) {
					// 如果只是改变了 hash ，则前端路由
					if ((_from.fullPath.replace(_from.hash, '') !== _to.fullPath.replace(_to.hash, ''))) {
						location = _to.fullPath;
						return;
					}
				}
				break;
		}
		// ****************************************************
		// 如果是第一次进入页面 && axios baseURL 是当前域名
		let a = document.createElement('a');
		a.href = axios_options.baseURL;
		if (
			_from === VueRouter.START_LOCATION &&
			new URL(a.href).host === location.host
		) {
			let ast = html.toAST(document.documentElement.outerHTML);
			try {
				page = JSON.parse(ast.page.str);

				// 数据检查
				if (config.is_check) {
					let { default: consoleCheck } = await import('../console/check');

					consoleCheck({
						pathname: _to.path,
						check_data: page.json,
					});
				}
			} catch (e) {
				console.warn(`首屏 page 数据解析失败`);
			}
		}
		// 如果没有数据
		// 则从 缓存 or 接口获取
		if (!page) {
			switch (options.mode) {
				// 尝试提取 cache_data
				case 'ast':
					{
						let cache_data = store.page.state.cache[_to.path];
						if (cache_data) {
							page = cache_data;
							console.log(`提取缓存---${_to.path} ---`, cache_data);
						}
					}
					break;
			}
			// 请求接口数据
			if (!page) {
				NProgress.start();

				page = await request.get(_to.fullPath);
			}
		}

		next();
	});
	router.afterEach(() => {
		mixinData.page = page;
		mixinData.json = mixinData.page.json;
		// 存储-当前 state
		store.history.state.currentState = history.state;

		// 计算进入页面的 action
		if (store.history.state.lastState && !isNewRoute) {
			const lastKey = store.history.state.lastState.key;
			const currentKey = store.history.state.currentState.key;
			// 后退
			if (parseFloat(currentKey) < parseFloat(lastKey)) {
				store.page.state.action = 'back';
			}
			// 前进
			else {
				store.page.state.action = 'forward';
			}
		}

		switch (options.mode) {
			case 'ast':
				// ****************************************************
				// 缓存 page 数据
				store.page.state.cache = {
					...store.page.state.cache,
					[_to.path]: page,
				}

				// 不是第一次进入页面
				if (_from !== VueRouter.START_LOCATION) {
					// 更新-TKD
					if (page.t) {
						document.title = page.t;
					}
					if (page.k) {
						document.querySelector('#k').setAttribute('content', page.k);
					}
					if (page.d) {
						document.querySelector('#d').setAttribute('content', page.d);
					}
				}
				// ****************************************************
				// 维护历史栈
				// switch (store.page.state.action) {
				// 	case 'replace':
				// 		store.history.state.stack = [
				// 			...store.history.state.stack.slice(0, -1),
				// 			{
				// 				to: _to,
				// 				from: _from,
				// 			}
				// 		]
				// 		break;
				// 	case 'back':
				// 		store.history.state.stack = store.history.state.stack.slice(0, -1);
				// 		store.history.state.pointer--;
				// 		break;
				// 	case 'forward':
				// 	case 'push':
				// 	default:
				// 		store.history.state.stack = [
				// 			...store.history.state.stack,
				// 			{
				// 				to: _to,
				// 				from: _from,
				// 			}
				// 		];
				// 		store.history.state.pointer++;
				// }
				// ****************************************************
				// 维护页面 和 数据缓存
				_to.meta.exclude = [];
				switch (store.page.state.action) {
					case 'back':
						{
							// 确认需要排除的组件
							_to.meta.exclude = Object.values(_from.matched[1].components).map(i => {
								if (!i.name) {
									console.error(`此组件未配置 name, 无法在 back 时清除缓存`, i);
								}
								return i.name;
							});
							if ([...new Set(_to.meta.exclude)].length !== _to.meta.exclude.length) {
								console.error(`组件名重复`, _to.meta.exclude);
							}
							const newPageCache = Object.keys(store.page.state.cache).filter(key => {
								return key !== `${_from.path}`;
							}).reduce((sum, key) => {
								sum[key] = store.page.state.cache[key];
								return sum;
							}, {});

							// 确认需要清除的 page 缓存
							store.page.state.cache = newPageCache;
						}
						break;
				}
				break;

		}

		NProgress.done();
		isNewRoute = false;
		// 标识-结束路由
		store.page.state.isRouteing = false;
	})
	router.onError(() => {
		// 导航故障，结束加载
		NProgress.done();
		// 导航故障，保持 to url 不变
		history.replaceState({}, '', `${router.options.base ?? ''}${_to.path}`);
	});
}

// ****************************************************
// 重写方法, 获取当前路由 action
const _replace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function () {
	store.page.state.action = 'replace';
	isNewRoute = true;

	return _replace.apply(this, arguments).catch(err => {
		NProgress.done();

		switch (err.type) {
			// Navigation cancelled
			case 8:
				return;
			// NavigationDuplicated
			case 16:
				return;
		}
		console.error(err);
	});
};

const _push = VueRouter.prototype.push;
VueRouter.prototype.push = function () {
	store.page.state.action = 'push';
	isNewRoute = true;

	return _push.apply(this, arguments).catch(err => {
		NProgress.done();

		switch (err.type) {
			// Navigation cancelled
			case 8:
				return;
			// NavigationDuplicated
			case 16:
				return;
		}
		console.error(err);
	});
};

export default hook
