import FomrInput from "../../components/FormInput/FormInput.vue";
import Constant from "@/constant/Constant"; // import file contain variables
import axios from "axios";

const baseUrl = "http://127.0.0.1:5000";
// const baseUrl = "localhost:5000";

axios.defaults.headers = {
	"Cache-Control": "no-cache",
	Pragma: "no-cache",
	Expires: "0",
};

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
		async onLogin() {
			try {
				// this.$router.push({ name: "Lobby" });
				let response = await axios.post(baseUrl + "/login", {
					username: "fsdf",
					password: "sdafasfsdf",
				});
				console.log({ response });
			} catch (error) {
				console.log(error);
			}
		},
		computed: {},
	},
};
