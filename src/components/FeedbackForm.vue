<template>
  <header class="feedback-div">
    <div>
      <form v-if="!showModal" class="formBox" @submit.prevent="submitFeedback">
        <div class="label-box">
          <label>Namn</label>
          <input type="text" v-model="feedback.name" placeholder="Skriv namn" />
        </div>
        <div class="label-box">
          <label>Email:</label>
          <input
            type="email"
            v-model="feedback.email"
            placeholder="Skriv email"
          />
        </div>
        <div class="label-box">
          <label>Skriv ditt kommentar här:</label>
          <textarea v-model="feedback.message"></textarea>
        </div>
        <button class="btn-dark" type="submit">Skicka</button>
      </form>
      <!-- conditional directive used to show the modal. When the submit
      button clicked it opens the modal with message " slot method used to
      render the header and the p content"when the close btn clicked it reset the form.-->
      <ModalFeedbackform
        v-else
        :name="feedback.name"
        @close="
          showModal = false;
          feedback.name = '';
          feedback.email = '';
          feedback.message = '';
        "
      >
        <template #header>
          <h5 class="modal-title">Hej {{ name }} !</h5>
        </template>
        <p>Tack för din feedback!</p>
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
      if (this.feedback.name && this.feedback.email) {
        this.showModal = true;
        this.feedback = {
          name: this.feedback.name,
          email: "",
          message: "",
        };
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
  margin: auto;
  padding: 10px;
  align-items: center;
  justify-content: center;
  /* background-color: rgb(78, 74, 74); */
  color: white;
  border-radius: 7px;
  text-align: left;
  border: solid 1px gold;
}

.feedback-div {
  height: 80vh;
}

.label-box {
  display: flex;
  flex-direction: column;
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
/* .btn-dark  {
  box-shadow: white 1px 3px 3px 1px;
  padding: 5px;
  width: 100px;
}
.form-btn:hover {
  background-color: rgb(179, 211, 211);
} */
</style>
