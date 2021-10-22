import router from './index'
// 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 导入初始化的数据
import Init from '@/init'

let options = {
	// 路由模式
	// ast: 前端路由-请求页面
	// api: 前端路由-请求接口
	// refresh：后端路由-刷新页面
	mode: ''
};
// to url
let toURL = location.href;

function init() {
	// 前端路由需要用到的新的 AST 数据
	let newAst = null;
	// 是否是初始化进入页面
	let isInitPage = true;
	// 配置进度条
	NProgress.configure({ showSpinner: false })

	router.beforeEach(async (to, from, next) => {
		// 加上 base
		toURL = `${router.options.base ?? ''}${to.fullPath}`

		switch (options.mode) {
			// 后端路由-refresh
			case 'refresh':
				if (isInitPage) {
					next();
				} else {
					// 如果只是改变了 hash ，则前端路由
					if ((from.fullPath.replace(from.hash, '') === to.fullPath.replace(to.hash, ''))) {
						next();
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
					let res = await Init.protoData.$get(toURL, null, {
						headers: {
							// axios 默认请求头接收的是 json，此处请求的页面，接收的应为 html，改为接收所有
							Accept: '*/*',
						}
					});

					// 解析数据为新的 AST
					newAst = Init.protoData.$u.html.to_ast(
						res.data
					);
				}

				next();
			}
				break;
			// 前端路由-api
			case 'api':
				// 进度条开始
				NProgress.start();

				next();
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
					document.title = newAst.krjziyjz_title.toString();
					document.querySelector('#krjzik3i_keywords').setAttribute('content', newAst.krjzik3i_keywords.attrMap('content'))
					document.querySelector('#krjzir1m_description').setAttribute('content', newAst.krjzir1m_description.attrMap('content'))

					// 更新-AST
					Init.mixinData.ast = Init.protoData.$u.html.to_ast(
						// // 为了节约内存，newAst 中仍然只提取 class=data 中的数据
						// 所以需要 to_html 再 to_ast
						Init.protoData.$u.ast.to_html(newAst.data)
					);

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

export default {
	// 路由模式
	config(opts) {
		options = {
			...options,
			...opts,
		}
		// 初始化路由模式
		init();
	}
}
