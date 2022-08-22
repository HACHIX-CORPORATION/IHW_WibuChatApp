export default {
	name: 'RoomLists',
	props: {
		newroom: {
			type: String,
		},
		lists: {
			type: Array,
		},
		//
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
	},
};
