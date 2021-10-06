<template>
  <div id="progress-bar">
    <b-progress :max="Current_progress.count_all_job" class="outer-progress" id="out-pg" show-progress animated>
      <b-progress-bar id="progress" class="progress-bar bg-white" :value="Current_progress.count_success_job" show-progress animated>
        <span><strong class="amount-jobs">{{ Current_progress.count_success_job }} / {{ Current_progress.count_all_job }}</strong></span>
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
        axios.get("https://aibedo.kisra.co.th/job/progress").then((response) => {
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
    border-color: white;
    border-width: 2px;
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
    margin-top: 5.5px;
    /* border-width: 2px; */
    border: 2px solid black;
    margin-bottom: auto;
    max-width: 490px;
  }
</style>
