<template>
  <form-input></form-input>
  <!-- <div class="register">
    <div class="register__form">
      <div class="register__header">LET JOIN US WIBUS</div>
      <div class="register__infos">
        <div class="register__info">
          <div class="register__info--tab">
            <div class="register__infocontainer">
              <div class="register__infocontainer--tab1">
                <UsernameForm />
                <PasswordForm />
                <RepasswordForm />
                <TelephoneForm />
                <MailForm />
                <DobForm />
              </div>

              <div class="register__infocontainer--tab2">
                <caption>
                  Choose your waifu
                </caption>
                <img class="register__infocontainer--preview" :src="require(`../../assets/${imagePreview}`)"
                  alt="choose avatar" />
                <div class="register__avatar- -selectbox">
                  <img v-for="image in images" :key="image.url" :src="require(`../../assets/${image.url}`)" alt=""
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
  </div> -->
</template>

<script src="./SignupPage.js"></script>

<style src="./SignupPage.css" scoped>
</style>