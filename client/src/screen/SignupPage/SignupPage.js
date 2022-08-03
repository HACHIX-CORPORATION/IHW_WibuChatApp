import FormInput from "@/components/FormInput/FormInput.vue";
import ImageSelector from "@/components/ImageSelector/ImageSelector.vue";
import Constant from "@/constant/Constant";

export default {
	name: "SignupPage",
	components: {
		FormInput,
		ImageSelector,
	},

	data() {
		return {
			caption: "Choose your waifu",
			inputInfos: Constant.REGISTER_INFOS,
			disableBtn: true,
			imagePreview: "",
			images: Constant.AVATAR_IMAGES,
		};
	},
	methods: {
		onChangeInput(data) {
			console.log(data);
			// gan info = gia tri nhap vao moi <input> tag
			Constant.REGISTER_INFOS[data.index].info = data.content;
		},
		displaySubmit() {
			this.disableBtn = !this.disableBtn;
		},
		// check All input field
		onSubmit() {
			var text = "Please insert ";
			for (let i = 0; i < Constant.REGISTER_INFOS.length; i++) {
				if (Constant.REGISTER_INFOS[i].info == "") {
					text = text + Constant.REGISTER_INFOS[i].title.toLowerCase() + ", ";
				}
			}
			if (this.usernameValidate(Constant.REGISTER_INFOS[0].info)) {
				alert(text);
				return true;
			}
			// alert("Registration Failed!");
			return false;
		},
		usernameValidate(username) {
			if (username.length < 4) {
				alert("Username is too short");
				return false;
			}
			return true;
		},
		passwordValidate() {
			// check password validation
			if (
				Constant.REGISTER_INFOS[1].info.length < 8 ||
				Constant.REGISTER_INFOS[1].info.length > 16 ||
				Constant.REGISTER_INFOS[1].info ===
					Constant.REGISTER_INFOS[1].info.toLowerCase() ||
				Constant.REGISTER_INFOS[1].info ===
					Constant.REGISTER_INFOS[1].info.replace(/[^\w ]/, "")
			) {
				alert("Password invalid");
				return false;
			}
		},
		repassValidate() {
			if (Constant.REGISTER_INFOS[2].info !== Constant.REGISTER_INFOS[1].info) {
				alert("rePassword not match Password");
				return false;
			}
		},
		mailValidate() {
			if (
				!Constant.REGISTER_INFOS[4].info.match(
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				)
			) {
				alert("Mail invalid");
				return false;
			}
		},
		// else {
		// 		if (Constant.REGISTER_INFOS[0].info.length < 4) {
		// 			alert("Username length too short");
		// 		} else if (
		// 			// check password validation
		// 			Constant.REGISTER_INFOS[1].info.length < 8 ||
		// 			Constant.REGISTER_INFOS[1].info.length > 16 ||
		// 			Constant.REGISTER_INFOS[1].info ===
		// 				Constant.REGISTER_INFOS[1].info.toLowerCase() ||
		// 			Constant.REGISTER_INFOS[1].info ===
		// 				Constant.REGISTER_INFOS[1].info.replace(/[^\w ]/, "")
		// 		) {
		// 			// check confirm password if match password or not
		// 			alert("Password wrong format");
		// 		} else if (
		// 			Constant.REGISTER_INFOS[2].info !== Constant.REGISTER_INFOS[1].info
		// 		) {
		// 			alert("repassword not match");
		// 		} else if (
		// 			// check mail validation
		// 			!Constant.REGISTER_INFOS[4].info.match(
		// 				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		// 			)
		// 		) {
		// 			alert("Mail invalid context");
		// 		} else {
		// 			// switch page after finish register
		// 			alert("Register successfully, go to login page");
		// 			window.location = "/login";
		// 		}
		// 	}
	},
};
