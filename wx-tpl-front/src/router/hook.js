// 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 路由
import router from './index'
// request
import request from '../request'
// 语言包
import { languageStatus } from '@/lang'
// 配置
import config from '../config'
// ast
import mixin_data from '../data/mixin_data'

const options = {
	// 路由模式
	// ast: 前端路由-请求页面
	// refresh：后端路由-刷新页面
	mode: config.router_mode || 'ast',
};

// to url
let toURL = location.href;

// 前端路由需要用到的新的 AST 数据
let newAst = null;
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

				// 不是初次进入页面
				if (!isInitPage) {
					// 请求数据
					let res = await request.get(toURL, null, {
						headers: {
							// axios 默认请求头接收的是 json，此处请求的页面，接收的应为 html
							Accept: 'text/html',
						}
					});

					// 数据为新的 html 的 AST
					newAst = res;
				}

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

					// 更新-TKD
					document.title = newAst.T.str;
					document.querySelector('#K').setAttribute('content', newAst.K.attr_map.content)
					document.querySelector('#D').setAttribute('content', newAst.D.attr_map.content)

					// 更新-AST
					mixin_data.data = JSON.parse(newAst.data.str);

					newAst = null;

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
