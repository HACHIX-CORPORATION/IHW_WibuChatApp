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
  display: flex;
  flex-direction: row;
  align-content: space-between;
}
</style>