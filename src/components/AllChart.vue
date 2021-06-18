<template>
  <div>
    <canvas id="all-chart"></canvas>
  </div>
  
</template>

<script>
import Chart from "chart.js";

export default {
  name: "AllChart",
  props:["chartData"],
  data() {
    return {
      chartData : this.chartData
    };
  },
  mounted() {
    
    var ctx = document.getElementById("all-chart");
    
    
    new Chart(ctx, this.chartData);
    console.log("cd",this.chartData)

  },

  methods: {
    
  }
}
</script>