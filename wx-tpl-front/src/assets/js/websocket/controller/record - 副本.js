import WS from './ws';
import Init from '@/init';
import { record, pack } from 'rrweb';
import Vue from 'vue';

const { $post: Post } = Init.protoData;

// 创建 websocket
const ws = new WS({
	url: `192.168.100.5:2348`,
});

Vue.prototype.$ws = ws;

const data_default = {
	source: 'record',
	type: 'ping',
}

// 状态由：websocket 状态 和 record 状态 组成
class Record {
	// 是否正在记录
	#is_recording = false
	// 是否正在初始化
	#is_initing = false
	// record 停止函数
	#record_stop_func = () => { }
	// record 停止函数 timout id
	#record_stop_func_timeout = () => { }

	#options_default = {
		// 初始化尝试次数
		init_try_count: 3,
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
			this.#options_use.is_recording = false;
			this.#options_use.record_stop_func();
		}
		ws.addEventListener('message', this.#handleMessage.bind(this));

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
	// 处理-message
	#handleMessage(e) {
		let data_json = {};

		try {
			data_json = JSON.parse(e.data);
		} catch (e) {
			return console.error(e);
		}

		switch (data_json.) {

		}
	}
	// 重新激活
	// eslint-disable-next-line no-dupe-class-members
	#re_active() {
		// 如果正在记录，则推迟 stop
		if (this.#options_use.is_recording) {
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
		this.#options_use.record_stop_func();
		this.#options_use.record_stop_func = record({
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
		if (this.#options_use.is_recording) {
			return;
		}
		// 重置参数
		this.#reset_options_use();

		// 正在开启
		this.#options_use.is_recording = true;
		ws.connect();
	}
	stop(reason) {
		console.log(`call stop: ${reason}`);

		if (!this.#options_use.is_recording) {
			return;
		}

		// 尚未开启
		this.#options_use.is_recording = false;
		// 停止记录
		this.#options_use.record_stop_func();
		// 断开 socket
		ws.disconnect();
		// 取消 timeout call stop
		clearTimeout(this.#options_use.stop_timeout);
	}
}

export default new Record;


