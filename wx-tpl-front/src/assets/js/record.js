import WS from './ws';
import Init from '@/init';
import { record, pack } from 'rrweb';
import Vue from 'vue';

const { $post: Post } = Init.protoData;

const ws = new WS({
	url: `192.168.5.2:2348`,
});

Vue.prototype.$ws = ws;

const data_default = {
	source: 'record',
	type: 'ping',
}

class Record {
	#STATE = {
		init: 'init',
		// ?????
	}

	#options_default = {
		// 是否正在开启或已开启
		isStarting: false,
		// 初始化尝试次数
		initTryCount: 3,
		// 是否正在初始化
		isIniting: false,
		// record 停止函数
		stopRecord: () => { },
		// 停止函数-timeout
		stop_timeout: null,
	}
	#options_params = {}
	#options_use = {}
	constructor(options_params) {
		this.#options_params = options_params;
		this.#reset_options_use();

		if (!ws) {
			throw new Error('have not ws');
		}

		// 事件绑定
		const handleCloseError = () => {
			this.#options_use.isStarting = false;
			this.#options_use.stopRecord();
		}
		ws.addEventListener('message', async (e) => {
			let data_json = {};

			try {
				data_json = JSON.parse(e.data);
			} catch (e) {
				return console.error(e);
			}
			switch (data_json.type) {
				// 初始化, 比如【绑定 client_id 和 uid】
				case 'init':
					{
						// 阻止同时并发初始化
						if (this.#options_use.isIniting) {
							return;
						}
						// 限制尝试初始化的次数
						if (this.#options_use.initTryCount <= 0) {
							this.stop(`init try count end`);
							return;
						}
						this.#options_use.isIniting = true;

						// 请求 web server 绑定 uid
						try {
							await Post('/websocket/bindUid', {
								client_id: data_json.client_id,
							})
						} catch (e) {
							console.error(e);
							// 初始化失败，发送消息，触发重新初始化
							setTimeout(() => {
								// 尝试次数 -1
								this.#options_use.initTryCount--;

								if (ws.readyState === WebSocket.OPEN) {
									ws.sendObj({
										...data_default
									})
								}
							}, 1000)

							return;
						} finally {
							this.#options_use.isIniting = false;
						}
						// 绑定成功，通知 websocket server 进行验证
						ws.sendObj({
							type: 'inited'
						})
						// 开始记录
						this.#startRecord();
					}
					break;
				case 'checkout':
					// 重新开始记录
					this.#startRecord();
					break;
				case 'close':
					this.stop(`received server close data, code ${data_json.code}`);
					break;
				default:
			}
		})
		ws.addEventListener('close', handleCloseError);
		ws.addEventListener('error', handleCloseError);

		window.addEventListener('touchstart', this.#re_active.bind(this), true);
		window.addEventListener('mousemove', this.#re_active.bind(this), true);
		window.addEventListener('scroll', this.#re_active.bind(this), true);
	}
	#reset_options_use() {
		this.#options_use = {
			...this.#options_default,
			...this.#options_params
		}
	}
	// 重新激活
	// eslint-disable-next-line no-dupe-class-members
	#re_active() {
		// 如果正在记录，则推迟 stop
		if (this.#options_use.isStarting) {
			clearTimeout(this.#options_use.stop_timeout);

			this.#options_use.stop_timeout = setTimeout(() => {
				this.stop(`user not active, timeout`);
			}, 30 * 1000)
		}
		// 如果没有在记录，则开启
		else {
			this.start();
		}
	}
	// 开始记录
	// eslint-disable-next-line no-dupe-class-members
	#startRecord() {
		this.#options_use.stopRecord();
		this.#options_use.stopRecord = record({
			emit(event) {
				// 发送数据
				ws.sendObj(
					{
						...data_default,
						type: 'event',
						event: pack(event),
					}
				)
			}
		})
	}
	start() {
		if (this.#options_use.isStarting) {
			return;
		}
		// 重置参数
		this.#reset_options_use();

		// 正在开启
		this.#options_use.isStarting = true;
		ws.connect();
	}
	stop(reason) {
		console.log(`call stop: ${reason}`);

		if (!this.#options_use.isStarting) {
			return;
		}

		// 尚未开启
		this.#options_use.isStarting = false;
		// 停止记录
		this.#options_use.stopRecord();
		// 断开 socket
		ws.disconnect();
		// 取消 timeout call stop
		clearTimeout(this.#options_use.stop_timeout);
	}
}

export default new Record;


