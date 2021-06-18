<template>
  <div id="chart">
    <canvas id="ecom-chart"></canvas>
    <!-- <h1>{{ Keywords }}</h1> -->
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
  name: "Chart",
  props: [ 'keywords'],
  data() {
    return {
      EcomChart: {},
      Keywords: this.keywords,
    };
  },
  mounted() {
    this.setGraph();
    this.toArray();
    const ctx = document.getElementById("ecom-chart");
    new Chart(ctx, this.EcomChart);
  },
  methods: {
    setGraph() {
      let EcomChart = {
        type: "bar",
        data: {
          labels: [],
          datasets: [
            {
              label: "Number of Moons",
              data: [0, 0, 1, 2, 79, 82, 27, 14],
              backgroundColor: "rgba(54,73,93,.5)",
              borderColor: "#36495d",
              borderWidth: 3,
            },
            {
              label: "Planetary Mass (relative to the Sun x 10^-6)",
              data: [
                0.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514,
              ],
              backgroundColor: "rgba(71, 183,132,.5)",
              borderColor: "#47b784",
              borderWidth: 3,
            },
          ],
        },
        options: {
          responsive: true,
          lineTension: 1,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  padding: 25,
                },
              },
            ],
          },
        },
      };
      this.EcomChart = EcomChart;
    },
    toArray() {
      console.log("11111111",Object.entries(this.keywords));
    }
  },
};
</script>
<style scoped>
.card {
  width: 30rem;
  margin-top: 30px;
}
.card-header {
  text-align: center;
}
</style>
