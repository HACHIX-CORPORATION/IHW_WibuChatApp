<template>
  <div class="boxchat">
    <div class="boxchat__container">
      <div class="boxchat__header">
        <h1>Wichat</h1>
      </div>
      <div class="boxchat__screen"><BoxMain /></div>
      <div class="boxchat__input">
        <div class="boxchat__input--layout">
          <input type="text" placeholder="  Aa" />
          <button class="submit">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BoxMain from "../../components/BoxMain/BoxMain.vue";
export default {
  name: "BoxChat",
  components: { BoxMain },
  data() {
    return {
      appName: "Wichat",
    };
  },
};
</script>

<style scoped src="./BoxChat.css">
</style>