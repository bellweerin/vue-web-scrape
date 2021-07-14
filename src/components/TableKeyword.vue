<template>
  <div id="table-keyword" class="container ">
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
        <tr  v-for="(keyword,index) in Keywords" :key="keyword">
          <!-- <th scope="row">{{(Keywords.indexOf(keyword))+1}}</th> -->
          <th>{{index+1}}</th>
          <td> {{keyword.id}}</td>
          <td>{{keyword.thai_word}}/{{keyword.eng_word}}</td>
          <td>
            <!-- <input :v-bind="keywords.id"> -->
            <button v-on:click="_delete(keyword.id)" class="btn btn-danger" type="button">Delete</button>
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
      Keywords: {
        id:""
      }
    }
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
      })
    }
  },
};
</script>

<style scoped>
</style>