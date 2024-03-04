<script setup>
import navBar from "./components/navBar.vue";
import FooterFooter from "./components/FooterFooter.vue";
import selectedScreenings from "./components/selectedScreenings.vue";
</script>
<template>
  <navBar @generated-date="onGeneratedDate" />
  <selectedScreenings :dateProps="date" id="date-filter" />
  <FooterFooter />
</template>

<script>
export default {
  data() {
    return {
      date: null,
    };
  },
  methods: {
    onGeneratedDate(value) {
      this.date = value;
      console.log(value);
    },
  },
};
</script>

<style scoped>
#date-filter {
  top: 70px;
  right: 0;
  left: 0;
  position: absolute;
  background-color: #121212;
  z-index: 999999;
}
</style>./components/navBar.vue
