<template>
  <div class="boxchat">
    <div class="boxchat__container">
      <div class="boxchat__header">Wichat</div>
      <div class="boxchat__screen">
        <div class="receiveMessenger"></div>
        <div class="sendMessenger">
          <div
            class="messenger__container"
            v-for="(messenger, idx) in messengerList"
            :key="idx"
          >
            <img src="../../assets/02.jpg" alt="" />
            <div class="messenger__text">{{ messenger }}</div>
          </div>
        </div>
      </div>
      <div class="boxchat__input">
        <form @submit.prevent="send" class="boxchat__input--layout">
          <input type="text" placeholder=" Aa" v-model="newText" />
          <button type="submit" class="submit">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./BoxChat.js">
</script>

<style scoped src="./BoxChat.css">
</style>