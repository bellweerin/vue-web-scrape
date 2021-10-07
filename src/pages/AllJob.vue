<template>
  <div id="all-job">
    <div class="container">
      <div class="card" id="all-job-card">
        <div class="card-body">
          <div class="row">
            <div class="col-4">
              <button
                v-on:click="create()"
                type="button"
                class="btn btn-info"
                id="create"
              >
                Create jobs
              </button>
              <button v-on:click="run()" class="btn btn-secondary" id="run">
                Run jobs
              </button>
            </div>
            <div class="col-8">
              <span class="pg"><progress-bar></progress-bar> </span>
            </div>
          </div>
        </div>
      </div>

      <button id="load" class="btn btn-warning" type="button" disabled>
        <span
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>

      <!-- <div id="load" class="spinner-border text-warning" role="status">
        <span class="sr-only"></span>
      </div> -->

      <table-all-job></table-all-job>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TableAllJob from "@/components/TableAllJob";
import ProgressBar from "@/components/ProgressBar";

export default {
  name: "App",
  components: { TableAllJob, ProgressBar },
  mounted() {},
  methods: {
    run() {
      // this.loading();
      axios
        .post("https://aibedo.kisra.co.th/job/run")
        .then((response) => {
          console.log(response);
          location.reload();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    create() {
      this.loading();
      axios.post("https://aibedo.kisra.co.th/job/create")
        .then((response) => {
          console.log(response);
          this.success();
          location.reload();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    start() {
      axios
        .post("https://aibedo.kisra.co.th/job/start")
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    stop() {
      axios
        .post("https://aibedo.kisra.co.th/job/stop")
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    changeState() {
      let job_button = document.getElementById("job-button");
      if (job_button.innerText == "start") {
        job_button.className = "btn btn-danger";
        job_button.innerText = "stop";
        this.start();
      } else {
        job_button.className = "btn btn-primary";
        job_button.innerText = "start";
        this.stop();
      }
    },
    loading() {
      let load = document.getElementById("load");
      load.style.display = "block";
    },
    success() {
      let load = document.getElementById("load");
      load.style.display = "none";
    },
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  },
};
</script>

<style scoped>
#all-job-card {
  margin-right: auto;
  margin-left: auto;
}

#run,#run:active {
  background-color: #95e5ff;
  color: black;
  border-color: black;
  border-radius: 7px;
  border-width: 2px;
  margin-bottom: auto;
  margin-top:auto;
  box-shadow: 0 0 0 0;
}
#run:hover{
  color: #00C2FF;
  background-color: white;
  border-color: #95E5FF;
  border-width: 2px;
}
#amount {
  width: 5rem;
}
#create,#create:active{
  color: white;
  background-color: #9976fb;
  border-color: black;
  border-radius: 7px;
  border-width: 2px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: auto;
  margin-top:auto;
  box-shadow: 0 0 0 0;
}
#create:hover{
  color: #8944E1;
  background-color: #ffffff;
  border-color: #8944E1;
  border-width: 2px;
}
.card{
  width: 800px;
  margin-top: 40px;
  margin-bottom: 30px;
  border-radius: 7px;
  border-width: 2px;
  box-shadow: 5px 8px black;
  background-color: #FAA6A6;
}
.pg{
  margin-right: 30px;
  margin-bottom: auto;
  margin-top:auto;
}
#load{
  display: none;
  background-color: #F14AFF;
  color: #ffffff;
  border-color: #F14AFF;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}

</style>
