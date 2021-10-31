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
		return chooseLanguage.replace('-', '_');
	}
	return 'zh_cn';
}

// 设置语言
export function setLanguage(lang) {
	Cookie.set('think_lang', lang).replace('_', '-');
}

(async () => {
	let lang = getLanguage();

	switch (lang) {
		case 'en_us': {
			i18n.locale = lang;

			let en_us = import('vant/es/locale/lang/en-US')
			let en_us_custom = import('./en-us')

			en_us = await en_us
			en_us_custom = await en_us_custom


			i18n.setLocaleMessage(lang, {
				...en_us_custom.default,
			});

			Locale.use(i18n.locale, en_us.default);
		}
			break;
		// 默认中文
		default: {
			i18n.locale = 'zh-cn';

			let zh_cn = import('vant/es/locale/lang/zh-CN')
			let zh_cn_custom = import('./zh-cn')

			zh_cn = await zh_cn
			zh_cn_custom = await zh_cn_custom


			i18n.setLocaleMessage(i18n.locale, {
				...zh_cn_custom.default,
			});

			Locale.use(i18n.locale, zh_cn.default);
		}

	}

	// 语言包加载完毕，回调，允许路由进入
	if (langLoadStatus) {
		languageStatus.isLoaded = true;
		langLoadStatus.resolve();
	}
})();