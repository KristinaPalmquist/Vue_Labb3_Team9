<script setup>
import axios from "axios";
</script>

<template>
  <div id="ReadMoreApp">
    <p>
      {{ resolvedText }}
      <button @click="onClick = !onClick" class="btn-dark">
        LÄS {{ onClick ? "MINDRE" : "MER" }}
      </button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      onClick: false,
      cinemas: [],
      cinema: [],
      metaText: "",
    };
  },
  props: {
    bioNamn: {
      type: String,
      require: true,
    },
  },
  created() {
    axios.get("/cinemas.json").then((response) => {
      this.cinemas = response.data;
      this.cinemas = this.cinemas.filter((cinema) => {
        return cinema.name == this.bioNamn;
      });
      if (this.cinemas.length > 0) {
        this.metaText = this.cinemas[0].About.sv;
      }
    });
  },
  computed: {
    resolvedText() {
      if (this.onClick) {
        return this.metaText;
      }
      return `${this.metaText.slice(0, 200).trim()}`;
    },
  },
};
</script>
