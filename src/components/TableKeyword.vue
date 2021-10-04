<template>
  <div id="table-keyword" class="container">
    <div class="container">
      <div class="card">
        <div class="head"> <h1 class="header">Keywords Table</h1></div>
        <div class="card-body">
          <b-table
            bordered
            hover
            thead-class="bg-dark text-white"
            id="keyword-table"
            :items="Keywords"
            :per-page="perPage"
            :current-page="currentPage"
            :fields="fields"
          >
          <!-- <template #cell(number)="col" style="background-color: grey">
              
            </template> -->
            <template #cell(number)="row">
              {{ row.index + 1 }}
            </template>
          </b-table>
          <b-pagination
            class="page"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="keyword-table"
          ></b-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TableKeyword",
  data() {
    return {
      Keywords: {},
      perPage: 10,
      currentPage: 3,
      fields: [
        {
          key: "number",
          label: "No.",
        },
        {
          key: "thai_word",
          label: "Thai keyword",
        },
        {
          key: "eng_word",
          label: "English keyword",
        },
        {
          key: "isSpa",
          label: "Spa",
        },
        {
          key: "isFood",
          label: "Food",
        },
        {
          key: "isBeauty",
          label: "Beauty",
        },
        {
          key: "isTravel",
          label: "Travel",
        },
        {
          key: "isHealth",
          label: "Health",
        },
      ],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    _delete(id) {
      axios.post("https://aibedo.kisra.co.th/deletekeyword", { id: id });
      location.reload();
    },
    fetchData() {
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
.page {
  float: right;
  margin-top: 10px;
  margin-right: 30px;
  border: 2px solid black;
  /* background-color: black; */
}
/* .page-link{
  background-color: black;
} */
/* .page > li {
  color: white;
  background-color: green !important;
} */
.header {
  margin-left: auto;
  margin-right: auto;
  font-size: 32px;
  text-shadow: 1px 1px black;
}
.card {
  border-radius: 10px;
  margin-bottom: 60px;
  margin-top: 15px;
  width: 790px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fadd79;
  /* background-color: #fad79; */
  border-color: #fadd79;
  border-width: 2px;
  box-shadow: 8px 8px black;
}
#keyword-table {
   /* border: 2px solid black; */
  /* border-width: 10px; */
  width: 700px;
  /* width: auto; */
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  background-color: white;
  border-radius: 5px;
  /* border-color: #8155FD; */
  
}

.head{
  background-color: white;
  text-align: center;
  width: 260px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 10px;
  /* border-width: 2px; */
  border: 2px solid black;
  height: 60px;
  margin-top: 20px;
  padding: 10px;
}
/* .pagination li {
    display: inline;
    color: #6c58bF;
} */
/* .b-pagination >>> .li {
  color: red;

} */
.customPagination > li > a {
  color: red;
}

.customPagination > li.active > a,
.customPagination > li > a:hover
{
  color: white;
  background-color: green!important;
}
    

/* .page /deep/ > li.active > a, */
.page /deep/ li > a:hover{
  color: white;
  background-color: green!important;

}
.pagination .page-item.active .page-link {
        color: #000;
        background-color:red;
}
    


  .b-table::v-deep tr{
    background-color: violet;
    color: teal;
  }
  
</style>