<template>
  <div id="table-job">
    <div class="container">
      <table class="table" id="job-table">
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
            <td>{{ job.created_time }}</td>
            <td>{{ job.start_time }}</td>
            <td>{{ job.end_time }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TableJob",
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      Jobs: {},
    };
  },
  methods: {
    fetchData() {
      axios.get("http://localhost:3000/").then((response) => {
        console.log(response.data);
        this.Jobs = response.data.jobs;
      });
    },
  },
};
</script>

<style scoped>
#job-table {
  /* width: 50rem; */
  margin-left: auto;
  margin-right: auto;
}
</style>
