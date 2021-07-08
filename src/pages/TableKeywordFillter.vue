<template>
  <div id="table-keyword-service" class="container">
    <h1>{{this.service}}</h1>
    <div v-if="this.service==='shopee'" >
      <ShopeeTable :Data="this.Data"></ShopeeTable>
    </div>
    <div v-if="this.service==='amazon'" >
      <AmazonTable :Data="this.Data"></AmazonTable>
    </div>
    <div v-if="this.service==='pantip'" >
      <PantipTable :Data="this.Data"></PantipTable>
    </div>
    <div v-if="this.service==='jd'" >
      <JdTable :Data="this.Data"></JdTable>
    </div>
    <div v-if="this.service==='facebook'" >
      <FacebookTable :Data="this.Data"></FacebookTable>
    </div>
  
    
  </div>
  
</template>

<script>
import ShopeeTable from "../components/ShopeeTable.vue"
import AmazonTable from "../components/AmazonTable.vue"
import PantipTable from "../components/PantipTable.vue"
import JdTable from "../components/JdTable.vue"
import FacebookTable from "../components/FacebookTable.vue"
import axios from "axios";

export default {
  name: "TableKeywordFillter",
  props:["service","id"],
  components:{
    ShopeeTable,
    AmazonTable,
    PantipTable,
    JdTable,
    FacebookTable
  },
  data() {
    return {
      service : this.service,
      id : this.id,
      service_id:this.service_id,
      Data:{}
    };
  },
  created() {
      this.service = this.$route.params.service
      this.id = this.$route.params.id
      this.service_id = this.$route.params.service_id
  },
  mounted() {
    axios.get("http://localhost:3000/getKeywordByService",{
              params:{
                  service:this.service,
                  id:this.id,
                  service_id:this.service_id
              }
        }).then((response) => {
            this.Data = response.data.data;
            console.log("data",this.Data)
        })
    

  },
  methods: { }
}
</script>