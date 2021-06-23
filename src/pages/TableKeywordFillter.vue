<template>
  <div id="table-keyword-service">
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
      Data:{}
    };
  },
  created() {
      this.service = this.$route.params.service,
      this.id = this.$route.params.id
  },
  mounted() {
    axios.get("http://localhost:3000/getKeywordByService",{
              params:{
                  service:this.service,
                  id:this.id
              }
        }).then((response) => {
            this.Data = response.data.data;
            console.log(this.Data)
        })
    

  },
  methods: {
    createTable(){
      var rows = this.Data
      var html = '<table>';
      html += '<tr>';
      for( var j in rows[0] ) {
        html += '<th>' + j + '</th>';
      }
      html += '</tr>';
      for( var i = 0; i < rows.length; i++) {
        html += '<tr>';
        for( var j in rows[i] ) {
          html += '<td>' + rows[i][j] + '</td>';
        }
        html += '</tr>';
      }
      html += '</table>';
      document.getElementById('table-keyword-service').innerHTML = html;
    }
  }
}
</script>