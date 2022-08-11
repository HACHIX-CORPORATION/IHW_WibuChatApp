import FormInput from "@/components/FormInput/FormInput.vue";
import ImageSelector from "@/components/ImageSelector/ImageSelector.vue";
import Constant from "@/constant/Constant";
import axios from "axios";

const baseUrl = "http://127.0.0.1:5000";
axios.defaults.headers = {
	"Cache-Control": "no-cache",
	Pragma: "no-cache",
	Expires: "0",
};

export default {
	name: "SignupPage",
	components: {
		FormInput,
		ImageSelector,
	},

	data() {
		return {
			routes: [{ name: "Login", url: "/login" }],
			caption: "Choose your waifu",
			inputInfos: Constant.REGISTER_INFOS,
			invalid: true,
			imagePreview: "",
			images: Constant.AVATAR_IMAGES,
			userName: "",
			passWord: "",
			rePassword: "",
			telephoneNum: "",
			mailAdd: "",
			dobInfo: "",
			avatarImage: "",
		};
	},
	methods: {
		displaySubmit() {
			this.invalid = !this.invalid;
		},
		async onSubmit() {
			if (this.inputInfos[0].info == "") {
				alert("Please insert username");
			} else if (this.inputInfos[1].info == "") {
				alert("Please insert password");
			} else if (this.inputInfos[2].info == "") {
				alert("Please insert re-password");
			} else if (this.inputInfos[3].info == "") {
				alert("Please insert telephone");
			} else if (this.inputInfos[4].info == "") {
				alert("Please insert mail");
			} else if (this.inputInfos[5].info == "") {
				alert("Please insert date of birth");
			}
			// If not empty, then check validation of every field
			else {
				if (
					this.inputInfos[0].info.length < 4 ||
					this.inputInfos[0].info.length > 16
				) {
					alert("Username length must contain 4-16 characters");
				} else if (
					this.inputInfos[1].info.length < 8 ||
					this.inputInfos[1].info.length > 16 ||
					this.inputInfos[1].info === this.inputInfos[1].info.toLowerCase() ||
					this.inputInfos[1].info ===
						this.inputInfos[1].info.replace(/[^\w ]/, "")
				) {
					alert("Password invalid");
				} else if (this.inputInfos[2].info !== this.inputInfos[1].info) {
					alert("Confirm password must match with password");
				} else if (
					!this.inputInfos[4].info.match(
						/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
					)
				) {
					alert("Mail invalid");
				} else {
					try {
						let response = await axios.post(baseUrl + "/register", {
							username: this.userName,
							password: this.passWord,
							rePassword: this.rePassword,
							telephone: this.telephoneNum,
							mail: this.mailAdd,
							date: this.dobInfo,
							avatar: this.avatarImage,
						});
						console.log(response);
						if (response.status === 200) {
							alert("Register successfully !");
							this.$router.push("login");
						} else {
							throw new Error("register failed");
						}
					} catch (error) {
						alert("Register failed !!!!");
						console.log(error);
						console.log(error);
					}
				}
			}
		},
		inputSubmit(inputValue) {
			if (inputValue.index === 0) {
				this.userName = inputValue.content;
			}
			if (inputValue.index === 1) {
				this.passWord = inputValue.content;
			}
			if (inputValue.index === 2) {
				this.rePassword = inputValue.content;
			}
			if (inputValue.index === 3) {
				this.telephoneNum = inputValue.content;
			}
			if (inputValue.index === 4) {
				this.mailAdd = inputValue.content;
			}
			if (inputValue.index === 5) {
				this.dobInfo = inputValue.content;
			}
			this.inputInfos[inputValue.index].info = inputValue.content;
			// console.log(inputValue);
			console.log({
				username: this.userName,
				password: this.passWord,
				repassword: this.rePassword,
				telephone: this.telephoneNum,
				mail: this.mailAdd,
				date: this.dobInfo,
			});
		},
		// check all input field'value is empty
	},
};
