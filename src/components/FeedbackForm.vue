<template id="Feedback-page">
  <header class="feedback-div">
    <div>
      <form class="formBox" @submit.prevent="submitFeedback">
        <div class="label-box">
          <label>Namn</label>
          <input type="text" v-model="name" placeholder="Skriv namn" />
        </div>
        <div class="label-box">
          <label>Email:</label>
          <input type="email" v-model="email" placeholder="Skriv email" />
        </div>
        <div class="label-box">
          <label>Skriv ditt kommentar här:</label>
          <textarea v-model="message"></textarea>
        </div>
        <button class="form-btn" type="submit">Skicka</button>
      </form>
      <ModalFeedbackform
        v-if="showModal"
        :name="name"
        @close="showModal = false"
      >
        <p>Tack för ditt meddelande!</p>
      </ModalFeedbackform>
    </div>
  </header>
</template>
<script>
import ModalFeedbackform from "./ModalFeedbackform.vue";
export default {
  components: {
    ModalFeedbackform,
  },
  data() {
    return {
      feedback: {
        name: "",
        email: "",
        message: "",
      },
      showModal: false,
    };
  },
  methods: {
    submitFeedback() {
      if (this.name && this.email) {
        this.showModal = true;
      }
    },
  },
};
</script>
<style scoped>
.formBox {
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 10px auto;
  padding: 20px;
  align-items: center;
  justify-content: space-around;
  background-color: black;
  color: white;
  border-radius: 7px;
}

.feedback-div {
  height: 80vh;
}

.label-box {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin: 10px;
  width: 300px;
  justify-items: center;
}

form div label {
  margin-bottom: 5px;
}

form div input,
form div textarea {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #fdfbfb;
}
.form-btn {
  box-shadow: white 1px 3px 3px 1px;
  padding: 5px;
  width: 100px;
}
.form-btn:hover {
  background-color: rgb(179, 211, 211);
}
</style>
