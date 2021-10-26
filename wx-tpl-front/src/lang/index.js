
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookie from 'js-cookie'

Vue.use(VueI18n);

export function getLanguage() {
	// cookie 保存的语言
	const chooseLanguage = Cookie.get('lang')
	if (chooseLanguage) {
		return chooseLanguage
	}
	return 'zh-CN'
}

const i18n = new VueI18n()

export default i18n;

// 语言包加载状态
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

// 动态导入其他语言
(async () => {
	let lang = getLanguage();
	switch (lang) {
		case 'en-US': {
			let enLocale = import('./en-US')
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
			let zhCNLocale = import('./zh-CN')
			let elementZhCNLocale = import('element-ui/lib/locale/lang/zh-CN')
			zhCNLocale = await zhCNLocale
			elementZhCNLocale = await elementZhCNLocale

			i18n.locale = 'zh-CN';
			i18n.setLocaleMessage('zh-CN', {
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