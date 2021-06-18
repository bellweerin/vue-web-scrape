<template>
  <div id="table-keyword">
    <h1>All Keyword Table</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">id</th>
          <th scope="col">word(thai/eng)</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="keyword in Keywords" :key="keyword">
          <th scope="row">1</th>
          <td>{{keyword.id}}</td>
          <td>{{keyword.word}}</td>
          <td>
            <button class="btn btn-danger">Delete</button>
            <!-- <button class="btn btn-warning">edit</button> -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TableKeyword",
  data(){
    return {
      Keywords: {}
    }
  },
  mounted() {
    axios.get("http://localhost:3000/keyword").then((response) => {
      this.Keywords = response.data.keywords;
    })
  },
  methods: {},
};
</script>

<style scoped>
</style>