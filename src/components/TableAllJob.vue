<template>
  <div id="table-all-job">
    <div class="container">
      <div class="card">
        <div class="head"><h1 class="header">Jobs Table</h1></div>
        <div class="card-body">
          <b-table
            bordered
            hover
            thead-class="bg-dark text-white"
            id="job-table"
            :items="Jobs"
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
                <div class="success">{{ row.item.status }}</div>
              </div>
              <div v-if="row.item.status == 'waiting'">
                <div class="waiting">{{ row.item.status }}</div>
              </div>
              <div v-if="row.item.status == 'failed'">
                <div class="failed">{{ row.item.status }}</div>
              </div>
              <div v-if="row.item.status == 'in progress'">
                <div class="in-progress">{{ row.item.status }}</div>
              </div>
            </template>
          </b-table>

          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            class="page"
            aria-controls="job-table"
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
  name: "TableAllJob",
  data() {
    return {
      Jobs: [],
      perPage: 50,
      currentPage: 1,
      fields: [
        { key: "number", label: "No." },
        {
          key: "id",
          label: "ID",
        },
        { key: "keyword", label: "Keyword" },
        { key: "service", label: "Service" },
        { key: "page", label: "Page" },
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
    this.updateStatus();
  },

  methods: {
    fetchData() {
      this.axiosData();
    },
    updateStatus() {
      setInterval(
        function () {
          this.axiosData();
        }.bind(this),
        10000
      );
    },
    axiosData() {
      axios.get("https://aibedo.kisra.co.th/job").then((response) => {
        // console.log(response.data);
        this.Jobs = response.data.jobs;
        this.Jobs = this.Jobs.map((r) => {
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
      });
    },
    reverse(jobs) {
      jobs.reverse();
      // console.log(jobs);
      // for(let job of jobs){
      //   console.log(job.id)
      // }
      // for (let i =0;i<this.Jobs.length;i++) {
      //   // console.log(this.Jobs[i])
      //   console.log(i);
      // }
    },
  },
  computed: {
    rows() {
      return this.Jobs.length;
    },
  },
};
</script>

<style scoped>
.page {
  float: right;
  margin-right: 20px;
  border: 2px solid black;
}
.header {
  margin-left: auto;
  margin-right: auto;
  font-size: 32px;
  text-shadow: 1px 1px black;
}
.head {
  background-color: white;
  text-align: center;
  width: 250px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 10px;

  /* border-width: 2px; */
  border: 2px solid black;
  height: 60px;
  margin-top: 20px;
  padding: 10px;
}
.card {
  border-radius: 10px;
  margin-bottom: 60px;
  margin-top: 60px;
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fadd79;
  border-color: #fadd79;
  border-width: 2px;
  box-shadow: 8px 8px black;
}

#job-table {
  background-color: white;
  width: 920px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 20px;
}
.success {
  background-color: #7dffb1;
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
.waiting {
  background-color: #ffea7d;
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
.failed {
  background-color: #fc4f4f;
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
.in-progress {
  background-color: #7dffe8;
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