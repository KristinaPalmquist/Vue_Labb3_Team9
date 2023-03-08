<template>
  <div class="chart-area"><Bar :data="data" :options="options" /></div>
</template>
<script lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export default {
  components: {
    Bar,
  },
  data() {
    return {
      data: {
        labels: [
          "Cinemateket",
          "Zita Folkets Bio",
          "FilmStaden Sergel",
          "Victoria",
          "Capitol Bistro",
        ],
        datasets: [
          {
            label: "Användarrecensioner",
            backgroundColor: [
              "rgba(100,250,100, 0.5)",
              "rgba(0,50,50, 0.5)",
              "rgba(128,0,0, 0.5)",
              "rgba(0,50,200, 0.5)",
              "rgba(0,255,255, 0.5)",
            ],
            borderColor: [
              "rgb(75, 192, 192)",
              "rgb(54, 162, 235)",
              "rgb(0, 159, 0)",
              "rgb(255, 99, 132)",
              "rgb(255, 205, 86)",
            ],
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [4, 5, 4.5, 5, 3.5],
          },
        ],
      },
      options: {
        responsive: true,
      },
    };
  },
};
</script>
<style scoped>
@media only screen and (min-width: 500px) {
  .chart-area {
    width: 370px;
    height: auto;
    justify-content: center;
  }
}
</style>
