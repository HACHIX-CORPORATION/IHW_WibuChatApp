import socketClient from '../../service/Socket';

export default {
	name: 'RoomLists',
	props: {
		newroom: {
			type: String,
		},
		lists: {
			type: Array,
		},
	},
	data() {
		return {
			newRoomName: '',
			selectedRoomId: '',
		};
	},

	methods: {
		addNewRoom() {
			// alert(typeof this.newRoom);
			this.$emit('addNewRoom', this.newRoomName);
			this.newRoomName = '';
		},
		onJoin(room) {
			/*
			room = {
				room_name: String,
				room_id: Number
			} 
			*/

			// get data from local storage to use
			let userId = localStorage.getItem('userId');
			// send event, param to BoxChat.js
			this.emitter.emit('on-transfer-room-data', {
				currentRoomName: room.room_name,
				currentRoomId: room.room_id,
			});
			console.log(room);
			this.selectedRoomId = room.room_id;
			socketClient.emit('join', {
				room_name: room.room_name,
				user_id: userId,
			});
		},
	},
	created() {
		socketClient.on('new_message', function (data) {
			console.log({ thongbao: data });
		});
	},
};
