import { env } from './tools';

// 整体布局控制
(function flexible(window, document) {
	var docEl = document.documentElement
	var dpr = window.devicePixelRatio || 1

	// adjust body font size
	function setBodyFontSize() {
		if (document.body) {
			document.body.style.fontSize = (12 * dpr) + 'px'
		}
		else {
			document.addEventListener('DOMContentLoaded', setBodyFontSize)
		}
	}
	setBodyFontSize();

	function setRemUnit() {
		// 默认
		let idealWidth = Math.min(docEl.clientWidth, docEl.clientHeight);
		if (!env.is_mobile_ua()) {
			// 适配 PC 
			idealWidth = Math.min(idealWidth, idealWidth / (780 / 380));
			// 限制最小宽度
			idealWidth = Math.max(idealWidth, 414);
		}

		let rem = idealWidth / 10;

		docEl.style.fontSize = rem + 'px'
	}

	setRemUnit()

	// reset rem unit on page resize
	window.addEventListener('resize', setRemUnit)
	window.addEventListener('pageshow', function (e) {
		if (e.persisted) {
			setRemUnit()
		}
	})

	// detect 0.5px supports
	if (dpr >= 2) {
		var fakeBody = document.createElement('body')
		var testElement = document.createElement('div')
		testElement.style.border = '.5px solid transparent'
		fakeBody.appendChild(testElement)
		docEl.appendChild(fakeBody)
		if (testElement.offsetHeight === 1) {
			docEl.classList.add('hairlines')
		}
		docEl.removeChild(fakeBody)
	}
}(window, document));

// tabbar 布局控制
