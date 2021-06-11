<template>
  <div id="app">
    <!-- <router-view /> -->
    <form-job></form-job>
    <br>
    <br>
    <table-job></table-job>

    <!-- <hello/> -->
   
  </div>
</template>

<script>

import FormJob from '@/components/FormJob'
import TableJob from '@/components/TableJob'
// import HelloWorld from '@/componens/HelloWorld'

export default {
  name: 'App',
  components: {
    FormJob,
    TableJob
  }
}
</script>

<style>

</style>
