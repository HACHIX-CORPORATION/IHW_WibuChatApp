import FomrInput from "../../components/FormInput/FormInput.vue";
import Constant from "@/constant/Constant"; // import file contain variables

export default {
	name: "LoginPage",
	components: {
		FomrInput,
	},
	data() {
		return {
			routes: [{ name: "Lobby", url: "/lobby" }],
			inputInfos: [Constant.REGISTER_INFOS[0], Constant.REGISTER_INFOS[1]],
		};
	},

	methods: {
		onShow() {
			// if type = text -> convert type = password and vice_versa
			if (this.inputInfos[1].type == "text") {
				this.inputInfos[1].type = "password";
			} else {
				this.inputInfos[1].type = "text";
			}
		},
		onLogin() {
			this.$router.push({ name: "Lobby" });
		},
		computed: {},
	},
};
