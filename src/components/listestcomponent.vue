<template>
  <h1 class="film-title">{{ this.film }}</h1>
  <p class="film-plot">hejhejhej</p>
  <img src="" alt="" class="film-img" />
</template>

<script>
export default {
  props: {
    film: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style scoped></style>
