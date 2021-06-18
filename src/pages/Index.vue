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

export default {
  name: "Index",
  components: {
    FormJob,
    TableJob
  }
}
</script>

<style scoped>

</style>
