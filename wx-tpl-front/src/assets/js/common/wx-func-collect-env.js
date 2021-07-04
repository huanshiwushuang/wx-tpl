// 获取浏览器类型
let getBrowserType = () => {
	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
	var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
	var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera || userAgent.indexOf("rv:11") > -1; //判断是否IE浏览器
	var isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器
	var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
	var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
	var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器
	if (isIE) {
		if (userAgent.indexOf("rv:11") > -1) {
			return "IE11";
		}
		if (userAgent.indexOf("rv:12") > -1) { //这一段还没验证
			return "IE12";
		}
		var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
		reIE.test(userAgent);
		var fIEVersion = parseFloat(RegExp["$1"]);
		if (fIEVersion >= 9) {
			return 'IE' + fIEVersion
		}
	}
	if (isFF) { return "Firefox"; }
	if (isOpera) { return "Opera"; }
	if (isSafari) { return "Safari"; }
	if (isChrome) { return "Chrome"; }
	if (isEdge) { return "Edge"; }
};
// 获取是否是手机
let getClientType = () => {
	var rst = [
		'android',
		'iphone'
	].find(i => {
		return (new RegExp(i, 'i')).test(navigator.userAgent);
	});
	return rst || 'pc';
};

export default function () {
	let now = Date.now();
	return {
		// 时间戳，关联一个页面的多个请求的唯一 ID
		stamp: now,
		// 浏览器
		browser: getBrowserType(),
		// 客户端[pc or 手机]
		client: getClientType(),
		// 来源[referrer]
		referrer: decodeURI(document.referrer),
		// 页面[domain+path]
		pages: [location.host, location.pathname].join(''),
		// 路径[path]
		paths: location.pathname,
		// 平台[window or mac or linux or android or ios]
		platform: navigator.platform,
		// 像素
		px: [screen.width, screen.height].join('*'),
		// 访问页[url]
		viewurl: location.href,
		// UA
		ua: navigator.userAgent,
		// 进入时间
		intime: now,
	}
}
