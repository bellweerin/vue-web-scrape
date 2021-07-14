<template>
  <div id="all-job">
    <div class="container">
      <div class="card" id="all-job-card">
        <div class="card-body">
          <button v-on:click="create()" type="button" class="btn btn-info">
            create
          </button>
          <button v-on:click="run()" class="btn btn-secondary">run</button>
          <button
            id="job-button"
            v-on:click="changeState()"
            class="btn btn-danger"
          >
            stop
          </button>
        </div>
      </div>
      <progress-bar></progress-bar>
      <div id="load" class="spinner-border text-warning" role="status">
        <span class="sr-only"></span>
      </div>
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
      this.loading();
      axios.post("http://localhost:3000/job/run").then((response) => {
          location.reload();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    create() {
      this.loading();
      axios.post("http://localhost:3000/job/create").then((response) => {
          location.reload();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    start() {
      axios.post("http://localhost:3000/job/start").then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    stop() {
      axios.post("http://localhost:3000/job/stop")
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
  },
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
#load {
  display: none;
}
</style>
