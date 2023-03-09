<script setup>
import navBar from "./components/navBar.vue";
import FooterFooter from "./components/FooterFooter.vue";
import testComp from "./components/testComp.vue";
</script>

<template>
  <navBar @generated-date="onGeneratedDate" />
  <testComp :dateProps="date" id="test-comp" />
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
<style scoped></style>
