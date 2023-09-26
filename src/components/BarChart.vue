<template>
  <Bar :data="chartData" />
</template>
<script>
import Using from "../apis/Using";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ["CRM", "CDM", "ATM","DC365"],
        datasets: [
          {
            label: ["Number type of machines are using"],
            backgroundColor: ["#F4A460", "#FFE4C4", "#f879"],
            data: [10,20,30,25],
          },
        ],
      },
    };
  },
  mounted() {
    Using.getType().then((Response) => {
      this.chartData.datasets.data = Response.data.data;
      console.log("hi",this.chartData.datasets.data);
    });
  },
};
</script>
<style scoped></style>
