export default {
	name: "SideBar",
	data() {
		return {
			routes: [{ name: "Home", url: "/" }],
		};
	},
	methods: {
		onSignout() {
			this.$router.push({ name: "Home" });
		},
	},
	computed: {},
};
