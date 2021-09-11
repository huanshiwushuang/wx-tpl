import WS from './ws';
import Init from '@/init';
import { record, pack } from 'rrweb';
import Vue from 'vue';
import { throttle } from 'lodash-es';

const { $post: Post } = Init.protoData;

const ws = new WS({
	url: `192.168.100.5:2348`,
});

Vue.prototype.$ws = ws;

const data_default = {
	source: 'record',
	type: 'ping',
}

class Record {
	#options_default = {
		// 是否正在记录
		isRecording: false,
		// 绑定重连次数
		bindTryCount: 5,
		// 是否正在绑定 UID
		isBindUIDing: false,
		// record 停止函数
		stopRecord: () => { },
		// 倒计时，延迟停止函数
		delay_stop: () => { },
		// 倒计时，延迟停止函数-timeout_id
		delay_stop_timeout: null,
	}
	#options_params = {}
	#options_use = {}
	constructor(options_params) {
		this.#options_params = options_params;
		this.#reset_options_use();

		if (!ws) {
			throw new Error('have not ws');
		}

		// 倒计时停止函数开启
		this.#options_use.delay_stop = throttle(function () {
			clearTimeout(this.#options_use.delay_stop_timeout);

			this.#options_use.delay_stop_timeout = setTimeout(() => {
				this.stop();
			}, 30 * 1000)
		}, 20).bind(this);

		// 事件绑定
		const handleCloseError = () => {
			this.#options_use.isRecording = false;
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
				// 初始化，绑定 client_id 和 uid
				case 'init':
					{
						if (this.#options_use.isBindUIDing) {
							return console.error('isBindUIDing');
						}
						this.#options_use.isBindUIDing = true;

						// 请求 web server 绑定 uid
						try {
							await Post('/websocket/bindUid', {
								client_id: data_json.client_id,
							})
						} catch (e) {
							console.error(e);
							// 绑定失败，发送消息，触发重新 bindUid
							if (this.#options_use.bindTryCount-- > 0) {
								setTimeout(() => {
									if (ws.readyState === WebSocket.OPEN) {
										ws.sendObj({
											...data_default
										})
									}
								}, 1000)
							}
						} finally {
							this.#options_use.isBindUIDing = false;
						}
						// 绑定成功，通知 websocket server 进行验证
						ws.sendObj({
							type: 'inited'
						})
						// 开启新的记录
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

						this.#options_use.isRecording = true;
					}
					break;
				case 'close':
					this.stop();
					break;
				default:
			}
		})
		ws.addEventListener('close', handleCloseError);
		ws.addEventListener('error', handleCloseError);

		window.addEventListener('touchstart', this.#restart.bind(this), true);
		window.addEventListener('mousemove', this.#restart.bind(this), true);
		window.addEventListener('scroll', this.#restart.bind(this), true);
	}
	#reset_options_use() {
		this.#options_use = {
			...this.#options_default,
			...this.#options_params
		}
	}
	// eslint-disable-next-line no-dupe-class-members
	#restart() {
		// 如果正在记录，则推迟停止
		if (this.#options_use.isRecording) {
			this.#options_use.delay_stop();
		}
		// 如果没有在记录，则开启
		else {
			this.start();
		}
	}
	start() {
		if (this.#options_use.isRecording) {
			return console.error('start already~');
		}
		this.#options_use.isRecording = true;
		this.#reset_options_use();
		ws.connect();
	}
	stop() {
		if (!this.#options_use.isRecording) {
			return console.error('stop already~');
		}
		this.#options_use.isRecording = false;
		// 停止记录
		this.#options_use.stopRecord();
		// 断开 socket
		ws.disconnect();
	}
}

export default new Record;


