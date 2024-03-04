<script setup>
import NavBar from "./components/navBar.vue";
import FooterFooter from "./components/FooterFooter.vue";
import SelectedScreenings from "./components/SelectedScreenings.vue";
</script>
<template>
  <NavBar @generated-date="onGeneratedDate" />
  <SelectedScreenings :dateProps="date" id="date-filter" />
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
</style>
