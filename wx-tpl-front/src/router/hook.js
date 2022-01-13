// 进度条
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';
// 路由
import router from './index';
// request
import request, { axiosOptions } from '../request';
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
// Axios
import Axios from 'axios';
// ****************************************************
// 配置进度条
NProgress.configure({ showSpinner: false });
// 路由模式
const options = {
	// ast: 前端路由-请求页面
	// refresh：后端路由-刷新页面
	mode: config.routerMode || 'ast',
};
// ****************************************************
let isNewRoute = false;
let page = null;
let lastState = null;
let currentState = null;
let _to, _from;
// ****************************************************
// 开始 hook
function hook() {
	router.beforeEach(async (to, from, next) => {
		// 加载语言包
		const langLoadWait = languageStatus.waitLoaded();
		// ****************************************************
		// 如果-后端路由
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
		// 数据保存
		// ****************************************************
		NProgress.done();
		_to = to;
		_from = from;
		page = null;
		store.router.state.to = to;
		store.router.state.from = from;
		lastState = currentState;
		// ****************************************************
		// 记录-页面滚动位置
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
		// 取消已有的请求
		if (store.page.state.cancelTokenSource) {
			store.page.state.cancelTokenSource.cancel(`new page`);
		}
		// 尝试-首屏-从源码中获取数据
		let a = document.createElement('a');
		a.href = axiosOptions.baseURL;
		if (
			_from === VueRouter.START_LOCATION &&
			new URL(a.href).host === location.host
		) {
			let ast = html.toAST(document.documentElement.outerHTML);
			try {
				page = JSON.parse(ast.page.str);

				// 数据检查
				if (config.isCheck) {
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
		// 如果不是 push
		if (!(isNewRoute && store.router.state.action === 'push')) {
			// 尝试-从缓存获取数据
			if (!page) {
				let cacheData = store.page.state.cache[_to.path];
				if (cacheData) {
					page = cacheData;
					console.log(`提取缓存---${_to.path} ---`, cacheData);
				}
			}
		}
		// 尝试-请求接口数据
		if (!page) {
			NProgress.start();
			// 新的请求
			store.page.state.cancelTokenSource = Axios.CancelToken.source();
			try {
				page = await request.get(_to.fullPath, null, {
					cancelToken: store.page.state.cancelTokenSource.token,
				});
			} catch (e) {
				if (Axios.isCancel(e)) {
					console.log(`Request canceled---${e.message}`);
				}
			}
		}
		// ****************************************************
		await langLoadWait;
		next();
	});
	router.afterEach(() => {
		// 当前 state = 缓存的 state || 当前历史的 state
		currentState = store.history.getters.stackMap[_to.path]?.state || history.state;
		mixinData.page = page;
		mixinData.json = mixinData.page.json;

		// ****************************************************
		// 计算进入页面的 action
		if (lastState && currentState && !isNewRoute) {
			const lastKey = lastState.key;
			const currentKey = currentState.key;
			// 后退
			if (parseFloat(currentKey) < parseFloat(lastKey)) {
				store.router.state.action = 'back';
			}
			// 前进
			else if (parseFloat(currentKey) > parseFloat(lastKey)) {
				store.router.state.action = 'forward';
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
				// ****************************************************
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
				// 如果是第一次进入页面
				if (_from === VueRouter.START_LOCATION) {
					store.router.state.action = 'push';
				}
				// 维护页面 和 数据缓存
				_to.meta.exclude = [];
				switch (store.router.state.action) {
					case 'push':
						// 维护历史记录-主要是为了维护 history.state 的正确性
						// fullPath 和 state 一一对应
						store.history.state.stack.push({
							..._to,
							state: currentState,
						});
						break;
					case 'replace':
						// 维护历史记录-主要是为了维护 history.state 的正确性
						// fullPath 和 state 一一对应
						store.history.state.stack.splice(-1, 1, {
							..._to,
							state: currentState,
						});
						break;
					case 'forward':
						// 维护历史记录-主要是为了维护 history.state 的正确性
						// fullPath 和 state 一一对应
						store.history.state.stack.push({
							..._to,
							state: currentState,
						});
						break;
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

							// 同步历史栈
							store.history.state.stack.pop();
						}
						break;
				}
				break;
		}

		NProgress.done();
		isNewRoute = false;
	})
	router.onError(() => {
		// 导航故障，结束加载
		NProgress.done();
		// 取消请求
		if (store.page.state.cancelTokenSource) {
			store.page.state.cancelTokenSource.cancel(`router.onError`);
		}
		// 导航故障，保持 to url 不变
		history.replaceState(history.state, '', `${router.options.base ?? ''}${_to.path}`);
	});
}
export default hook;

// ****************************************************
// 重写方法, 获取当前路由 action
const handleError = err => {
	switch (err.type) {
		// Navigation cancelled
		case 8:
			return;
		// NavigationDuplicated
		case 16:
			return;
	}
	console.error(err);
}
// 原型替换
[
	{
		name: 'push',
		func: VueRouter.prototype.push,
	},
	{
		name: 'replace',
		func: VueRouter.prototype.replace,
	},
].forEach(v => {
	VueRouter.prototype[v.name] = function () {
		NProgress.done();
		isNewRoute = true;
		store.router.state.action = v.name;

		return v.func.apply(this, arguments).catch(handleError);
	}
})
