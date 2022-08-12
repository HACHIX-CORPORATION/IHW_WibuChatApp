<template>
  <div class="sidebar">
    <div class="sidebar__container">
      <div class="sidebar--roomlist">
        <a href="#about">Lobby</a>
        <div class="rooms" action="">
          <input type="text" placeholder="add new ..." v-model="newRoom" />
          <button @click="addNewRoom">Add</button>
        </div>
        <div class="roomlist">
          <div
            class="roomlist__container"
            v-for="(list, index) in Lists"
            :key="index"
          >
            <div class="roomlist--new-added">{{ list }}</div>
          </div>
        </div>
      </div>
      <div class="sidebar--logout">
        <fa class="icon" icon="arrow-right-arrow-left" @click="onSignout" />
        <h3>Logout</h3>
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
      Lists: [],
      newRoom: "",
    };
  },
  methods: {
    onSignout() {
      this.$router.push({ name: "Home" });
    },
    addNewRoom() {
      if (this.newRoom != "") {
        this.Lists.push(this.newRoom);
        this.newRoom = "";
      } else this.newRoom;
    },
  },
  computed: {},
};
</script>

<style scoped src="./SideBar.css">
</style>