<template>
  <div id="table-all-job">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="job-table"
    ></b-pagination>

    <!-- <table class="table" :Jobs=Jobs id="job-table">
      <thead>
        <tr class="table-warning">
          <th scope="col">Page name/Keyword</th>
          <th scope="col">Service</th>
          <th scope="col">Posts amount/Pages amount</th>
          <th scope="col">Status</th>
          <th scope="col">Created</th>
          <th scope="col">Start</th>
          <th scope="col">End</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="job in Jobs" :key="job.id">
          <td>{{ job.keyword }}</td>
          <td>{{ job.service }}</td>
          <td>{{ job.page }}</td>
          <td>{{ job.status }}</td>
          <td>{{ job.created_time.replace("T", " ") }}</td>
          <td>{{ job.start_time }}</td>
          <td>{{ job.end_time }}</td>
        </tr>
      </tbody>
    </table> -->

    <b-table
      id="job-table"
      :items="Jobs"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>
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
      perPage: 20,
      currentPage: 1,
    };
  },
  mounted() {
    this.fetchData();
    this.updateStatus();
    // this.reverse();
    
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
        this.Jobs = this.Jobs.map(r => {
          let start_time = "not start"
          let end_time = "not done"
          let created_time = moment(r.created_time).format('llll')

          if(r.start_time){
            start_time = moment(r.start_time).format('llll')
          }
          if(r.end_time){
            end_time = moment(r.end_time).format('llll')
          }

          return{
            ...r,
            created_time,
            start_time,
            end_time
            }
        })

      });
    },
    reverse(jobs){
      jobs.reverse();
      // console.log(jobs);
      // for(let job of jobs){
      //   console.log(job.id)
      // }
      // for (let i =0;i<this.Jobs.length;i++) {
      //   // console.log(this.Jobs[i])
      //   console.log(i);
      // }
    }
  },
  computed: {
    rows() {
      return this.Jobs.length;
    },
  },
};
</script>