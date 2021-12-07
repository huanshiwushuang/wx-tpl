import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookie from 'js-cookie'
import { Locale } from 'vant'

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
	const chooseLanguage = Cookie.get('think_lang')
	if (chooseLanguage) {
		return chooseLanguage;
	}
	return 'zh-cn';
}

// 设置语言
export function setLanguage(lang) {
	Cookie.set('think_lang', lang).replace('_', '-');
}

(async () => {
	let lang = getLanguage();

	switch (lang) {
		case 'en-us': {
			i18n.locale = lang;

			let enUS = import('vant/es/locale/lang/en-US')
			let enUSCustom = import('./en-us')

			enUS = await enUS
			enUSCustom = await enUSCustom

			i18n.setLocaleMessage(lang, {
				...enUSCustom.default,
			});

			Locale.use(i18n.locale, enUS.default);
		}
			break;
		// 默认中文
		default: {
			i18n.locale = 'zh-cn';

			let zhCN = import('vant/es/locale/lang/zh-CN')
			let zhCNCustom = import('./zh-cn')

			zhCN = await zhCN
			zhCNCustom = await zhCNCustom


			i18n.setLocaleMessage(i18n.locale, {
				...zhCNCustom.default,
			});

			Locale.use(i18n.locale, zhCN.default);
		}

	}

	// 语言包加载完毕，回调，允许路由进入
	languageStatus.isLoaded = true;
	if (langLoadStatus) {
		langLoadStatus.resolve();
	}
})();