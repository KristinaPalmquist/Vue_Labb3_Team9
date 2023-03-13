<template>
  <div class="star-rating">
    <span v-for="(star, index) in stars" :key="index" @click="SelectStar(index)"
      ><i
        class="bi bi-star-fill"
        style="margin: 15px"
        :class="{ filled: star.filled }"
      ></i>
    </span>
  </div>
  <button class="submit-button" @click="submitRating">Submit</button>
  <div class="popover" :class="{ show: showPopover }">Rating submitted!</div>
</template>
<script>
export default {
  data() {
    return {
      stars: [
        { filled: false },
        { filled: false },
        { filled: false },
        { filled: false },
        { filled: false },
      ],
    };
  },
  methods: {
    fillStar(index) {
      this.stars.forEach((star, i) => {
        star.filled = i <= index;
      });
    },
    submitRating() {
      // Create a copy of the stars array and reset the filled property to false
      const starsCopy = [...this.stars];
      starsCopy.forEach((star) => {
        star.filled = false;
      });

      // Show the popover
      this.showPopover = true;

      // Wait for 2 seconds, then hide the popover and reset the stars
      setTimeout(() => {
        this.showPopover = false;
        this.stars = starsCopy;
      }, 2000);
    },
  },
};
</script>
<style>
.popover {
  position: absolute;
  left: -100px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #333;
  color: white;
  padding: 5px;
  border-radius: 5px;
  transition: all 0.3s;
  opacity: 0;
}
.popover.show {
  left: -150px;
  opacity: 1;
}
</style>
