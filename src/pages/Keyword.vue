<template>
  <div id="keyword">
    <div class="container">
      <div class="row">
        <div class="col-6" v-for="(keyword, key) in KeywordsCount" :key="key">
          <div class="card">
            <h5 class="card-header">{{ key }}</h5>
            <div class="card-body">
              <table class="table" id="job-table">
                <thead>
                  <tr class="table-warning">
                    <th scope="col">Keyword</th>
                    <th scope="col">Count</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="data in keyword" :key="data">
                    <td>{{ data.keyword }}</td>
                    <td>{{ data.count }}</td>
                  </tr>
                </tbody>
              </table>
              <b-button v-on:click="graph()" v-b-modal.modal-graph class="btn btn-info">Graph</b-button>
              
            </div>
            
          </div>
        </div>
      </div>
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
import Chart from "../components/Chart.vue";

export default {
  name: "Keyword",
  components: { Chart },
  props: [''],
  mounted() {
    axios.get("http://localhost:3000/status").then((response) => {
      this.KeywordsCount = response.data.lodash;
      this.Keywords = response.data.keywords;
    });
  },
  data() {
    return {
      KeywordsCount: {},
      Keywords: {},
      showModal: false,
    };
  },
  methods: {
    graph() {},
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
