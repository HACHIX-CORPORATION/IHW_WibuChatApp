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
			value: 0,
			inputInfos: [
				{
					title: "Username",
					icon: "user",
					type: "text",
				},
				{
					title: "Password",
					icon: "key",
					type: "text",
				},
				{
					title: "rePassword",
					icon: "shield",
					type: "text",
				},
				{
					title: "Telephone",
					icon: "phone",
					type: "text",
				},
				{
					title: "Mail",
					icon: "envelope",
					type: "text",
				},
				{
					title: "D.O.B",
					icon: "cake-candles",
					type: "text",
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
		// chooseAva(image) {
		// 	// this.imagePreview = images;
		// 	console.log("You have chosen", image);
		// },
	},
	computed: {},
};
