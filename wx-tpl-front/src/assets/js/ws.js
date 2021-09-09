export default class WS {
	#options_default = {
		reconnection: true,
		reconnectionDelay: 3000,
		reconnectionAttempts: 5,
		protocol: location.href.startsWith('https') ? 'wss' : 'ws',
		url: null,
	};
	#options_params = {};
	#options_use = {};
	#socket = null;

	constructor(options_params = {}) {
		if (!('WebSocket' in window)) {
			console.error('not support websocket');
			return null;
		}

		// 保存参数
		this.#options_params = options_params;
		// 合并参数
		Object.assign(this.#options_use, this.#options_default, this.#options_params);

		if (!this.#options_use.url) {
			throw new Error('url required');
		}

		this.#create();
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
		this.#socket.addEventListener('close', this.#reconnect.bind(this));
		this.#socket.addEventListener('error', this.#reconnect.bind(this));
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
				this.connect({
					isManual: false
				});
		}

	}
	connect({ isManual } = { isManual: true }) {
		// 如果已经连接上了
		switch (this.#socket.readyState) {
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

				// 如果连接成功重置重连次数
				this.#socket.addEventListener('open', function () {
					this.#options_use.reconnectionAttempts = Object.assign(this.#options_default, this.#options_params).reconnectionAttempts;
				}.bind(this))

				this.connect.isConnecting = false;
			}, this.#options_use.reconnectionDelay);
		}

		return this;
	}
	disconnect() {
		this.#socket.close();

		return this;
	}
	send(data) {
		switch (this.#socket.readyState) {
			case WebSocket.OPEN:
				return this.#socket.send(data);
			default:
				console.error(`socket is closed`);
		}

		return this;
	}
	sendObj(obj) {
		this.send(JSON.stringify(obj))

		return this;
	}
	set options_use(options_params = {}) {
		this.#options_params = options_params;

		this.#reset_options();
	}
	get socket() {
		return this.#socket;
	}
}
