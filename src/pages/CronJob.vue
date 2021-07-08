<template>
    <div id="cron-job">
        <button>RUN</button>
        
        <TableJob/>
        
    </div>
    
</template>
<script>
import TableJob from "@/components/TableJob";
import axios from 'axios';

    export default {
    name : "CronJob",
    components : {TableJob},

    mounted(){
        // this.fetchData()
    },

    methods:{
         runJob(){
             
         },
         fetchData(){
             axios.get("")
         }
    }
  
}
</script>