import websocket from './websocket';
import Init from '@/init';
import { record } from 'rrweb';

const { $post: Post } = Init.protoData;

const startRecord = () => {
	if (startRecord.LOCK) {
		return;
	}
	startRecord.lock = true;

	let stopFn = () => { };
	let lockBindUid = false;
	const ws = websocket.get();

	if (ws) {
		ws.addEventListener('message', (e) => {
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
					// 请求🔒
					if (lockBindUid) {
						return;
					}
					lockBindUid = true;

					Post('/websocket/bindUid', {
						client_id: data_json.client_id,
					}).then(() => {
						stopFn();
						// 开启新的记录
						stopFn = record({
							emit(event) {
								// 发送数据
								ws.sendObj({
									type: 'event',
									event
								})
							}
						})
					}).catch(e => {
						console.error(e);
					}).finally(() => {
						lockBindUid = false;
					})
					break;
			}
		})
		ws.addEventListener('close', () => {
			stopFn();
			startRecord();
		});
		ws.addEventListener('error', () => {
			stopFn();
			startRecord();
		});

	}
	startRecord.lock = false;
}

startRecord();
