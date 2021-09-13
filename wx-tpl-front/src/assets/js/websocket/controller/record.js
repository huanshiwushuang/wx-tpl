import { record, pack } from 'rrweb';
import ws from '../index';
import Data from '../data/data';

let stop_record = () => { };

export default class Record {
	// 已连接
	static onconnect() {
		console.log('开始录制');
		stop_record();

		Record.start_record();
	}
	// 已断开
	static ondisconnect() {
		console.log('停止录制');
		stop_record();
	}
	// 收到数据
	static onmessage(data_json) {
		switch (data_json.type) {
			case 'checkout':
				console.log('重新记录');
				stop_record();
				Record.start_record();
				break;
		}
	}
	// 开始记录
	static start_record() {
		stop_record = record({
			emit(event) {
				// 发送数据
				ws.sendObj(
					Data.node_send({
						source: 'record',
						type: 'event',
						event: pack(event),
					})
				)
			}
		})
	}
}