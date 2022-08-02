import FomrInput from "../../components/FormInput/FormInput.vue";

export default {
    name: "LoginPage",
    components: {
        FomrInput,
    },
    data() {
        return {
            inputInfos: [{
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
        }
    },
    methods: {
        toggleShow() {
            // this.inputInfos[1].type = this.inputInfos[1].type === "text" ? "password" : "text";
            // if type = text -> convert type = password and vice_versa
            if (this.inputInfos[1].type == "text") {
                this.inputInfos[1].type = "password"
            } else {
                this.inputInfos[1].type = "text"
            }
        },
        computed: {},
    }
}