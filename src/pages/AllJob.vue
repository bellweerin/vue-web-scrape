<template>
  <div id="all-job">
    <div class="container">
      <div class="card" id="all-job-card">
        <div class="card-body">
          <button v-on:click="create()" class="btn btn-info">create</button>
          <button v-on:click="run()" class="btn btn-secondary">run</button>
          <button id="job-button" v-on:click="changeState()" class="btn btn-primary">start</button>
          <!-- <button v-on:click="run()" class="btn btn-danger">start</button> -->
          
        </div>
      </div>
      <table-all-job></table-all-job>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import TableAllJob from '@/components/TableAllJob';

export default {
  name: "App",
  components: { TableAllJob},
  mounted(){
    
  },
  methods:{
    run(){
      axios.post("http://localhost:3000/job/run").then((response) => {
        console.log(response);
        location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
    },
    create(){
      axios.post("http://localhost:3000/job/create").then((response) => {
        console.log(response);
        location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
    },
    start(){
      axios.post("http://localhost:3000/job/start").then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
    },
    stop(){
      axios.post("http://localhost:3000/job/stop").then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
    },
    changeState(){
      let job_button = document.getElementById("job-button");
      if( job_button.innerText == 'start'){
        job_button.className = 'btn btn-danger';
        job_button.innerText = 'stop';
        this.start();
      }
      else{
        job_button.className = 'btn btn-primary';
        job_button.innerText = 'start';
        this.stop();
      }
    }
  }
};
</script>

<style scoped>
#all-job-card {
  width: 40rem;
}

#run {
  width: 20rem;
}
#amount {
  width: 5rem;
}
</style>
