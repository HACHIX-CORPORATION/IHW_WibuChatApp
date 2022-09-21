import ApiService from '@/service/API/api.service';
import socketClient from '@/service/Socket';

export default {
	name: 'BoxChat',
	data() {
		return {
			appName: 'Wichat',
			newText: '',

			/**
			 * Array of object message
			 * [
			 * 		{ mess: String, userId: Integer, userName: String  }
			 * ]
			 */
			messages: [
				// {
				// 	mess: 'hello client B',
				// 	userId: 1,
				// 	userName: 'A',
				// },
				// {
				// 	mess: 'hello client A',
				// 	userId: 2,
				// 	userName: 'B',
				// },
			],
			roomName: '',
			roomId: '',
			isSender: true,
			userId: '',
		};
	},
	methods: {
		sendMess() {
			let userId = parseInt(localStorage.getItem('userId'));
			console.log('local data: ', { userId });

			socketClient.emit('send_message', {
				mess: this.newText,
				room_name: this.roomName,
				user_id: userId,
			});

			// if ((userId = user_id))
			console.log({
				mess: this.newText,
				room_name: this.roomName,
				user_id: userId,
			});

			// check noi dung co phai la empty hay khong thi moi push
			if (this.newText != '') {
				this.messages.push({
					mess: this.newText,
					userId: userId,
				});
				console.log('list messages', this.messages);
				this.newText = '';
			} else this.newText = '';
		},

		listener(...content) {
			console.log('content:', content);
			console.log('content2');
			this.messages.push(JSON.parse(content));
		},
	},

	async created() {
		this.userId = parseInt(localStorage.getItem('userId'));
		console.log('userid', { userId: this.userId });
		// receive event, param from RoomList.js
		this.emitter.on('on-transfer-room-data', async (roomData) => {
			// console.log('roomData', roomData);

			this.roomName = roomData.currentRoomName;
			this.roomId = roomData.currentRoomId;
			try {
				let response = await ApiService.getMessageOfRoom(this.roomId);
				console.log('Response:', response);
			} catch (error) {
				console.log('Error roi ne: ', error);
			}
		});
		// console.log(socketClient);
		socketClient.on(
			'receive_message',
			this.listener
			// console.log('nhan messages:', this.messages);
		);
	},

	unmounted() {
		socketClient.removeOn(
			'receive_message',
			this.listener
			// console.log('sdfafas');
		);
	},
};
