<template>
  <!--class directive is used to apply css value on the isModalVisible prop"
    and also used bootstrap css code for styling-->
  <div class="modal" :class="{ 'is-active': isModalVisible }">
    <div class="modal-background" @click="$emit('hide-modal')"></div>
    <div class="modal-content">
      <button class="modal-close" @click="$emit('hide-modal')">X</button>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "ChartModal",
  props: {
    isModalVisible: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.modal {
  display: none;
}

.modal.is-active {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(9, 6, 6, 0.8);
}

.modal-content {
  background-color: white;
  margin: 20px;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 300px;
  border: solid 1px rgb(12, 12, 12);
  box-shadow: 1px 1px 1px 1px gray;
}

.modal-close {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0.5rem 2rem;
  font-size: 1.5rem;
  background: transparent;
  color: black;
  border: none;
  outline: none;
  cursor: pointer;
}
</style>
