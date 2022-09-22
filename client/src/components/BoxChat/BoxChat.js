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
			messages: [],
			roomName: '',
			roomId: '',
			isSender: true,
			userId: '',
		};
	},
	methods: {
		sendMess() {
			let userId = parseInt(localStorage.getItem('userId'));
			// let userName = localStorage.getItem('userName');
			socketClient.emit('send_message', {
				mess: this.newText,
				room_name: this.roomName,
				user_id: userId,
			});

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
			let receiverMess = JSON.parse(content);
			this.messages.push({
				mess: receiverMess.mess,
				userId: receiverMess.user_id,
				userName: receiverMess.user_name,
			});
		},
	},

	async created() {
		this.userId = parseInt(localStorage.getItem('userId'));
		console.log('userid', { userId: this.userId });
		// receive event, param from RoomList.js
		this.emitter.on('on-transfer-room-data', async (roomData) => {
			this.roomName = roomData.currentRoomName;
			this.roomId = roomData.currentRoomId;
			try {
				let response = await ApiService.getMessageOfRoom(this.roomId);
				console.log('Response:', response);
			} catch (error) {
				console.log('Error roi ne: ', error);
			}
		});
		socketClient.on('receive_message', this.listener);
	},

	unmounted() {
		socketClient.removeOn('receive_message', this.listener);
	},
};
