<template>
  <div id="progress-bar">
    <b-progress :max="Current_progress.count_all_job" height="2rem" show-progress animated>
      <b-progress-bar id="progress" class="progress-bar progress-bar-striped bg-danger" :value="Current_progress.count_success_job" show-progress animated>
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
    updateProgress(){
      setInterval(function () {
        this.fetchData();
        this.progressColor();
      }.bind(this), 2000 );
      
    },
    fetchData(){
        axios.get("http://localhost:3000/job/progress").then((response) => {
          this.Current_progress = response.data.current_progress
        });
    },
    progressColor(){
      let success = this.Current_progress.count_success_job;
      let all = this.Current_progress.count_all_job;
      let percent = (success*100)/all;
      console.log("percent",percent);
      let progress = document.getElementById("progress");

      if(percent <= 25 ){
        progress.className = "progress-bar progress-bar-striped bg-danger";
      }
      else if(percent <= 50 && percent > 25){
        progress.className = "progress-bar progress-bar-striped bg-warning";
      }
      else if(percent <= 75 && percent > 50){
        progress.className = "progress-bar progress-bar-striped bg-info";
      }
      else {
        progress.className = "progress-bar progress-bar-striped bg-success";
        // progress.style.animation = "animate-stripes 3s linear infinite"
      }

    }
    
  },
};
</script>

<style scoped>
  #progress {
    animation: animate-stripes 3s linear infinite;
  }
  @keyframes animate-stripes {
    100% {background-position: 60px 0;}
    
  }
</style>
