<template>
  <div id="keywordList" class="container">
    <div class="card">
      <div class="card-header">
        <div class="head"> <h1 class="header">{{ thai_word }} / {{ eng_word }}</h1></div>
        <!-- <h3>{{ thai_word }} / {{ eng_word }}</h3> -->
      </div>
      <div class="card-body">
        <table class="table table-bordered">
      <thead class="">
        <tr class="head-table">
          <th scope="col">No.</th>
          <th scope="col">Service</th>
          <th scope="col">Count</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(data, index) in Object.entries(Keyword_fillter)"
          :key="data"
        >
          <td>{{ index + 1 }}</td>

          <td>{{ data[1][0].service }}</td>
          <td>{{ data[1][0].count }}</td>
          <td>
            <router-link
              :to="{
                name: 'keyword-fillter',
                params: {
                  service: data[1][0].service,
                  id: id,
                  service_id: index + 1,
                },
              }"
              type="button"
              class="btn btn-primary" id="detail"
              >Detail</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>

      </div>
    </div>
    
  </div>
</template>

<script>
import axios from "axios";
import TableKeyword from "../components/TableKeyword.vue";
import TableKeywordFillter from "./TableKeywordFillter.vue";

export default {
  components: {
    TableKeyword,
    TableKeywordFillter,
  },
  name: "KeywordList",
  data() {
    return {
      Keyword_fillter: {
        service: "",
        thai_word: "",
        eng_word: "",
        count: 0,
      },
      modalService: "",
      modalId: 0,
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.thai_word = this.$route.params.thai_word;
    this.eng_word = this.$route.params.eng_word;
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get("https://aibedo.kisra.co.th/fillterkeyword", {
          params: {
            id: this.id,
          },
        })
        .then((response) => {
          this.Keyword_fillter = response.data.lodash;
          console.log(this.Keyword_fillter);
        });
    },
  },
};
</script>

<style scoped>
.card-header {
  text-align: center;
  background-color: #FC508E;
  text-shadow: 2px 2px white;
  
}
.card {
  margin-top: 40px;
  margin-bottom: 40px;
  margin-right: auto;
  margin-left: auto;
  width: 600px;
  box-shadow: 8px 8px black;
  background-color: #FFA8C7;
}
.table{
  width: 500px;
  margin-right: auto;
  margin-left: auto;
  background-color: white;
  
}
.head-table{
  background-color: #212529;
  color: white;
}
#detail{
  background-color: #95E5FF;
  border-width: 2px;
  border-color: black;
  color :black

}
#detail:hover{
  background-color: white;
  border-width: 2px;
  border-color: #00C2FF;
  color: #00C2FF;
}
.head{
  background-color: white;
  text-align: center;
  width: 200px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 10px;
  /* border-width: 2px; */
  border: 2px solid black;
  height: 70px;
  /* margin-top: 20px; */
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
