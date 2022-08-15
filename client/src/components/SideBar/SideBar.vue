<template>
  <div class="sidebar">
    <div class="sidebar__container">
      <div class="sidebar--roomlist">
        <a href="#">{{ createNew }}</a>
        <div class="rooms" action="">
          <input type="text" placeholder="add new ..." v-model="newRoom" />
          <button @click="addNewRoom">Add</button>
        </div>
        <div class="roomlist">
          <div class="roomlist-header">{{ roomHeader }}</div>
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

<script src="./SideBar.js">
</script>

<style scoped src="./SideBar.css">
</style>