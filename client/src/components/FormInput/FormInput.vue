<template>
  <div class="form-input">
    <label>{{ title }}</label>
    <div class="inputarea">
      <fa class="fas-icon" :icon="icon" />
      <!-- track input's content in input field -->
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
      disableBtn: true,
      imagePreview: "02.jpg",
      inputContent: "",
      images: [
        {
          id: 1,
          url: "02.jpg",
        },
        {
          id: 2,
          url: "akame.jpg",
        },
        {
          id: 3,
          url: "aqua.jpg",
        },
        {
          id: 4,
          url: "asuna.jpg",
        },
        {
          id: 5,
          url: "dark_saber.jpg",
        },
        {
          id: 6,
          url: "hanezawa.jpg",
        },
        {
          id: 7,
          url: "maisakurajima.jpg",
        },
        {
          id: 8,
          url: "natusme2.jpg",
        },
        {
          id: 9,
          url: "rem.jpg",
        },
      ],
    };
  },

  methods: {
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