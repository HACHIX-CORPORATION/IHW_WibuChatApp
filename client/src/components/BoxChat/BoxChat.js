import socketClient from "@/service/Socket";

export default {
	name: 'BoxChat',
	data() {
		return {
			appName: 'Wichat',
			newText: '',
			messengerList: [],
		};
	},
	methods: {
		sendMess() {
			let userId = localStorage.getItem('userId')
			socketClient.emit('chat_room', {
				mess: newText,
				room: ,
				userID: userId,
			})
			// check noi dung co phai la empty hay khong thi moi push
			if (this.newText != '') {
				this.messengerList.push(this.newText);
				this.newText = '';
			} else this.newText = '';
		},
	},
};
