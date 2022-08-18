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
		async addNewroom(newName) {
			try {
				await ApiService.addNewRoom(newName);
				// console.log('day la' , response );
				if (this.newRoom != newName) {
					// push vao 1 object co key la roomName
					this.rooms.push({ roomName: newName });
				}
				// console.log('day la response data' + response.data);
				console.log(`New room "${newName}" created`);
			} catch (error) {
				// kiem tra phong da ton tai hay chua
				if (error.response.status === 400) {
					console.log(error);
					alert('This room already existed !');
				}
			}
		},
	},
	// GET all room and show in the screen
	async created() {
		try {
			let rooms = await ApiService.getAllRoom();
			// log ra dang object
			this.rooms = rooms;
		} catch (error) {
			console.log('hello' + error);
		}
	},
};
