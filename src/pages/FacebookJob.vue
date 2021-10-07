<template>
  <div class="facebook-job">
    <div class="container">
      <div class="card" id="facebook-job-card">
        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <button v-on:click="create()" id="create" class="btn btn-info">
                Create facebook jobs
              </button>
              <button v-on:click="run()" id="run" class="btn btn-secondary">
                Run facebook jobs
              </button>
            </div>
            <div class="col-6">
              <span class="pg"><progress-bar-facebook-job></progress-bar-facebook-job></span>
            </div>
          </div>

          
          <!-- <button
            id="job-button"
            v-on:click="changeState()"
            class="btn btn-danger"
          >
            Cron jobs : disabled
          </button> -->
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
      <!-- <p>{{facebook_jobs}}</p> -->
      <FacebookJobTable></FacebookJobTable>
    </div>
  </div>
</template>

<script>
import FacebookJobTable from "../components/FacebookJobTable.vue";
import ProgressBarFacebookJob from "../components/ProgessbarFacebookJob.vue";
import moment from "moment";
export default {
  name: "FacebookJob",
  // props: ['facebook_jobs'],
  components: { FacebookJobTable, ProgressBarFacebookJob },
  data() {
    return {
      // facebook_jobs: {},
    };
  },
  mounted() {
    // this.fetchData();
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
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    create() {
      this.loading()
      axios
        .post("https://aibedo.kisra.co.th/job/create/facebook")
        .then((response) => {
          console.log(response);
          this.success()
          location.reload();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    run() {
      axios
        .post("https://aibedo.kisra.co.th/job/run/facebook")
        .then((response) => {
          console.log(response);
          location.reload();
        })
        .catch((error) => {
          console.error(error);
        });

    },
    changeState() {},
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
#create,#create:active {
  color: white;
  background-color: #9976fb;
  border-color: black;
  border-width: 2px;
  border-radius: 7px;
  margin-left: 10px;
  margin-right: 10px;
  box-shadow: 0 0 0 0;
}
#create:hover{
  color: #8944E1;
  background-color: #ffffff;
  border-color: #8944E1;
  border-width: 2px;
}
#run,#run:active {
  background-color: #95e5ff;
  color: black;
  border-color: black;
  border-radius: 7px;
  border-width: 2px;
  box-shadow: 0 0 0 0;
}
#run:hover{
  color: #00C2FF;
  background-color: white;
  border-color: #95E5FF;
  border-width: 2px;
}
.card {
  width: 880px;
  margin-top: 40px;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
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
