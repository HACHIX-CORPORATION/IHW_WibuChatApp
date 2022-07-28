<template>
  <div class="register">
    <div class="register__form">
      <div class="register__form-header">LET JOIN US WIBUS</div>
      <div class="register__form-infos">
        <div class="register__form-info">
          <div class="register__form-info__tab">
            <div class="register__form-info__tab1">
              <h4>Username</h4>
              <input
                type="text"
                placeholder=""
                name="text1"
                v-model="userName"
              />
              <h4>Password</h4>
              <input
                title="Password must contains 8 to 16 characters, an UPPERCASE and at least one special character! "
                type="password"
                placeholder=""
                v-model="passWord"
              />
              <h4>rePassword</h4>
              <input type="password" placeholder="" v-model="repassWord" />
              <h4>Telephone</h4>
              <input type="text" placeholder="" v-model="telephoneNum" />
              <h4>Mail</h4>
              <input type="email" placeholder="" v-model="mailAdd" />
              <div class="register__form-birthday">
                <h4 for="birthday">Birthday</h4>
                <input
                  type="date"
                  id="birthday"
                  name="birthday"
                  v-model="dobInfo"
                />
              </div>
            </div>
            <div class="register__form-info__tab2">
              <img
                class="register__avatar-preview"
                :src="require(`../../assets/${imagePreview}`)"
                alt="choose avatar"
              />
              <div class="register__avatar-selectbox">
                <img
                  v-for="image in images"
                  :key="image.id"
                  :src="require(`../../assets/${image.url}`)"
                  alt=""
                  @click="chooseAva"
                />
              </div>
            </div>
            <!-- <div class="submit__checkbox">
              <input type="checkbox" v-on:click="displaySubmit" />
              <p>
                I agree to the Terms and Conditions and the Privacy Policy of
                this site.
              </p>
            </div>
            <button
              class="submit-button"
              :disabled="disableBtn"
              @click="doneRegister"
            >
              Submit
            </button> -->
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

<script src="./SignupPage.js">
</script>

<style src="./SignupPage.css" scoped>
</style>