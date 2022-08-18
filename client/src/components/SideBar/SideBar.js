import RoomList from '../RoomList/RoomList.vue';
import axios from 'axios';
import ApiService from '@/service/API/api.service';

const baseUrl = 'http://127.0.0.1:5000';
axios.defaults.headers = {
	'Cache-Control': 'no-cache',
	Pragma: 'no-cache',
	Expires: '0',
};

export default {
	name: 'SideBar',
	components: { RoomList },
	data() {
		return {
			routes: [{ name: 'Home', url: '/' }],
			newRoom: '',
			roomLists: [],
			title: 'Create new room',
		};
	},
	methods: {
		onSignout() {
			this.$router.push({ name: 'Home' });
		},
		async addNewroom(newname) {
			try {
				let response = await axios.post(baseUrl + '/room', {
					roomName: newname,
				});
				if (this.newRoom != newname) {
					// push vao 1 object co key la roomName
					this.roomLists.push({ roomName: newname });
				}
				console.log('day la response data' + response.data);
				console.log(`New room "${newname}" created`);
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
			this.roomLists = rooms;
		} catch (error) {
			console.log('hello' + error);
		}
	},
};
