<template>
  <div class="roomlist">
    <div
      class="roomlist__container"
      v-for="(list, index) in Lists"
      :key="index"
    >
      <div>{{ list }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoomList",
  data() {
    return {
      Lists: [],
    };
  },
  methods: {
    
  },
};
</script>

<style>
</style>