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
NProgress.configure({ showSpinner: false })

// ****************************************************
// 当前路由的 state
let history_current_state;

// 重写方法, 获取当前路由动作
const _replace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function () {
	store.commit('history/action', 'replace');
	return _replace.apply(this, arguments);
};

const _push = VueRouter.prototype.push;
VueRouter.prototype.push = function () {
	store.commit('history/action', 'push');
	return _push.apply(this, arguments);
};

window.addEventListener('popstate', (e) => {
	// 根据 state 中的 key 判断是前进 or 后退
	// 默认应用首屏的 state === null
	// 非首屏的 state 为 {key: 时间戳}
	const to_key = e.state === null ? -1 : e.state.key;
	const from_key = history_current_state === null ? -1 : history_current_state.key;

	// 后退
	if (from_key > to_key) {
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
let to_url = location.href;
let request_url;
let cache_key;
let _to, _from;

// ****************************************************
// 开始 hook
function hook() {
	router.beforeEach(async (to, from, next) => {
		// ****************************************************
		_to = to;
		_from = from;
		// 加上 base
		to_url = `${router.options.base ?? ''}${to.fullPath}`;

		// ****************************************************
		// next
		const to_next = async () => {
			// 等待语言包加载完毕
			await languageStatus.waitLoaded();
			next();
		}
		// ****************************************************
		switch (options.mode) {
			// 后端路由-refresh
			case 'refresh':
				if (_from === VueRouter.START_LOCATION) {
					to_next();
				} else {
					// 如果只是改变了 hash ，则前端路由
					if ((from.fullPath.replace(from.hash, '') === to.fullPath.replace(to.hash, ''))) {
						to_next();
					} else {
						location = to_url;
					}
				}
				break;
			// 前端路由-ast
			case 'ast': {
				request_url = `${axios_options.baseURL}${to.fullPath}`;

				// 提取 cache_key
				let a = document.createElement('a');
				a.href = request_url;
				let url_obj = new URL(a.href);
				cache_key = url_obj.toString();

				// 提取 cache_data
				let cache_data = store.state.views.Base.pages[cache_key];

				// 如果有缓存
				if (cache_data) {
					page = cache_data;
					console.log(`缓存数据`, cache_data, `---${request_url}`);
				}

				// 否则请求数据
				else {
					// 如果是第一次进入页面
					if (_from === VueRouter.START_LOCATION) {
						let ast = html.to_ast(document.documentElement.outerHTML);
						page = JSON.parse(ast.page.str);
					} else {
						NProgress.start();
						page = await request.get(request_url);
					}
				}

				to_next();
			}
				break;
			default:
				throw new Error('router mode error');
		}
	});
	router.afterEach(() => {
		// 保存当前 history state
		history_current_state = history.state;

		// 更新缓存数据
		// switch (store.state.history.action) {
		// 	// 不缓存
		// 	case 'replace':
		// 	case 'back':
		// 		_from.meta.not_keep_alive = true;
		// 		break;
		// 	// 缓存
		// 	case 'forward':
		// 	case 'push':
		// 	case '':
		// 		_from.meta.not_keep_alive = false;
		// 		break;
		// }

		// 更新页面数据
		switch (options.mode) {
			case 'ast':
				// 更新 mixin data
				mixin_data.page = page;
				mixin_data.json = page.json;

				// 是否缓存 page 数据
				if (!_to.meta.not_keep_alive) {
					store.commit('views/Base/pages', {
						...store.state.views.Base.pages,
						[cache_key]: page,
					});
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
				break;
		}

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

		NProgress.done();
	})

	router.onError(() => {
		// 导航故障，结束加载
		NProgress.done();
		// 导航故障，保持 to url 不变
		history.replaceState({}, '', to_url);
	});
}

export default hook
