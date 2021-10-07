<template>
  <div id="facebook-job-table">
    <div class="container">
      <div class="card">
        <div class="head"> <h1 class="header">Facebook Jobs Table</h1></div>
        <div class="card-body">
          <b-table
            bordered
            hover
            thead-class="bg-dark text-white"
            id="table-job-facebook"
            :items="facebook_jobs"
            :per-page="perPage"
            :current-page="currentPage"
            :fields="fields"
          >
           <template #cell(number)="row">
              {{ (row.index + ((currentPage-1) * perPage)) + 1 }}
            </template>
             <template #cell(worker)="row">
              <div v-if="row.item.worker == null">-</div>
              <div v-else>{{row.item.worker}}</div>
            </template>
            
            <template #cell(status)="row">
              <div v-if="row.item.status == 'success'">
              <div class="success">{{row.item.status}}</div>
              </div>
              <div v-if="row.item.status == 'waiting'">
              <div class="waiting">{{row.item.status}}</div>
              </div>
              <div v-if="row.item.status == 'failed'">
              <div class="failed">{{row.item.status}}</div>
              </div>
              <div v-if="row.item.status == 'in progress'">
              <div class="in-progress">{{row.item.status}}</div>
              </div>
              
            </template>
          </b-table>

          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            class="page"
            aria-controls="table-job-facebook"
          ></b-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  name: "FacebookJobTable",
  // props: ["facebook_jobs"],
  components: {},
  data() {
    return {
      facebook_jobs: {},
      perPage: 20,
      currentPage: 1,
       fields: [
        { key: "number", label: "No." },
        {
          key: "id",
          label: "ID",
        },
        { key: "page_name", label: "Page Name" },
        { key: "amount_post", label: "Amount post" },
        { key: "worker", label: "Worker" },
        { key: "created_time", label: "Created time" },
        { key: "start_time", label: "Start time" },
        { key: "end_time", label: "End time" },
        { key: "status", label: "Status" },
      ],
      
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get("https://aibedo.kisra.co.th/job/facebook")
        .then((response) => {
          this.facebook_jobs = response.data;
          this.facebook_jobs = this.facebook_jobs.map((r) => {
            let start_time = "not start";
            let end_time = "not done";
            let created_time = moment(r.created_time).format("llll");
            if (r.start_time) {
              start_time = moment(r.start_time).format("llll");
            }
            if (r.end_time) {
              end_time = moment(r.end_time).format("llll");
            }
            return {
              ...r,
              created_time,
              start_time,
              end_time,
            };
          });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  computed: {
    rows() {
      return this.facebook_jobs.length;
    },
  },
};
</script>

<style scoped>
 .card{
  
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 15px;
  margin-top: 60px;
  margin-bottom: 60px;
  background-color: #8944e1;
  box-shadow: 8px 8px black;
 }
 .header {
  margin-left: auto;
  margin-right: auto;
  font-size: 32px;
  text-shadow: 1px 1px black;
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
  height: 100px;
  margin-top: 20px;
  padding: 10px;
}
 .page{
   float: right;
   margin-right: 30px;
   border: 2px solid black;
 }
 #table-job-facebook{
   background-color: white;
   margin-left: auto;
   margin-right: auto;
   width: 920px;
    margin-top: 10px;
 }
 .success{
  background-color: #7DFFB1;
  color: black;
  text-align: center;
  width: 90px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 30px;
  /* border: 2px solid black; */
  height: 46px;
  padding: 10px;
}
.waiting{
  background-color: #FFEA7D;
  color: black;
  text-align: center;
  width: 90px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 30px;
  /* border: 2px solid black; */
  height: 46px;
  padding: 10px;
}
.failed{
  background-color: #FC4F4F;
  color: white;
  text-align: center;
  width: 90px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 30px;
  /* border: 2px solid black; */
  height: 46px;
  padding: 10px;
}
.in-progress{
  background-color: #7DFFE8;
  color: black;
  text-align: center;
  width: 100px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 30px;
  /* border: 2px solid black; */
  height: 46px;
  padding: 10px;
}
</style>