const protocol = location.href.startsWith('https') ? 'wss' : 'ws';
const url = `${protocol}://localhost:2348`;

const options = {
	reconnection: true,
	reconnectionDelay: 3000,
	reconnectionAttempts: 5,
	url,
}

let ws = null;

// 重连
function reconnect(url) {
	// 避免过多的 reconnect
	if (reconnect.LOCK) {
		return;
	}
	// 初始化重连次数
	if (reconnect.reconnectionAttempts === undefined) {
		reconnect.reconnectionAttempts = options.reconnectionAttempts;
	}
	// 减少重连次数
	if (reconnect.reconnectionAttempts-- <= 0) {
		reconnect.reconnectionAttempts = undefined;
		return;
	}

	reconnect.LOCK = true;

	//没连接上会一直重连，设置延迟避免请求过多
	setTimeout(function () {
		createWebSocket(url);

		reconnect.LOCK = false;
	}, options.reconnectionDelay);
}

// 初始化事件函数
function initEventHandle() {
	ws.onclose = function () {
		if (options.reconnection) {
			reconnect(url);
		}
	};
	ws.onerror = function (err) {
		console.error(err);
		if (options.reconnection) {
			reconnect(url);
		}
	};
}

// 实例websocket
function createWebSocket(url) {
	if (!('WebSocket' in window)) {
		return console.error("当前浏览器不支持websocket协议, 建议使用现代浏览器")
	}
	try {
		ws = new WebSocket(url);

		// 扩展函数
		Object.assign(ws, {
			sendObj(json) {
				return ws.send(JSON.stringify(json));
			}
		})

		initEventHandle();
	} catch (e) {
		reconnect(url);
	}
}

const exports = {
	create(opts = {}) {
		Object.assign(options, opts);

		if (ws) {
			exports.destroy();
		}
		createWebSocket(url);
		return ws;
	},
	get(opts = {}) {
		if (!ws) {
			exports.create(opts);
		}
		return ws;
	},
	destroy() {
		if (ws) {
			options.reconnection = false;
			ws.close();
			ws = null;
		}
	}
};

export default exports;
