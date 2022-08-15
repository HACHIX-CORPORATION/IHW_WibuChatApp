import RoomList from '../RoomList/RoomList.vue';
export default {
    name: 'SideBar',
    components: { RoomList },
    data() {
        return {
            routes: [{ name: 'Home', url: '/' }],
            newRoom: '',
            Lists: [],
            title: 'Create new room',
            roomHeader: 'All rooms',
        };
    },
    methods: {
        onSignout() {
            this.$router.push({ name: 'Home' });
        },
        addNew(roomName) {
            if (this.newRoom != roomName) {
                this.Lists.push(roomName);
            }
        },
    },
};