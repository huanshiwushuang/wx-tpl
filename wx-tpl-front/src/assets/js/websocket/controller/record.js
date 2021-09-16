import { record } from 'rrweb';
import { ws } from '../index';
// API
import Code from '@/../../app/defaultApp/websocket/api/code.json5';

let stop_record = () => { };

export default class Record {
	// 已连接
	static onconnect() {
		console.log('开始录制');

		Record.start_record();
	}
	// 已断开
	static ondisconnect() {
		console.log('停止录制');
		stop_record();
	}
	// 收到数据
	static onmessage(data_json) {
		switch (data_json.code) {
			// checkout
			case Code.ktn053fj_checkout:
				console.log('重新录制');
				Record.start_record();
				break;
		}
	}
	// 开始记录
	static start_record() {
		stop_record();

		stop_record = record({
			emit(event) {
				// 发送数据
				ws.sendObj(
					({
						source: 'record',
						type: 'event',
						event: (event),
					})
				)
			}
		})
	}
}