
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookie from 'js-cookie'

Vue.use(VueI18n);

const i18n = new VueI18n()

export default i18n;

// 初始化时-语言包加载状态
let langLoadStatus = null;
export const languageStatus = {
	isLoaded: false,
	waitLoaded() {
		return new Promise((resolve, reject) => {
			if (languageStatus.isLoaded) {
				return resolve();
			}
			langLoadStatus = {
				resolve,
				reject,
			}
		})
	}
};
// 获取语言
export function getLanguage() {
	// cookie 保存的语言
	const chooseLanguage = Cookie.get('lang')
	if (chooseLanguage) {
		return chooseLanguage
	}
	return 'zh-cn'
}
// 设置语言
export const setLanguage = async (lang) => {
	Cookie.set('lang', lang);
}

(async () => {
	let lang = getLanguage();

	switch (lang) {
		case 'en-us': {
			let enLocale = import('./en-us')
			let elementEnLocale = import('element-ui/lib/locale/lang/en')
			enLocale = await enLocale
			elementEnLocale = await elementEnLocale

			i18n.locale = lang;
			i18n.setLocaleMessage(lang, {
				...enLocale.default,
				...elementEnLocale.default
			});
		}
			break;
		// 默认中文
		default: {
			let zhCNLocale = import('./zh-cn')
			let elementZhCNLocale = import('element-ui/lib/locale/lang/zh-CN')
			zhCNLocale = await zhCNLocale
			elementZhCNLocale = await elementZhCNLocale

			i18n.locale = 'zh-cn';
			i18n.setLocaleMessage('zh-cn', {
				...zhCNLocale.default,
				...elementZhCNLocale.default
			});
		}

	}

	// 语言包加载完毕，回调，允许路由进入
	if (langLoadStatus) {
		languageStatus.isLoaded = true;
		langLoadStatus.resolve();
	}
})();