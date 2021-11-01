export default class WS extends EventTarget {
	// 是否手动触发了修改状态的逻辑
	#is_manual = false
	// 是否将自动重连
	// 根据 reconnection 和 reconnectionTryCount 和 服务端是否返回 close 信号判断
	#will_auto_reconnectuon = false;
	// 默认选项
	#options_default = {
		reconnection: true,
		reconnectionDelay: 3000,
		reconnectionTryCount: 5,
		protocol: location.href.startsWith('https') ? 'wss' : 'ws',
		url: `${location.host}/ws`,
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
		this.#reset_fields();

		if (!this.#options_use.url) {
			throw new Error('url required');
		}
	}
	// 重置属性
	// eslint-disable-next-line no-dupe-class-members
	#reset_fields() {
		this.#options_use = {
			...this.#options_default,
			...this.#options_params
		}

		// 判断是否将自动重连
		this.#will_auto_reconnectuon = this.#options_use.reconnection && this.#options_use.reconnectionTryCount > 0;
		return this;
	}
	// 创建 WebSocket
	// eslint-disable-next-line no-dupe-class-members
	#create() {
		this.#socket = new WebSocket(`${this.#options_use.protocol}://${this.#options_use.url}`);

		this.#socket.addEventListener('open', this.#handleOpen.bind(this));
		this.#socket.addEventListener('close', this.#handleDisconnect.bind(this));
		this.#socket.addEventListener('error', this.#handleDisconnect.bind(this));

		// 代理派发事件
		['open', 'close', 'error', 'message'].forEach(item => {
			this.#socket.addEventListener(item, (e) => {
				// 触发同名事件
				// 不能直接派发，必须重新构造
				this.dispatchEvent(new e.constructor(e.type, e));
			})
		})
	}
	// 处理-打开了连接
	// eslint-disable-next-line no-dupe-class-members
	#handleOpen() {
		// 重置-选项
		this.#reset_fields();
	}
	// 处理-断开
	// eslint-disable-next-line no-dupe-class-members
	#handleDisconnect(e) {
		// 防止 close 和 error 连续出发两次????????
		clearTimeout(this.#handleDisconnect.timeout);

		switch (e.code) {
			// 1000 是收到了关闭信号，正常关闭不重连，怀疑 gatewayworker close 时，没有正确发送关闭信号，导致 code 收到 1006
			case 1000:
				this.#will_auto_reconnectuon = false;
				return this;
			default:
				// 如果允许自动连接
				if (this.#options_use.reconnection) {
					// 重连次数已用完
					if (this.#options_use.reconnectionTryCount <= 0) {
						return this;
					}
				} else {
					return this;
				}

				// 非手动重连
				this.#is_manual = false;
				// 将自动重连
				this.#will_auto_reconnectuon = true;

				this.#handleDisconnect.timeout = setTimeout(() => {
					this.#connect();
				}, 100);
		}
	}
	// eslint-disable-next-line no-dupe-class-members
	#connect() {
		// 如果已经连接上了
		if ([WebSocket.OPEN, WebSocket.CONNECTING].includes(this.#socket?.readyState)) {
			return;
		}

		// 自动重连，次数 -1
		if (!this.#is_manual) {
			this.#options_use.reconnectionTryCount--;
		}

		if (this.#is_manual) {
			this.#create();
		}
		// 自动重连，要有延迟
		else {
			setTimeout(() => {
				this.#create();
			}, this.#options_use.reconnectionDelay);
		}

		return this;
	}
	connect() {
		this.#is_manual = true;

		this.#connect();

		return this;
	}
	disconnect() {
		this.#is_manual = true;

		this.#socket?.close();

		return this;
	}
	send(data) {
		if (![WebSocket.OPEN].includes(this.#socket?.readyState)) {
			return this;
		}

		this.#socket.send(data);

		return this;
	}
	sendObj(obj) {

		return this.send(JSON.stringify(obj))
	}
	set options_use(options_params = {}) {
		this.#options_params = options_params;

		this.#reset_fields();
	}
	get options_use() {
		return {
			...this.#options_use
		}
	}
	get readyState() {
		return this.#socket.readyState;
	}
	get is_manual() {
		return this.#is_manual;
	}
	get will_auto_reconnectuon() {
		return this.#will_auto_reconnectuon;
	}
}
