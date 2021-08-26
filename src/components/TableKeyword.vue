<template>
  <div id="table-keyword" class="container ">
    <h1>All Keyword Table</h1>
    <div class="container">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="keyword-table"
      ></b-pagination>
      <b-table
        id="keyword-table"
        :items="Keywords"
        :per-page="perPage"
        :current-page="currentPage"
        small
      ></b-table>
    <!-- <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">id</th>
          <th scope="col">word(thai/eng)</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr  v-for="(keyword,index) in Keywords" :key="keyword">
          <th>{{index+1}}</th>
          <td> {{keyword.id}}</td>
          <td>{{keyword.thai_word}}/{{keyword.eng_word}}</td>
          <td>
            <button v-on:click="_delete(keyword.id)" class="btn btn-danger" type="button">Delete</button>
          </td>
        </tr>
      </tbody>
    </table> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TableKeyword",
  data() {
    return {
      Keywords: {
        id: "",
      },
      perPage: 20,
      currentPage: 3,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    _delete(id){
      axios.post("https://aibedo.kisra.co.th/deletekeyword",{"id": id})
      location.reload();
    },
    fetchData(){
      axios.get("https://aibedo.kisra.co.th/keyword").then((response) => {
        this.Keywords = response.data.keywords;
      });
    },
    edit(id) {},
  },
  computed: {
    rows() {
      return this.Keywords.length;
    },
  },
};
</script>

<style scoped>
</style>