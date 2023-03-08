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
  margin: auto;
  height: 70vh;
  overflow-x: hidden;
}
img {
  width: 100%;
  height: 70vh;
}
</style>
