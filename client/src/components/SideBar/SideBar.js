import RoomList from '../RoomList/RoomList.vue';
// import axios from 'axios';
import ApiService from '@/service/API/api.service';

// const baseUrl = 'http://127.0.0.1:5000';
// axios.defaults.headers = {
// 	'Cache-Control': 'no-cache',
// 	Pragma: 'no-cache',
// 	Expires: '0',
// };

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
			this.$router.push({ name: 'Home' });
		},
		// khi resolve thì sẽ auto add room mới tạo vào DB cho dù rỗng hay không
		async addNewroom(newName) {
			try {
				if (newName == '') {
					alert('Room name can not be empty');
				} else {
					if (
						this.rooms.filter((room) => room.roomName === newName)
							.length > 0
					) {
						console.log('da ton tai phong');
						alert('This room already existed !!!');
					} else {
						let response = await ApiService.addNewRoom(newName);
						console.log('response:', { reponse: response });
						if (response.status === 200) {
							this.rooms.push({ roomName: newName });
							console.log({ asfasfs: this.rooms });
						} else console.log('Them phong khong thanh cong');
					}
				}
				// assign response to POST request
			} catch (error) {
				// when async caught every error (with status: 404 or 500)
				if (newName == '') {
					console.log(error);
					alert('Room name cannot be emtpy');
				}
			}
		},
	},
	// GET all room and show in the screen
	async created() {
		try {
			let rooms = await ApiService.getAllRoom();
			this.rooms = rooms;
		} catch (error) {
			console.log('hello' + error);
		}
	},
};
