<template>
  <div id="table-keyword-service" class="container">
    <div class="card">
      <div class="card-header"> <h1 class="head">{{service}}</h1></div>
      <div class="card-body">
        <div v-if="this.service === 'shopee'">
          <ShopeeTable :Data="this.Data"></ShopeeTable>
        </div>
        <div v-if="this.service === 'amazon'">
          <AmazonTable :Data="this.Data"></AmazonTable>
        </div>
        <div v-if="this.service === 'pantip'">
          <PantipTable :Data="this.Data"></PantipTable>
        </div>
        <div v-if="this.service === 'jd'">
          <JdTable :Data="this.Data"></JdTable>
        </div>
        <div v-if="this.service === 'facebook'">
          <FacebookTable :Data="this.Data"></FacebookTable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShopeeTable from "../components/ShopeeTable.vue";
import AmazonTable from "../components/AmazonTable.vue";
import PantipTable from "../components/PantipTable.vue";
import JdTable from "../components/JdTable.vue";
import FacebookTable from "../components/FacebookTable.vue";
import axios from "axios";

export default {
  name: "TableKeywordFillter",
  props: ["service", "id"],
  components: {
    ShopeeTable,
    AmazonTable,
    PantipTable,
    JdTable,
    FacebookTable,
  },
  data() {
    return {
      service: this.service,
      id: this.id,
      service_id: this.service_id,
      keyword: this.keyword,
      Data: {},
    };
  },
  created() {
    this.service = this.$route.params.service;
    this.id = this.$route.params.id;
    this.service_id = this.$route.params.service_id;
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get("https://aibedo.kisra.co.th/getKeywordByService", {
          params: {
            service: this.service,
            id: this.id,
            service_id: this.service_id,
            keyword: this.keyword,
          },
        })
        .then((response) => {
          this.Data = response.data;
          console.log("data", this.Data);
        });
    },
  },
};
</script>

<style scoped>
.card {
  margin-top: 50px;
  box-shadow: 8px 8px black;
  background-color: #FFAB5E;
}
.card-header{
  text-align: center;
  background-color: #850F39;
  border-color: #850F39;
}
.head{
  color: snow;
  text-shadow: 2px 2px black;
  text-transform:uppercase
}
</style>