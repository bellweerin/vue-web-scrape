<template>
  <div id="table-facebook-page">
    <div class="container">
      <h1>All Page name Table</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="page in FacebookPages" :key="page">
            <td>{{page.id}}</td>
            <td>{{page.name}}</td>
            <td>
              <button v-on:click="deletePage(page)" class="btn btn-danger" type="button">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TableFacebookPage",
  data() {
    return {
      FacebookPages: {},
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    deletePage(page){
      axios.post("https://aibedo.kisra.co.th/facebook_page/delete",page);
      location.reload();
    },
    fetchData(){
      axios.get("https://aibedo.kisra.co.th/facebook_page").then((response) => {
        this.FacebookPages = response.data.facebook_pages;
      });
    }
  }
};
</script>