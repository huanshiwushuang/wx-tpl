import router from './index'
// 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 导入初始化的数据
import Init from '@/init'

let options = {
	// 默认前端路由
	mode: 'frontend'
};
// to url
let toURL = location.href;

function init() {
	// 前端路由需要用到的新的 AST 数据
	let newAst = null;
	// 是否是初始化进入页面
	let initPage = true;
	// 配置进度条
	NProgress.configure({ showSpinner: false })

	router.beforeEach(async (to, from, next) => {
		toURL = to.fullPath;

		switch (options.mode) {
			// 后端路由
			case 'backend':
				if (initPage) {

					next();
				} else {
					// 如果只是改变了 hash ，则前端路由
					if ((from.fullPath.replace(from.hash, '') === to.fullPath.replace(to.hash, ''))) {
						next();
					} else {
						location = to.fullPath;
					}
				}
				break;
			// 前端路由
			// 需要异步请求页面数据，然后解析，更新 ast
			// 前端路由，记得在组件的 destroy 钩子中销毁用不到的数据
			default: {
				// 进度条开始
				NProgress.start();

				// 不是初次进入页面
				if (!initPage) {
					// 请求数据
					let res = await Init.protoData.$get(to.fullPath);

					// 解析数据为新的 AST
					newAst = Init.protoData.$u.html.to_ast(
						res.data
					);
				}

				next();
			}

		}
	})

	router.afterEach(() => {
		// // 为了节约内存，newAst 中仍然只提取 class=data 中的数据，剔除无用数据
		if (!initPage) {
			Init.mixinData.ast = newAst;
		}

		NProgress.done();
		// 结束第一次进入页面
		initPage = false;
	})

	router.onError(() => {
		// 导航故障，结束加载
		NProgress.done();
		// 导航故障，保持 to url 不变
		history.replaceState({}, '', toURL);
	})
}

export default {
	// 路由模式
	config(opts) {
		options = opts;
		// 初始化路由模式
		init();
	}
}
