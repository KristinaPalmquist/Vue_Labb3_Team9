<template>
  <div class="slideContainer">
    <img :src="images[currentIndex]" alt="Slide Show" class="slideImage" />
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
      intervalId: null,
    };
  },
  mounted() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000);
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
};
</script>
<style scoped>
.slideContainer {
  width: 200px;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  margin-left: 25%;
  flex-direction: row;
  background-color: rgb(12, 12, 12);
}
.slideImage {
  width: 180px;
  height: 110px;
  object-fit: cover;
  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
}
</style>
