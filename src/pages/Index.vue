<template>
  <div id="index">
    <form-job></form-job>
    <br>
    <br>
    <table-job></table-job>
  </div>
</template>
<script>

import FormJob from "@/components/FormJob"
import TableJob from "@/components/TableJob"
import dotenv from "dotenv"
dotenv.config()
export default {
  name: "Index",
  components: {
    FormJob,
    TableJob
  },
  mounted(){
    // console.log(process.env.VUE_APP_KEY)
  }
}
</script>

<style scoped>

</style>
