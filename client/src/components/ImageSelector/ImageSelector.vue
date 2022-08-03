<template>
  <div class="image-select">
    <caption>
      {{
        caption
      }}
    </caption>
    <img
      class="register__infocontainer--preview"
      :src="require(`../../assets/${imagePreview}`)"
      alt="choose avatar"
    />
    <div class="register__avatar--selectbox">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="require(`../../assets/${image.url}`)"
        alt=""
        @click="onSelect(image.url)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageSelector",
  props: {
    caption: {
      type: String,
    },
  },
  data() {
    return {
      disableBtn: true,
      imagePreview: "02.jpg",
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
    // add argument "imagePreview" for onChoose()
    onSelect(imagePreview) {
      // this.imagePreview is hanezawa =  ../assets/{imagePreview}
      this.imagePreview = imagePreview;
    },
  },
};
</script>

<style scoped src="./ImageSelector.css">

</style>