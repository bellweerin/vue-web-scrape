<template>
  <div id="progress-bar-facebook-job">
    <b-progress  :max="Current_progress.count_facebook_jobs" class="outer-progress" show-progress animated>
      <b-progress-bar id="progress" class="progress-bar bg-light" :value="Current_progress.count_success_facebook_jobs" show-progress animated>
        <span><strong class="amount-jobs">{{ Current_progress.count_success_facebook_jobs }} / {{ Current_progress.count_facebook_jobs }}</strong></span>
      </b-progress-bar>
      
    </b-progress>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "ProgressBarFacebookJobs",
  mounted() {
    this.fetchData();
    this.updateProgress();
  },
  data() {
    return {
      Current_progress: {
          count_facebook_jobs:0,
          count_success_facebook_jobs:0
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
        axios.get("https://aibedo.kisra.co.th/job/facebook/progress").then((response) => {
          this.Current_progress = response.data.current_progress_facebook_jobs
          console.log(this.Current_progress)
        });
    },
    progressColor(){
      let success = this.Current_progress.count_success_facebook_jobs;
      let all = this.Current_progress.count_facebook_jobs;
      let percent = (success*100)/all;
      console.log("percent",percent);
      let progress = document.getElementById("progress");

      if(percent <= 25 ){
        progress.className = "progress-bar red-25";
      }
      else if(percent <= 50 && percent > 25){
        progress.className = "progress-bar orange-50";
      }
      else if(percent <= 75 && percent > 50){
        progress.className = "progress-bar yellow-75";
      }
      else if(percent > 75 && percent < 100){
        progress.className = "progress-bar green-99";
        // progress.style.animation = "animate-stripes 3s linear infinite"
      }
      else if(percent == 100){
        progress.className = "progress-bar blue-100"
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
  .red-25{
    background-color: #FC4F4F;
  }
  .orange-50{
    background-color: #FFBE82;

  }
  .yellow-75{
    background-color: #FFEA7D;

  }
  .green-99{
    background-color: #A7FF7D;
  }
  .blue-100{
    background-color: #7DFFB1;
  }
  .amount-jobs{
    border-width: 1px;
    border-color: black;
    color: black;
  }

  .outer-progress{
    height: 30px;
    /* width: 550px; */
    border: 2px solid black;
    margin-top: 5.5px;
    margin-bottom: auto;
    max-width: 490px;
  }
</style>
