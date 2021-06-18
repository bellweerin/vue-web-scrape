<template>
    <div id="table-keyword">
        <div class="container">
      <table class="table" id="job-table">
        <thead>
          <tr class="table-warning">
            <th scope="col">Keyword</th>
            <th scope="col">Service</th>
            <th scope="col">Page</th>
            <th scope="col">Status</th>
            <th scope="col">Start</th>
            <th scope="col">End</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr v-for="job in Jobs" :key="job.id">
            <td>{{job.keyword}}</td>
            <td>{{job.service}}</td>
            <td>{{job.page}}</td>
            <td>{{job.status}}</td>
            <td>{{job.start_time}}</td>
            <td>{{job.end_time}}</td>
          </tr> -->
         </tbody>
      </table>
    </div>

    </div>
    
</template>

<script>
export default {
    name: "TableKeyword",
    mounted(){
        
    },
    methods: {
        
    }

}
</script>

<style scoped>

</style>