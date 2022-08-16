<template>
  <div class="sidebar">
    <div class="sidebar__container">
      <div class="sidebar--roomlist">
        <a href="#">{{ title }}</a>
        <RoomList
          @addNewRoom="addNew"
          :roomheader="roomHeader"
          :lists="Lists"
          :newroom="newRoom"
        />
      </div>
      <div class="sidebar--logout">
        <fa class="icon" icon="arrow-right-arrow-left" @click="onSignout" />
        <h3>Logout</h3>
      </div>
    </div>
  </div>
</template>
<script src="./SideBar.js"></script>
<style scoped src="./SideBar.css"></style>
