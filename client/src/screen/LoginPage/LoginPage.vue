<template>
  <div class="login">
    <div class="login__form">
      <div class="login__form-header">LOGIN</div>
      <form>
        <div class="login__form-infos">
          <div class="login__form-info">
            <FomrInput
              v-for="(input, index) in inputInfos"
              :info="input.info"
              :title="input.title"
              :icon="input.icon"
              :type="input.type"
              :key="index"
            />
            <fa id="fas" icon="eye" @click="onShow" />
            <button class="submit--button">Login</button>
          </div>
          <div class="login__footer">
            <!-- 1 way to use router-link to change page without having href -->
            <router-link :to="'/signup'">You don't have account ??</router-link>
            <a href="">Forgot password</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script src="./LoginPage.js">
</script>

<style scoped>
#fas:hover {
  cursor: pointer;
}

.login {
  display: flex;
  background-image: url("../../assets/register_bgr.webp");
  background-size: cover;
  width: 100%;
  height: 100vh;
  background-color: rgba(158, 153, 153, 0.5);
}
#fas {
  padding-left: 12%;
}

.login__form {
  border-radius: 5px;
  margin: auto;
  background-color: #36393f;
  width: 40%;
}

.login__form-infos {
  width: 80%;
  padding-bottom: 20px;
}

.login__form-header {
  font-weight: 800;
  margin-top: 3%;
  text-align: center;
  font-family: cursive;
  color: aliceblue;
}

h4 {
  margin-bottom: 5px;
  font-size: 14px;
  margin-top: 15px;
}

input {
  height: 36px;
  font-size: 16px;
  border-radius: 5px;
  color: #fff;
  background-color: #202225;
  width: 100%;
}

form {
  color: #b9bbbe;
  display: flex;
  justify-content: center;
}

.login__form-birthday {
  font-weight: 400;
  margin-bottom: 20px;
}

.submit--button {
  margin-top: 30px;
  color: #fff;
  background-color: #5865f2;
  border-color: transparent;
  border-radius: 5px;
  padding: 5px 0;
  width: 100%;
}

.submit-button:hover {
  background-color: #5865f2c4;
}

a {
  color: #00aff4;
  text-decoration-style: none;
  font-size: 12px;
}

.login__footer {
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
</style>