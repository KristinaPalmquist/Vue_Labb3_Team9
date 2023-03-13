<template>
  <div class="heroimage">
    <img :src="heroImage" alt="cinema" />
    <div class="text"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      heroImage: "src/assets/img/cinema.jpg",
    };
  },
};
</script>
<style scoped>
.heroimage {
  margin: auto;
  height: 62vh;
}
img {
  width: 100%;
  height: 60vh;
}
@media screen and (max-width: 480px) {
  .heroimage {
    margin: auto;
    height: 40vh;
  }
  img {
    width: 100%;
    height: 39vh;
  }
}
</style>
