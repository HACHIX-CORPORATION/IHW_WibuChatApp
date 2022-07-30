import FormInput from '../../components/FormInput/FormInput.vue'
export default {
    name: "SignupPage",
    components: { FormInput },
    data() {
        return {
            userName: "thanhduy",
            passWord: "Hackifucan1!",
            repassWord: "Hackifucan1!",
            telephoneNum: "234234234243",
            mailAdd: "duy@gmail.com",
            dobInfo: "1998-09-11",
            disableBtn: true,
            imagePreview: "02.jpg",
            images: [{
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
        chooseAva(data) {
            console.log("shajkdhasjkhdashkdsja", data);
            this.imagePreview = data;
        },
        displaySubmit() {
            this.disableBtn = !this.disableBtn;
        },
        // check All input field
        doneRegister() {
            if (this.userName == "") {
                alert("Please insert username");
            } else if (this.passWord == "") {
                alert("Please insert password");
            } else if (this.repassWord == "") {
                alert("Please insert re-password");
            } else if (this.telephoneNum == "") {
                alert("Please insert telephone");
            } else if (this.mailAdd == "") {
                alert("Please insert mail");
            } else if (this.dobInfo == "") {
                alert("Please insert date of birth");
            }
            //check input field when placeholder not empty
            else {
                if (this.userName.length < 4) {
                    alert("too short");
                } else if (
                    // check password validation
                    this.passWord.length < 8 ||
                    this.passWord.length > 16 ||
                    this.passWord === this.passWord.toLowerCase() ||
                    this.passWord === this.passWord.replace(/[^\w ]/, "")
                ) {
                    // check confirm password if match password or not
                    alert("Password wrong format");
                } else if (this.repassWord !== this.passWord) {
                    alert("repassword not match");
                } else if (
                    // check mail validation
                    !this.mailAdd.match(
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