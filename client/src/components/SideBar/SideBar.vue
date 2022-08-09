<template>
  <div class="sidebar">
    <div class="sidebar__container">
      <div class="sidebar--user">
        <a href="#about">Room1</a>
      </div>
      <div class="sidebar--logout">
        <fa class="icon" icon="arrow-right-arrow-left" @click="onSignout" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      routes: [{ name: "Home", url: "/" }],
    };
  },
  methods: {
    onSignout() {
      this.$router.push({ name: "Home" });
    },
  },
  computed: {},
};
</script>

<style scoped src="./SideBar.css">
</style>