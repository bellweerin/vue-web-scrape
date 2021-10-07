<template>
  <div id="status">
    <div class="container">
      <div class="card">
        <!-- <div class="card-header">Status</div> -->
         <div class="head"> <h1 class="header">Status</h1></div>
        <div class="card-body">
          <b-table
            bordered
            hover
            thead-class="bg-dark text-white"
            id="status-table"
            :items="Keywords"
            :per-page="perPage"
            :current-page="currentPage"
            :fields="fields"
          >
          <template #cell(number)="row">
              {{ row.index +1 }}
            </template>
            <template #cell(action)="row">
              <router-link
                  :to="{
                    name: 'keyword-list',
                    params: {
                      thai_word: row.item.thai_word,
                      eng_word: row.item.eng_word,
                      id: row.item.id,
                    },
                  }"
                  type="button"
                  class="btn btn-info"
                  id="detail" 
                  >Detail</router-link
                >
            </template>
            
          </b-table>
          <b-pagination
            class="page"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="status-table"
          ></b-pagination>
        </div>
      </div>
      <div class="row col-6">
        <!-- <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">num</th>
              <th scope="col">Words</th>
              <th scope="col">detail</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="key in Keywords" :key="key.id">
              <td>{{ key.thai_word }}/{{ key.eng_word }}</td>
              <td>
                <router-link
                  :to="{
                    name: 'keyword-list',
                    params: {
                      thai_word: key.thai_word,
                      eng_word: key.eng_word,
                      id: key.id,
                    },
                  }"
                  type="button"
                  class="btn btn-info"
                  >Info</router-link
                >
              </td>
            </tr>
          </tbody>
        </table> -->
        <!-- <d iv v-for="(Data,key) in Keywords" :key="Data">
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
      </d> -->
      </div>
      <!-- <b-button v-b-modal.modal-1 v-on:click="chartComponent(Data,key)" class="card-link" variant="primary">Chart</b-button>
       <b-modal id="modal-1" size="xl" title="chart">
            <AllChart  :chartData="chartData"></AllChart>
        </b-modal> -->
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
  name: "Status",
  components: {
    // AllChart,
  },
  // components: { AllChart },
  props: [""],
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      Datas: {},
      // chartData: {},
      click: 0,
      Keywords: [],
      perPage: 20,
      currentPage: 3,
      fields: [
        { key: "number", label: "No." },
        { key: "thai_word", label: "Thai Keyword" },
        { key: "action" , label: "Action" },
      ],
    };
  },
  methods: {
    // chartComponent() {
    //   this.chartData = dataChart.set(this.Keyword, this.Datas);
    //   this.click = 1;
    // },
    fetchData() {
      axios.get("https://aibedo.kisra.co.th/keyword").then((response) => {
        this.Keywords = response.data.keywords;
      });
    },
  },
  computed: {
    rows() {
      return this.Keywords.length;
    },
  },
};
</script>


<style scoped>
.card-header {
  text-align: center;
  text-shadow: 3px 2px black;
  color: white;
  font-weight: 500;
  background-color: #00c2ff;
  border-color: #95e5ff;
  border-width: 1px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  font-size: 32px;
  margin-bottom: 20px;
}
.card {
  /* border-color: #95e5ff; */
  border-width: 2px;
  border-radius: 10px;
  margin-top: 10px;
  width: 600px;
  /* width: auto; */
  box-shadow: 8px 8px black;
  background-color:#00c2ff;
  /* padding-bottom: 50; */
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 60px;
}
.b-table {
  margin-top: 10px;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
}
#detail{
  border-width: 2px;
  border-color:black;
  background-color: #F14AFF;
  /* margin-left: auto;
  margin-right: auto; */
}
#detail:hover{
  border-width: 2px;
  border-color: #F14AFF;
  color: #F14AFF;
  background-color: white;
  /* margin-left: auto;
  margin-right: auto; */
}
.page{
  float: right;
  margin-right: 30px;
  border: 2px solid black;
  margin-top: 10px;
}
.head{
  background-color: white;
  text-align: center;
  width: 150px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 10px;
  /* border-width: 2px; */
  border: 2px solid black;
  height: 70px;
  margin-top: 20px;
  padding: 10px;
}
.header{
  margin-left: auto;
  margin-right: auto;
  text-shadow: 1px 1px black;
  color: black;
  font-size: 32px;
}
</style>
