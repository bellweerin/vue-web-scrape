<template>
  <div id="app">
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item href="#">BEDO</b-nav-item>
          <!-- <b-collapse id="nav-collapse" is-nav></b-collapse> -->
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="status">Status</b-nav-item> 
          <b-nav-item to="all-job">All Job</b-nav-item>
          

          <b-nav-item-dropdown text="Manage" right>
            <b-dropdown-item to="keyword">Keyword</b-dropdown-item>
            <b-dropdown-item href="facebook-page">Facebook Page</b-dropdown-item>
          </b-nav-item-dropdown>

        </b-navbar-nav>
      </b-navbar>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import FormJob from "@/components/FormJob";
import TableJob from "@/components/TableJob";


export default {
  name: "App",
  components: {
    FormJob,
    TableJob,
  },
};
</script>

<style>
</style>
