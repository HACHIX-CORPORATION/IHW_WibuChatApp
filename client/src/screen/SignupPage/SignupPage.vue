<template>
  <div class="register">
    <div class="register__form">
      <div class="register__header">LET JOIN US WIBUS</div>
      <div class="register__infos">
        <div class="register__info">
          <div class="register__info--blocks">
            <div class="register__infocontainer">
              <div class="register__infocontainer--block1">
                <FormInput
                  :title="input.title"
                  :icon="input.icon"
                  :type="input.type"
                  v-for="(input, index) in inputInfos"
                  :key="index"
                />
              </div>
              <div class="register__infocontainer--block2">
                <ImageSelect />
              </div>
            </div>
            <div class="submit__checkbox">
              <input type="checkbox" @click="displaySubmit" />
              <p>
                I agree to the Terms and Conditions and the Privacy Policy of
                this site.
              </p>
            </div>
            <button
              class="submit--button"
              :disabled="disableBtn"
              @click="doneRegister"
            >
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

<script src="./SignupPage.js">
</script>

<style src="./SignupPage.css" scoped>
</style>
