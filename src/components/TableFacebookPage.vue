<template>
  <div id="table-facebook-page">
    <div class="container">
      <h1>All Page name Table</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="page in FacebookPages" :key="page">
            <td>{{page.id}}</td>
            <td>{{page.name}}</td>
            <td>
              <button v-on:click="deletePage(page)" class="btn btn-danger">Delete</button>
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
    axios.get("http://localhost:3000/facebook_page").then((response) => {
      this.FacebookPages = response.data.facebook_pages;
    });
  },
  methods: {
    deletePage(page){
      axios.post("http://localhost:3000/facebook_page/delete",page);
      location.reload();
    }
  }
};
</script>