<template>
  <div id="table-facebook-page">
    <div class="container">
      <div class="card">
        <div class="head"> <h1 class="header">Facebook Pages Table</h1></div>
        <div class="card-body">
          <b-table bordered hover
            thead-class="bg-dark text-white"
            id="facebook-page-table"
            :items="FacebookPages"
            :per-page="perPage"
            :current-page="currentPage"
            :fields="fields"
          ><template #cell(number)="row">
              {{ row.index + 1 }}
            </template>
            
            </b-table>
          <b-pagination class="page"
          
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="facebook-page-table"
          ></b-pagination>
          <!-- <table class="table">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">name</th>
                <th scope="col">action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="page in FacebookPages" :key="page">
                <td>{{ page.id }}</td>
                <td>{{ page.name }}</td>
                <td>
                  <button
                    v-on:click="deletePage(page)"
                    class="btn btn-danger"
                    type="button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table> -->
        </div>
      </div>
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
      perPage: 10,
      currentPage: 3,
      fields: [
        {
          key: "number",
          label: "No.",
        },
        {
          key: "id",
          label: "ID",
        },
        {
          key: "page_id",
          label: "Page ID",
        },
        {
          key: "name",
          label: "Page name",
        },
        {
          key: "lasted_post_id",
          label: "Lasted post ID",
        },
      ],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    deletePage(page) {
      axios.post("https://aibedo.kisra.co.th/facebook_page/delete", page);
      location.reload();
    },
    fetchData() {
      axios.get("https://aibedo.kisra.co.th/facebook_page").then((response) => {
        this.FacebookPages = response.data;
        console.log(this.FacebookPages);
      });
    },
  },
  computed: {
    rows() {
      return this.FacebookPages.length;
    },
  },
};
</script>

<style scoped>
.card {
  width: 760px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 15px;
  margin-top: 20px;
  margin-bottom: 60px;
  background-color: #8944e1;
  box-shadow: 8px 8px black;
}
.page{
  float: right;
  margin-right: 30px;
  border: 2px solid black;
  margin-top: 10px;
}
.header{
  margin-left: auto;
  margin-right: auto;
  /* margin-top: 20px; */
  text-shadow: 1px 1px black;
  color: black;
  font-size: 32px;
  
}
.head{
  background-color: white;
  text-align: center;
  width: 230px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 10px;
  /* border-width: 2px; */
  border: 2px solid black;
  height: 110px;
  margin-top: 20px;
  padding: 10px;
}
#facebook-page-table{
  width: 660px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
   margin-top: 10px;


}
/* #facebook-page-table td{
  background-color: blueviolet;
  color: green;
} */
/* .b-table th{
  background-color: violet;
}
.thead{
  background: tomato;
}
.b-table-hover tbody tr:hover td, .table-hover tbody tr:hover th {
  background-color: #FFFFEE;
}
.b-table > tbody > tr:not(:hover) .show-when-hovered {
  background-color: #FFFFEE;
} */

</style>