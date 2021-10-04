/* eslint-disable */
<template>
  <div id="app">
    <div>
      <b-navbar id="scraper-navbar">
        <b-navbar-nav id="scraper-inner-navbar">
          <b-nav-item href="#"><span class="logo">SCRAPER</span></b-nav-item>
          <!-- <b-collapse id="nav-collapse" is-nav></b-collapse> -->
          <!-- <b-nav-item to="/"><span class="menu">Home</span></b-nav-item> -->
          <b-nav-item to="all-job"><span class="menu">Jobs</span></b-nav-item>
          <b-nav-item to="facebook-job"
            ><span class="menu">Facebook Jobs</span></b-nav-item
          >
          <b-nav-item to="status"><span class="menu">Status</span></b-nav-item>
            
        
         
         

          <b-nav-item-dropdown no-caret class="menu" >
            <template slot="button-content"><span class="menu">Manage <i class="fa fa-caret-down"></i></span></template>
            <b-dropdown-item to="keyword" class="manage-child"
              >Keyword</b-dropdown-item
            >
            <b-dropdown-item href="facebook-page" class="manage-child"
              >Facebook Page</b-dropdown-item
            >
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

<style scoped>
#scraper-navbar {
  background-color: #9382ff;
  height: 3rem;
}
#scraper-inner-navbar {
  color: white;
}
.menu {
  color: white;
}
.menu:hover {
  color: #3d335a;
}
.menu:active{
  color: black;

 
}
.menu.selected{
  color: black;

}
.logo {
  color: black;
  font-style: italic;
  text-shadow: 1px 1px grey;
  width: 400px;
  height: 400px;
  background-color: #ffeeb1;
  border-radius: 15px;
  font-weight: bold;
}
#manage-dropdown {
  color: white;
}
.dropdown .nav-link {
  color: #fff !important;
}
/* .manage-child{
  background-color: black;
  color: white;
} */
/* .dropdown-item {
  & ::v-deep .manage-child {
    background-color: green;
  }
} */

.manage-child > li > a:hover
{
  color: white;
  background-color: green!important;
}

</style>
