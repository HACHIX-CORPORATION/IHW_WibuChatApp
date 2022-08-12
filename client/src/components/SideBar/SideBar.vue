<template>
  <div class="sidebar">
    <div class="sidebar__container">
      <div class="sidebar--user">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
      </div>
      <div class="sidebar--logout">
        <fa class="icon" icon="arrow-right-arrow-left" @click="onSignout" />
      </div>
    </div>
  </div>
</template>

<script src="./SideBar.js">
</script>

<style scoped src="./SideBar.css">
</style>