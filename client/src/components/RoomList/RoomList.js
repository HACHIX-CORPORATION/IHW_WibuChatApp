export default {
	name: 'RoomLists',

		addNewRoom() {
			// alert(typeof this.newRoom);
			this.$emit('addNewRoom', this.newRoomName);
			this.newRoomName = '';
		},
	},
};
