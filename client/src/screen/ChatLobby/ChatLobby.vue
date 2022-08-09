<template>
  <div class="Chatlobby">
    <SideBar />
    <BoxChat />
  </div>
</template>

<script>
import BoxChat from "../../components/BoxChat/BoxChat.vue";
import SideBar from "../../components/SideBar/SideBar.vue";

export default {
  name: "ChatLobby",
  components: {
    SideBar,
    BoxChat,
  },
};
</script>

<style>
.Chatlobby {
  width: 100%;
  height: 910px;
  display: grid;
  grid-template-columns: 15% 85%;
}
</style>