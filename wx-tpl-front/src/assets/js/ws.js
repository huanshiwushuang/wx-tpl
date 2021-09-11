export default class WS extends EventTarget {
	// 默认选项
	#options_default = {
		reconnection: true,
		reconnectionDelay: 3000,
		reconnectionAttempts: 5,
		protocol: location.href.startsWith('https') ? 'wss' : 'ws',
		url: null,
	};
	// 参数选项
	#options_params = {};
	// 使用选项
	#options_use = {};
	// websocket 实例
	#socket = null;

	constructor(options_params = {}) {
		if (!('WebSocket' in window)) {
			console.error('not support websocket');
			return null;
		}
		super();

		// 保存参数
		this.#options_params = options_params;
		// 合并参数
		this.#reset_options();

		if (!this.#options_use.url) {
			throw new Error('url required');
		}
	}
	// 重置参数
	// eslint-disable-next-line no-dupe-class-members
	#reset_options() {
		// 合并参数
		Object.assign(this.#options_use, this.#options_default, this.#options_params);
		return this;
	}
	// 创建 WebSocket
	// eslint-disable-next-line no-dupe-class-members
	#create() {
		this.#socket = new WebSocket(`${this.#options_use.protocol}://${this.#options_use.url}`);

		// 如果连接成功重置重连次数
		this.#socket.addEventListener('open', function () {
			this.#options_use.reconnectionAttempts = Object.assign(this.#options_default, this.#options_params).reconnectionAttempts;
		}.bind(this));
		this.#socket.addEventListener('close', this.#reconnect.bind(this));
		this.#socket.addEventListener('error', this.#reconnect.bind(this));

		// 代理派发事件
		['open', 'close', 'error', 'message'].forEach(item => {
			this.#socket.addEventListener(item, (e) => {
				// 触发同名事件
				// 不能直接派发，必须重新构造
				this.dispatchEvent(new e.constructor(e.type, e));
			})
		})
	}
	// 重连
	// eslint-disable-next-line no-dupe-class-members
	#reconnect(e) {
		switch (e.code) {
			// 1000 是收到了关闭信号，正常关闭不重连
			case 1000:
				return this;
			default:
				// 如果允许自动连接
				if (this.#options_use.reconnection) {
					// 重连次数已用完
					if (this.#options_use.reconnectionAttempts <= 0) {
						return this;
					}
				} else {
					return this;
				}
				this.#connect({
					// 不是手动重连
					isManual: false
				});
		}

	}
	// eslint-disable-next-line no-dupe-class-members
	#connect({ isManual }) {
		// 如果已经连接上了
		switch (this.#socket?.readyState) {
			case WebSocket.OPEN:
				return this;
		}

		// 手动连接
		if (isManual) {
			// 重置参数
			this.#reset_options();
		}

		// 如果已经正在重连
		if (this.connect.isConnecting) {
			return this;
		}

		this.#options_use.reconnectionAttempts--;

		this.connect.isConnecting = true;

		if (isManual) {
			this.#create();
			this.connect.isConnecting = false;
		} else {
			setTimeout(() => {
				this.#create();
				this.connect.isConnecting = false;
			}, this.#options_use.reconnectionDelay);
		}

		return this;
	}
	connect() {
		if ([WebSocket.OPEN].includes(this.#socket?.readyState)) {
			return this;
		}
		this.#connect({
			isManual: true
		});
	}
	disconnect() {
		if ([WebSocket.CLOSED, WebSocket.CLOSING].includes(this.#socket?.readyState)) {
			return this;
		}
		this.#socket.close();

		return this;
	}
	send(data) {
		if (![WebSocket.OPEN].includes(this.#socket?.readyState)) {
			return this;
		}
		switch (this.#socket.readyState) {
			case WebSocket.OPEN:
				this.#socket.send(data);
				break;
		}

		return this;
	}
	sendObj(obj) {
		return this.send(JSON.stringify(obj))
	}
	set options_use(options_params = {}) {
		this.#options_params = options_params;

		this.#reset_options();
	}
	get readyState() {
		return this.#socket.readyState;
	}
}
