import FomrInput from "../../components/FormInput/FormInput.vue";

export default {
	name: "LoginPage",
	components: {
		FomrInput,
	},
	data() {
		return {
			inputInfos: [
				{
					title: "Username",
					icon: "user",
					type: "text",
					info: "",
				},
				{
					title: "Password",
					icon: "key",
					type: "password",
					info: "",
				},
			],
		};
	},
	methods: {
		toggleShow() {
			if ((this.inputInfos[1].type = "password")) {
				this.inputInfos[1].type = "text";
			}
			// console.log(this.$refs["form"]);
			// this.$refs.Password.onClick();
			// this.showPassword = !this.showPassword;
		},
	},
	computed: {},
};
