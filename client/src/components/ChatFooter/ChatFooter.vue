<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__container-info">
        <h2>WE ARE WICHAT</h2>
        <div class="footer__container-social">

        </div>
      </div>
      <div class="footer__container-section">
        <div class="footer__container-product">
          <h3>Product</h3>
          <ul>
            <li>Download</li>
            <li>Nitro</li>
            <li>Status</li>
          </ul>
        </div>
        <div class="footer__container-company">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Jobs</li>
            <li>Branding</li>
            <li>News</li>
          </ul>
        </div>
        <div class="footer__container-resources">
          <h3>Resources</h3>
          <ul>
            <li>Support</li>
            <li>Blog</li>
            <li>Feedback</li>
            <li>Safety</li>
            <li>StreamKit</li>
          </ul>
        </div>
        <div class="footer__container-policies">
          <h3>Policy</h3>
          <ul>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookie settings</li>
            <li>Guideline</li>
            <li>Licenses</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatFooter",
};
</script>

<style>
.footer__container {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
}

.footer {
  display: flex;
  justify-content: center;
  height: 40vh;
  width: 100vw;
  background-color: #23272a;
}

h2 {
  line-height: 12px;
  display: inline;
  color: white;
  font-size: 40px;
}

h3 {
  font-size: 20px;
  color: #0d6ed6;
  margin-top: 10px;
}

p {
  color: white;
}

.footer__container-info {
  width: 30%;
  font-family: monospace;
  /* font-size: 80px; */
}

.footer__container-section {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: white;
  width: 60%;
}

li {
  font-size: 15px;
  padding-left: 0;
}

ul {
  padding: 0 0 0 0;
  margin-top: 20px;
  list-style-type: none;
}
</style>