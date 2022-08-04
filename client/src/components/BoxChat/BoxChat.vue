<template>
  <div class="boxchat">
    <div class="boxchat__container">
      <h1>Welcome to {{ appName }}</h1>
      <div class="boxchat__main"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoxChat",
  data() {
    return {
      appName: "Wichat",
    };
  },
};
</script>

<style scoped>
.boxchat {
  left: 15%;
  position: absolute;
  width: 85%;
}
.boxchat__container {
  width: 100%;
  height: 100%;
  font-size: 100px;
}
h1 {
  font-size: 30px;
  margin: 0;
  background-color: rgb(194, 194, 194);
  text-align: center;
}
</style>