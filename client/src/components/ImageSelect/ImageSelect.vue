<template>
  <div class="image-select">
    <caption>
      Choose your waifu
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
        @click="onChoose(image.url)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageSelect",
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
    onChoose(imagePreview) {
      console.log(imagePreview);
      // this.imagePreview is hanezawa =  ../assets/{imagePreview}
      this.imagePreview = imagePreview;
    },
  },
};
</script>

<style scoped>
.image-select {
  width: 100%;
  text-align: center;
}
caption {
  display: block;
  width: 100%;
  text-align: center;
  padding: 0;
}

.register__infocontainer--preview {
  width: 60%;
  margin: 10px auto;
}

.register__avatar--selectbox {
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  height: 60%;
  background-color: #212122;
  margin-bottom: 20px;
  border: 2px solid rgba(255, 255, 255, 0.322);
  border-radius: 5px;
}

.register__infocontainer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.register__avatar-preview {
  margin: 10px auto;
}
img {
  margin: 10px auto;
  box-sizing: border-box;
  cursor: pointer;
  border: 2px double gainsboro;
  border-radius: 50%;
  margin: auto;
  width: 30%;
  /* height: 20%; */
}
</style>