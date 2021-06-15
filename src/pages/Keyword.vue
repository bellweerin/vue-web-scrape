<template>
  <div id="keyword">
    <div class="container">
      <table class="table" id="job-table">
        <thead>
          <tr class="table-warning">
            <!-- <th scope="col">Keyword</th> -->
            <th scope="col">Count</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="keyword in Keywords.shopee" :key="keyword">
            <!-- <div v-for="data in keyword" :key="data.id"> -->
            <td>{{keyword.count}}</td>
            <!-- </div> -->

            <!-- <div v-for=""></div> -->
            <!-- <td>{{keyword.keyword}}</td> -->
            <!-- <td>{{keyword.count}}</td> -->
            <!-- <td>{{job.page}}</td>
            <td>{{job.status}}</td>
            <td>{{job.start_time}}</td>
            <td>{{job.end_time}}</td> -->
          </tr>
        </tbody>
      </table>

      <div v-for="keyword in Keywords.shopee" :key="keyword">
        <h5>{{keyword.count}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Keyword",

  mounted() {
    axios.get("http://localhost:3000/status").then((response) => {
      console.log(response.data);
      this.Keywords = response.data;
      console.log(Keywords);
    //   console
    });
  },
  data() {
    return {
      Keywords: {}
    };
  },
};
</script>

<style>
</style>
