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
			invalid: true,
			imagePreview: "",
			images: Constant.AVATAR_IMAGES,
		};
	},
	methods: {
		onChangeInput(data) {
			this.inputInfos[data.index].info = data.content;
		},
		displaySubmit() {
			this.invalid = !this.invalid;
		},
		onSubmit() // check all input field'value is empty
		{
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
					alert("Register successfully !");
					this.$router.push("login");
				}
			}
		},
	},
};
