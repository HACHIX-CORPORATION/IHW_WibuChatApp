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
		};
	},

	methods: {
		addNewRoom() {
			// alert(typeof this.newRoom);
			this.$emit('addNewRoom', this.newRoomName);
			this.newRoomName = '';
		},
		onJoin(room) {
			// get data from local storage to use
			let userId = localStorage.getItem('userId');
			this.emitter.emit('on-transfer-room-name',  room.room_name)
			socketClient.emit('join', {
				room: room.room_name,
				userID: userId,
			});
		},
	},
	mounted() {
		socketClient.on('msg_room', function (data) {
			console.log({ thongbao: data });
		});
	},
};
