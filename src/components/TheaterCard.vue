<script>
import axios from "axios";

export default {
  created() {
    this.apiCall();
  },
  methods: {
    apiCall() {
      axios
        .get("cinemas.json")
        .then((response) => (this.theaters = response.data));
    },
    onClick(nameId) {
      this.$router.replace("biograf/" + nameId);
    },
  },
  data() {
    return {
      theaters: [],
    };
  },
};
</script>
<template>
  <body>
    <div class="container">
      <div class="row">
        <div
          class="col-lg-6"
          v-for="theater in theaters"
          :key="theater.id"
          @click="onClick(theater.nameId)"
        >
          <div class="container2">
            <div
              class="card2"
              :style="{ backgroundImage: `url(${theater.img})` }"
              :alt="theater.name"
            >
              <div class="content2">
                <h2>{{ theater.name }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
body {
  display: flex;
  justify-self: center;
  align-items: center;
  min-height: 100vh;
}
.container2 {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  z-index: 1;
}
.container2 .card2 {
  position: relative;
  min-width: 350px;
  width: 800px;
  height: 400px;
  margin: 30px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  opacity: 0.7;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.container2 .card2:hover {
  opacity: 1;
}
.container2 .card2 .content2 {
  padding: 20px;
  flex-wrap: wrap;
  position: absolute;
  bottom: 10px;
}
.container2 .card2 .content2 h2 {
  font-size: 3em;
  color: rgb(250, 250, 250);
  pointer-events: none;
}
</style>
