<template>
  <div class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Hej {{ modalTitle }} !</h5>
        <button class="close-button" @click="$emit('close')">X</button>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name"],
  computed: {
    modalTitle() {
      return this.name ? this.name : "Anonym";
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(22, 21, 21, 0.5);
  opacity: 0.2 px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: black;
  border-radius: 5px;
  border: solid 1px rgb(160, 142, 43);
  padding: 20px;
  max-width: 303px;
  max-height: auto;
  justify-content: center;
  color: white;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.close-button {
  background-color: black;
  color: white;
}
</style>
