import mixin_data from '../data/mixin_data';

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
		// 理想宽度
		let ideal_width = Math.min(docEl.clientWidth, docEl.clientHeight);

		// 适配 PC 
		if (!mixin_data.is_mobile_ua) {
			let client_height = docEl.clientHeight;
			// 理想高宽之比
			let ratio = 780 / 380;

			// 理想宽高 map to 实际宽高
			ideal_width = client_height / ratio;
		}

		let rem = ideal_width / 10;

		docEl.style.fontSize = `${rem}px`;
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
