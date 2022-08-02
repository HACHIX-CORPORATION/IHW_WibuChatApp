import FormInput from "@/components/FormInput/FormInput.vue";
import ImageSelect from "@/components/ImageSelect/ImageSelect.vue";

export default {
	name: "SignupPage",
	components: {
		FormInput,
		ImageSelect,
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
					isPassword: true,
				},
				{
					title: "rePassword",
					icon: "shield",
					type: "password",
					info: "",
				},
				{
					title: "Telephone",
					icon: "phone",
					type: "text",
					info: "",
				},
				{
					title: "Mail",
					icon: "envelope",
					type: "text",
					info: "",
				},
				{
					title: "D.O.B",
					icon: "cake-candles",
					type: "date",
					info: "",
				},
			],
			disableBtn: true,
			imagePreview: "",
			images: [
				{
					id: 1,
					url: "02.jpg",
				},
				{
					id: 2,
					url: "akame.jpg",
				},
				{
					id: 3,
					url: "aqua.jpg",
				},
				{
					id: 4,
					url: "asuna.jpg",
				},
				{
					id: 5,
					url: "dark_saber.jpg",
				},
				{
					id: 6,
					url: "hanezawa.jpg",
				},
				{
					id: 7,
					url: "maisakurajima.jpg",
				},
				{
					id: 8,
					url: "natusme2.jpg",
				},
				{
					id: 9,
					url: "rem.jpg",
				},
			],
		};
	},
	methods: {
		onChangeInput(data) {
			console.log(data);
			// gan info = gia tri nhap vao moi <input> tag
			this.inputInfos[data.index].info = data.content;
		},
		displaySubmit() {
			this.disableBtn = !this.disableBtn;
		},
		// check All input field
		doneRegister() {
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
			//check input field when placeholder not empty
			else {
				if (this.inputInfos[0].info.length < 4) {
					alert("Username length too short");
				} else if (
					// check password validation
					this.inputInfos[1].info.length < 8 ||
					this.inputInfos[1].info.length > 16 ||
					this.inputInfos[1].info === this.inputInfos[1].info.toLowerCase() ||
					this.inputInfos[1].info ===
						this.inputInfos[1].info.replace(/[^\w ]/, "")
				) {
					// check confirm password if match password or not
					alert("Password wrong format");
				} else if (this.inputInfos[2].info !== this.inputInfos[1].info) {
					alert("repassword not match");
				} else if (
					// check mail validation
					!this.inputInfos[4].info.match(
						/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
					)
				) {
					alert("Mail invalid context");
				} else {
					// switch page after finish register
					alert("Register successfully, go to login page");
					window.location = "/login";
					// console.log(typeof this.dobInfo);
				}
			}
		},
	},
	computed: {},
};
