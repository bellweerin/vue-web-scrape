<template>
  <div id="progress-bar">
        <b-progress :max="Current_progress.count_all_job" height="2rem" show-progress animated>
      <b-progress-bar :value="Current_progress.count_success_job">
        <span><strong>{{ Current_progress.count_success_job }} / {{ Current_progress.count_all_job }}</strong></span>
      </b-progress-bar>
    </b-progress>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "ProgressBar",
  mounted() {
    this.fetchData();
    this.updateProgress();
  },
  data() {
    return {
      Current_progress: {
          count_all_job:0,
          count_success_job:0
      },

    };
  },
  methods: {
    fetchData() {
        this.axiosData();
    },
    updateProgress(){
        setInterval(function () {
        this.axiosData();
      }.bind(this), 2000 );
    },
    axiosData(){
        axios.get("http://localhost:3000/job/progress").then((response) => {
          this.Current_progress = response.data.current_progress
        });
    }
  },
};
</script>
