<template>
  <div class="login">
    <div class="login__form">
      <div class="login__form-header">LOGIN</div>
      <form>
        <div class="login__form-infos">
          <div class="login__form-info">
            <div class="login__form-info__tab">
              <h4>Username</h4>
              <input type="text" placeholder="" />
              <h4>Password</h4>
              <input type="text" placeholder="" />
              <button class="submit-button">Login</button>
            </div>
          </div>
          <div class="login__footer">
            <a href="http://localhost:8080/signup">You don't have account ??</a>
            <a href="">Forgot password</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.login {
  display: flex;
  background-image: url("../../assets/register_bgr.webp");
  width: 100%;
  height: 100vh;
  background-color: rgba(158, 153, 153, 0.5);
}
.login__form {
  border-radius: 5px;
  margin: auto;
  background-color: #36393f;
  width: 40%;
  height: 40%;
}
.login__form-infos {
  width: 80%;
}
.login__form-header {
  font-weight: 800;
  margin-top: 3%;
  text-align: center;
  font-family: cursive;
  color: aliceblue;
}
.register__form-info__tab {
  margin: 20px 0;
  color: #b9bbbe;
  display: flex;
  flex-direction: column;
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
.submit-button {
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
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
</style>