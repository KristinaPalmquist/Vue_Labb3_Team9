<template>
  <div>
    <div><button @click="showModalA = true">Klicka Här</button></div>
    <div><button @click="showModalB = true">Klicka</button></div>

    <div class="modal" v-if="showModalA">
      <div class="modal-content">
        <span class="close" @click="showModalA = false">&times;</span>
        hej
        <ChartApp />
      </div>
    </div>

    <div class="modal" v-if="showModalB">
      <div class="modal-content">
        <span class="close" @click="showModalB = false">&times;</span>
        <ChartComp />
      </div>
    </div>
  </div>
</template>
<script>
import ChartComp from "../components/ChartComp.vue";
import ChartApp from "../components/ChartApp.vue";
export default {
  components: {
    ChartComp,
    ChartApp,
  },
  data() {
    return {
      showModalA: false,
      showModalB: false,
    };
  },
};
</script>

<style>
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #181717;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 800px;
  height: 400px;
  overflow: auto;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
