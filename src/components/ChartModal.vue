<template>
  <!--class directive is used to apply css value on the isModalVisible prop"
    and used bootstrap css code for styling-->
  <div class="modal" :class="{ 'is-active': isModalVisible }">
    <div class="modal-background" @click="$emit('hide-modal')"></div>
    <div class="modal-content">
      <button
        class="modal-close is-large"
        @click="$emit('hide-modal')"
      ></button>
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
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #080707;
  padding: 10px;
  border-radius: 5px;
  max-width: 500px;
  align-items: center;
  position: relative;
  height: 300px;
}

.modal-close {
  position: absolute;
  top: 0;
  right: 0;
  margin: 2rem;
  font-size: 1.5rem;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}

.modal-close:before,
.modal-close:after {
  position: absolute;
  content: " ";
  margin: 10px;
  height: 1.5rem;
  width: 0.2rem;
  background-color: #ece1e1;
}

.modal-close:before {
  transform: rotate(45deg);
}

.modal-close:after {
  transform: rotate(-45deg);
}
</style>
