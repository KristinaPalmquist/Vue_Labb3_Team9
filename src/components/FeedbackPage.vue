<template id="Feedback-page">
  <header>
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
          <label>Skriv ditt Kommentar Här</label>
          <textarea v-model="message"></textarea>
        </div>
        <button class="form-btn" type="submit">Skicka</button>
      </form>
      <ModalComp v-if="showModal" :name="name" @close="showModal = false">
        <p>Tack för ditt medelande!</p>
      </ModalComp>
    </div>
  </header>
</template>
<script>
import ModalComp from "../components/ModalComp.vue";
export default {
  components: {
    ModalComp,
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
