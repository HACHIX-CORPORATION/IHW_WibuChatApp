<template>
  <div class="form-input">
    <label>{{ title }}</label>
    <div class="inputarea">
      <fa class="fas-icon" :icon="icon" />
      <!-- v-model track input's content in input field -->
      <!-- <input
        v-if="showPassword"
        :type="type"
        placeholder=""
        v-model="inputContent"
        @input="onInput"
        @click="onClick"
      />
      <input
        v-else
        type="password"
        placeholder=""
        v-model="inputContent"
        @input="onInput"
        @click="onClick"
      /> -->
      <input
        :type="type"
        placeholder=""
        v-model="inputContent"
        @input="onInput"
      />
    </div>
  </div>
</template> 

<script>
export default {
  name: "FormInput",
  props: {
    title: {
      type: String,
    },
    icon: {
      type: String,
    },
    type: {
      type: String,
    },
    info: {
      type: String,
    },
    inputIndex: {
      type: Number,
    },
  },
  data() {
    return {
      inputContent: "",
      showPassword: false,
    };
  },

  methods: {
    onClick() {
      console.log("hello");
      this.showPassword = !this.showPassword;
    },
    onInput() {
      // create object with 2 properties to take value for changed input
      let inputInfo = {
        index: this.inputIndex,
        content: this.inputContent,
      };
      // emit 'on-input' to parent
      this.$emit(`on-input`, inputInfo);
    },
  },
};
</script>

<style src="./FormInput.css" scoped>
</style>