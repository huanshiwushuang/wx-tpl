// 进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
// 路由
import router from './index';
// request
import request from '../request';
// 语言包
import { languageStatus } from '@/lang';
// 配置
import config from '../config';
// ast
import mixin_data from '../data/mixin_data';
// store
import store from '../store';

const options = {
	// 路由模式
	// ast: 前端路由-请求页面
	// refresh：后端路由-刷新页面
	mode: config.router_mode || 'ast',
};

// to url
let toURL = location.href;

// 页面数据
let page = null;
// 是否是初始化进入页面
let isInitPage = true;
// 配置进度条
NProgress.configure({ showSpinner: false })

// 开始 hook
function hook() {
	router.beforeEach(async (to, from, next) => {
		// 加上 base
		toURL = `${router.options.base ?? ''}${to.fullPath}`

		const toNext = async () => {
			// 等待语言包加载完毕
			await languageStatus.waitLoaded();
			next();
		}

		switch (options.mode) {
			// 后端路由-refresh
			case 'refresh':
				if (isInitPage) {
					toNext();
				} else {
					// 如果只是改变了 hash ，则前端路由
					if ((from.fullPath.replace(from.hash, '') === to.fullPath.replace(to.hash, ''))) {
						toNext();
					} else {
						location = toURL;
					}
				}
				break;
			// 前端路由-ast
			// 需要异步请求页面数据，然后解析，更新 ast
			// 前端路由，记得在组件的 destroy 钩子中销毁用不到的数据
			case 'ast': {
				// 进度条开始
				NProgress.start();

				// 请求数据
				page = await request.get(toURL);

				toNext();
			}
				break;
			default:
				throw new Error('router mode error');
		}

	})

	router.afterEach(() => {
		switch (options.mode) {
			case 'ast':
				// 不是第一次进入页面
				if (!isInitPage) {
					// page 数据保存到 store
					store.commit('views/Base/pages', {
						...store.state.views.Base.pages,
						[location.pathname]: page,
					});
					// 更新 mixin data
					mixin_data.page = page;
					mixin_data.json = page.json;

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

		NProgress.done();
		// 结束第一次进入页面
		isInitPage = false;
	})

	router.onError(() => {
		// 导航故障，结束加载
		NProgress.done();
		// 导航故障，保持 to url 不变
		history.replaceState({}, '', toURL);
	})
}

export default hook
