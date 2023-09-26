<template>
  <div>
    <canvas id="myChart"></canvas>
  </div>
</template>
 <script>
import Chart from "Chart.js";
export default {
    data() {
  return {
    chartData: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Sales',
          backgroundColor: '#f87979',
          data: [40, 20, 30, 50, 10, 60, 30]
        }
      ]
    }
  };
  },
  mounted() {
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: this.chartData,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
},
};
</script>

