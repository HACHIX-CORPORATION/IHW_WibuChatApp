<template>
    <div class="register">
        <div class="register__form">
            <div class="register__header">LET JOIN US WIBUS</div>
            <div class="register__infos">
                <div class="register__info">
                    <div class="register__info--tab">
                        <div class="register__infocontainer">
                            <div class="register__infocontainer--tab1">
                                <label>Username</label>
                                <input type="text" placeholder="" name="text1" v-model="userName" />
                                <label>Password</label>
                                <input
                                    title="Password must contains 8 to 16 characters, an UPPERCASE and at least one special character! "
                                    type="password" placeholder="" v-model="passWord" />
                                <label>rePassword</label>
                                <input type="password" placeholder="" v-model="repassWord" />
                                <label>Telephone</label>
                                <input type="text" placeholder="" v-model="telephoneNum" />
                                <label>Mail</label>
                                <input type="email" placeholder="" v-model="mailAdd" />
                                <div class="register__form-birthday">
                                    <label for="birthday">Birthday</label>
                                    <input type="date" id="birthday" name="birthday" v-model="dobInfo" />
                                </div>
                            </div>
                            <div class="register__infocontainer--tab2">
                                <caption>
                                    Choose your waifu
                                </caption>
                                <img class="register__infocontainer--preview"
                                    :src="require(`../../assets/${imagePreview}`)" alt="choose avatar" />
                                <div class="register__avatar--selectbox">
                                    <img v-for="image in images" :key="image.url"
                                        :src="require(`../../assets/${image.url}`)" alt=""
                                        @click="chooseAva(image.url)" />
                                </div>
                            </div>
                        </div>
                        <div class="submit__checkbox">
                            <input type="checkbox" @click="displaySubmit" />
                            <p>
                                I agree to the Terms and Conditions and the Privacy Policy of
                                this site.
                            </p>
                        </div>
                        <button class="submit--button" :disabled="disableBtn" @click="doneRegister">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <div class="register__footer">
                <a href="http://localhost:8080/login">Already have an account ?</a>
                <p>
                    By registering, you agree to Wichat's
                    <span>Term of services</span> and <span>Privacy Policy</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FormInput",
    data()
    {


    }
}
</script>

<style src="./FormInput.css">
</style>