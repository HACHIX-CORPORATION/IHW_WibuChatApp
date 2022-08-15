export default {
	name: 'SideBar',
	data() {
		return {
			routes: [{ name: 'Home', url: '/' }],
			Lists: [],
			newRoom: '',
			createNew: 'Create new room',
			roomHeader: 'All rooms',
		};
	},
	methods: {
		onSignout() {
			this.$router.push({ name: 'Home' });
		},
		addNewRoom() {
			if (this.newRoom != '') {
				this.Lists.push(this.newRoom);
				console.log(`new room ${this.newRoom} created`);
				this.newRoom = '';
			} else this.newRoom;
		},
	},
};
