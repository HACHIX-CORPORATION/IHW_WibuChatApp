import RoomList from '../RoomList/RoomList.vue';
import ApiService from '@/service/API/api.service';
import socketClient from '@/service/Socket';

export default {
	name: 'SideBar',
	components: { RoomList },
	data() {
		return {
			routes: [{ name: 'Home', url: '/' }],
			newRoom: '',
			rooms: [],
			title: 'Create new room',
		};
	},
	methods: {
		onSignout() {
			// delete data when logout
			localStorage.removeItem('userId');
			socketClient.removeOn('join');
			this.$router.push({ name: 'Home' });
		},
		// khi resolve thì sẽ auto add room mới tạo vào DB cho dù rỗng hay không
		async addNewroom(newName) {
			if (newName == '') {
				alert('Room name can not be empty');
			} else {
				if (
					this.rooms.filter((room) => room.room_name === newName)
						.length > 0
				) {
					alert('This room already existed !!!');
				} else {
					try {
						// assign response to POST request
						let response = await ApiService.addNewRoom(newName);
						console.log('response:', { reponse: response });
						if (response.status === 200) {
							this.rooms.push({ room_name: newName,  });
							console.log({ asfasfs: this.rooms });
						} else console.log('Them phong khong thanh cong');
					} catch (error) {
						console.log('Error', { error: error });
					}
				}
			}
		},
	},
	// GET all room and show in the screen
	async created() {
		try {
			let response = await ApiService.getAllRoom();
			// console.log({ allRoom: response.data });
			this.rooms = response.data;
		} catch (error) {
			console.log({
				Error: error,
			});
		}
	},
};
