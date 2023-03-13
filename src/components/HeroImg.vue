<template>
  <div class="heroimage">
    <img :src="heroImage" alt="MakeUp" class="first-hero" />
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
  margin: 0 auto;
  height: 40vh;
}
img {
  width: 100%;
  height: 100%;
}

@media screen and (min-width: 480px) {
  .heroimage {
    margin: 0 auto;
    height: 62vh;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
