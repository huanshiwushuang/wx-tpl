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
import mixin_data from '../data/mixin_data';
// store
import store from '../store';
// VueRouter
import VueRouter from 'vue-router';
// tools
import { html } from '../utils/tools';

// ****************************************************
// 配置进度条
NProgress.configure({ showSpinner: false });

// ****************************************************
// 当前路由的 state
let history_current_state;

// 重写方法, 获取当前路由 action
const _replace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function () {
	store.commit('history/action', 'replace');
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
	store.commit('history/action', 'push');
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

window.addEventListener('popstate', (e) => {
	// 根据 state 中的 key 判断是前进 or 后退
	// key 是 vue-router 路由时自动添加的
	// 非首屏的 state 为 {key: 时间戳}
	const to_key = e.state?.key ?? -1;
	const from_key = history_current_state?.key ?? -1;

	// 后退
	if (parseFloat(from_key) > parseFloat(to_key)) {
		store.commit('history/action', 'back');
	}
	// 前进
	else {
		store.commit('history/action', 'forward');
	}
});

// ****************************************************
// 路由模式
const options = {
	// ast: 前端路由-请求页面
	// refresh：后端路由-刷新页面
	mode: config.router_mode || 'ast',
};

// ****************************************************
let page = null;
let from_pathname, to_pathname;
let _to, _from;

// ****************************************************
// 开始 hook
function hook() {
	router.beforeEach(async (to, from, next) => {
		// 加载语言包
		const languageLoad = languageStatus.waitLoaded();
		// ****************************************************
		_to = to;
		_from = from;
		// from pathname
		let a = document.createElement('a');
		a.href = from.path;
		from_pathname = location.pathname;
		store.commit('page/from_pathname', from_pathname);

		// to pathname
		a.href = `${router.options.base ?? ''}${to.path}`;
		to_pathname = (new URL(a.href)).pathname;
		store.commit('page/to_pathname', to_pathname);
		// ****************************************************
		switch (options.mode) {
			// 后端路由-refresh
			case 'refresh':
				// 如果不是第一次进入页面
				if (from !== VueRouter.START_LOCATION) {
					// 如果只是改变了 hash ，则前端路由
					if ((from.fullPath.replace(from.hash, '') === to.fullPath.replace(to.hash, ''))) {
						return next();
					} else {
						location = to_pathname;
						return;
					}
				}
				break;
		}
		// ****************************************************
		// 如果是第一次进入页面 && axios baseURL 是当前域名
		a.href = axios_options.baseURL;
		if (
			_from === VueRouter.START_LOCATION &&
			new URL(a.href).host === location.host
		) {
			let ast = html.to_ast(document.documentElement.outerHTML);
			try {
				page = JSON.parse(ast.page?.str);

				// 数据检查
				if (config.is_check) {
					let { default: console_check } = await import('../console/check');

					console_check({
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
						let cache_data = store.state.page.cache[to_pathname];
						if (cache_data) {
							page = cache_data;
							console.log(`提取缓存---${to_pathname} ---`, cache_data);
						}
					}
					break;
			}
			// 请求接口数据
			if (!page) {
				NProgress.start();

				page = await request.get(to.fullPath);
			}
		}
		// ****************************************************
		switch (options.mode) {
			case 'ast': {
				// 记录页面滚动位置
				store.commit('page/saved_position', {
					...store.state.page.saved_position,
					[from_pathname]: {
						x: window.scrollX,
						y: window.scrollY,
					}
				});
			}
				break;
		}

		// 等待语言包加载完毕
		await languageLoad;
		next();
	});
	router.afterEach(() => {
		// 保存当前 history state
		history_current_state = history.state;

		// 创建新的对象, 避免直接修改 vuex 中的数据
		mixin_data.page = page;
		mixin_data.json = mixin_data.page.json;

		switch (options.mode) {
			case 'ast':
				// ****************************************************
				// 缓存 page 数据
				store.commit('page/cache', {
					...store.state.page.cache,
					[to_pathname]: page,
				});

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
				switch (store.state.history.action) {
					case 'replace':
						store.commit('history/stack', [
							...[
								...store.state.history.stack,
							].slice(0, -1),
							{
								to: _to,
								from: _from,
							}
						])
						break;
					case 'back':
						store.commit('history/stack', [
							...store.state.history.stack,
						].slice(0, -1));

						store.commit('history/pointer', store.state.history.pointer - 1);
						break;
					case 'forward':
					case 'push':
					default:
						store.commit('history/stack', [
							...store.state.history.stack,
							{
								to: _to,
								from: _from,
							}
						])
						store.commit('history/pointer', store.state.history.pointer + 1);
				}
				// ****************************************************
				// 维护页面 和 数据缓存
				_to.meta.exclude = [];
				switch (store.state.history.action) {
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
							// 确认需要清除的 page 缓存
							store.commit('page/cache', {
								...Object.keys(store.state.page.cache).filter(key => {
									return key !== `${axios_options.baseURL}${_from.fullPath}`;
								}).reduce((sum, key) => {
									sum[key] = store.state.page.cache[key];
									return sum;
								}, {}),
							});
						}
						break;
				}
				break;
		}

		page = null;

		NProgress.done();
	})
	router.onError(() => {
		// 导航故障，结束加载
		NProgress.done();
		// 导航故障，保持 to url 不变
		history.replaceState({}, '', to_pathname);
	});
}

export default hook
