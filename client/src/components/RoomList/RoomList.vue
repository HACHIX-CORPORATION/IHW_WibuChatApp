<template>
  <div class="rooms__section">
    <div class="rooms" action="">
      <input type="text" placeholder="add new ..." v-model="newRoomName" />
      <button @click="addNewRoom">Add</button>
    </div>
    <div class="roomlist">
      <div class="roomlist-header">
        {{ roomHeader }}
      </div>
      <!-- hien tat ca cac room co trong db  -->
      <div
        class="roomlist__container"
        v-for="(room, index) in lists"
        :key="index"
      >
        <div class="roomlist--new-added">
          {{ room.roomName }}
        </div>
      </div>
    </div>
  </div>
</template>
<script src='./RoomList.js'>
</script>
<style src='./RoomList.css'>
</style>
