<template>
  <div class="header">
    <div class="hero">
      <h4>Wichat</h4>
      <img src="../../assets/logopage-removebg.png" alt="" />
    </div>
    <div class="register">
      <button
        v-for="item in pageItems"
        :key="item.name"
        @click="gotoPage(item.name)"
      >
        {{ item.name }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatHeader",
  data() {
    return {
      pageItems: [
        { name: "Login", url: "/login" },
        { name: "Signup", url: "/signup" },
      ],
    };
  },
  methods: {
    //go to login and register page
    gotoPage(Name) {
      this.$router.push({ name: Name });
    },
  },
};
</script>

<style scoped>
button {
  
  font-size:20px;
  font-family: ui-monospace;
  padding: 0 10px;
  margin: 20px;
  background-color: #367fecaf;
  border: 1px solid transparent;
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.8);
}
button:hover {
  color: white;
  background-color: #367fec;
}
.header .hero {
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-left: 5vh;
}

.header {
  display: flex;
  justify-content: space-between;
}

img {
  width: 5em;
  height: auto;
}

.register .btn {
  margin: 10px;
}

.header .register {
  display: inline;
}

.hero h4 {
  margin: 0 0;
  padding: 0 0;
  /* height: 20p; */
  color: white;
  font-size: 50px;
  font-family: monospace;
}
</style>