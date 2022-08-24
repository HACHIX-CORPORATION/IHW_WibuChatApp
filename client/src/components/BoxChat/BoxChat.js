import socketClient from '@/service/Socket';

export default {
	name: 'BoxChat',
	data() {
		return {
			appName: 'Wichat',
			newText: '',
			messengerList: [],
			roomName: '',
		};
	},
	methods: {
		sendMess() {
			let userId = localStorage.getItem('userId');
			socketClient.emit('chat_room', {
				mess: this.newText,
				room: this.roomName,
				userID: userId,
			});
			console.log({
				mess: this.newText,
				room: this.roomName,
				userID: userId,
			});
			// check noi dung co phai la empty hay khong thi moi push
			if (this.newText != '') {
				this.messengerList.push(this.newText);
				this.newText = '';
			} else this.newText = '';
		},
	},
	created() {
		this.emitter.on('on-transfer-room-name', (currentRoomName) => {
			console.log('Room: ', { roomName: currentRoomName }, ' joined');
			this.roomName = currentRoomName;
		});
	},
};
