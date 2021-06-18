<template>
  <div id="status">
    <div class="container">
      <div class="row col-6 ">
      <h1>Keywords Page</h1>
      <div v-for="(Data,key) in Datas" :key="Data">
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">{{key}}</h5>
          
          <p class="card-text">
            <ul class="list-inline">
              <div v-for="data in Data" :key="data">
                <li class="list-inline-item">{{data.keyword}} : {{data.count}}</li>
          
          </div>
          </ul>
          </p>
      </div>
      </div>
      </div>
      </div>
      <b-button v-b-modal.modal-1 v-on:click="chartComponent(Data,key)" class="card-link" variant="primary">Chart</b-button>
       <b-modal id="modal-1" size="xl" title="chart">
            <AllChart  :chartData="chartData"></AllChart>
        </b-modal>


    </div>
    <div>
 <b-modal id="modal-graph" title="BootstrapVue">
    <chart :keywords="Keywords"></chart>
</b-modal>

  
</div>
  </div>
</template>

<script>
import axios from "axios";
import AllChart from "../components/AllChart.vue";
import dataChart from "../data-chart";

export default {
  components: {
    AllChart,
  },
  name: "Status",
  components: { AllChart },
  props: [""],
  mounted() {
    axios.get("http://localhost:3000/status").then((response) => {
      this.Datas = response.data.lodash;
      this.Keyword = response.data.keywords;

      //   console
    });
  },
  data() {
    return {
      Datas: {},
      chartData: {},
      Keyword: [],
      click: 0,
    };
  },
  methods: {
    chartComponent() {
      this.chartData = dataChart.set(this.Keyword, this.Datas);
      this.click = 1;
    },
  },
};
</script>

<style scoped>
</style>
