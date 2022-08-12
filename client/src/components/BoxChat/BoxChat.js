import BoxMain from "../../components/BoxMain/BoxMain.vue";
import Constant from "@/constant/Constant";
export default {
	name: "BoxChat",
	components: { BoxMain },
	data() {
		return {
			placeholderText: Constant.PLACEHOLDER_TEXT,
			appName: "Wichat",
		};
	},
};
