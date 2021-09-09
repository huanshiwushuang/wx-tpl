import WS from './ws';
import Init from '@/init';
import { record, pack } from 'rrweb';

const { $post: Post } = Init.protoData;

let stop = () => {
	// 停止记录
	stopRecord();
	// 断开 socket
	ws.disconnect();
}
let stopRecord = () => { }

const ws = new WS({
	url: '192.168.100.5:2348',
});

const start = () => {
	if (start.isStarted) {
		return console.error('record is started');
	}
	start.isStarted = true;

	let isBindUIDing = false;

	if (ws) {
		ws.socket.addEventListener('message', (e) => {
			// record
			let data_json = {};

			try {
				data_json = JSON.parse(e.data);
			} catch (e) {
				return console.error(e);
			}
			switch (data_json.type) {
				// 初始化，绑定 client_id 和 uid
				case 'init':
					// 如果正在绑定-UID
					if (isBindUIDing) {
						return;
					}
					isBindUIDing = true;

					Post('/websocket/bindUid', {
						client_id: data_json.client_id,
					}).then(() => {
						stopRecord();
						// 开启新的记录
						stopRecord = record({
							emit(event) {
								// 发送数据
								ws.sendObj({
									type: 'event',
									event: pack(event),
								})
							}
						})
					}).catch(e => {
						console.error(e);
						// 绑定失败，发送消息，触发重新 bindUid
						setTimeout(() => {
							ws.sendObj({
								type: 'ping',
							})
						}, 1000)
					}).finally(() => {
						isBindUIDing = false;
					})
					break;
				default:
			}
		})

		ws.socket.addEventListener('close', stopRecord);
		ws.socket.addEventListener('error', stopRecord);
	}
}

export default {
	start,
	stop,
};


