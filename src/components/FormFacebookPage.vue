<template>
  <div id="form-facebook-page">
    <div class="container">
      <div class="card" id="card-form">
        <div class="card-header">Create Facebook Page</div>
        <div class="card-body">
          <form>
            <div class="row">
              <div class="col-8">
                <input
                  v-model="FacebookPage.name"
                  type="text"
                  class="form-control"
                  placeholder="Enter page name ..."
                /> 
              </div>
              <div class="col-4">
                <button
                  v-on:click="addPage()"
                  type="button"
                  class="btn btn-primary"
                  id="create"
                >
                  Create
                </button>
              </div>
              <div class="col-8">
                <!-- <label for="">Page ID</label> -->
                <input
              v-model="FacebookPage.page_id"
              type="text"
              class="form-control"
              placeholder="Enter page ID ..."
            />


              </div>
              <div class="col-4">
                <button
              type="reset"
              value="Reset"
              class="btn btn-warning"
              id="clear"
            >
              Clear
            </button>
              </div>
            </div>

            
            
          </form>
        </div>
      </div>

      <br />
    </div>
  </div>
</template>

<script>
import axios from "axios";
// require('dotenv').config({ path: '../.env' })
// import dotenv from "dotenv";
// import VUE_APP_KEY from ".env";
import {key} from "@/env.js";

// console.log(env(VUE_APP_KEY))
export default {
  name: "FormFacebookPage",
  mounted(){
    // const env = require("../env")
    // dotenv.config()
    // console.log(process.env.GG)
    // console.log(env)
  },
  data() {
    return {
      FacebookPage: {
        name: "",
        page_id: "",
      },
    };
  },
  methods: {
    addPage() {
      console.log(this.FacebookPage);
      axios
        .post(
          "https://aibedo.kisra.co.th/facebook_page/post",
          this.FacebookPage
        )
        .then(() => {
          location.reload();
        });
    },
  },
};
</script>

<style scoped>
.card-header {
  text-align: center;
  text-shadow: 1px 1px white;
  font-weight: 500;
  background-color: #fadd79;
  border-color: #fcd23f;
  border-width: 1px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  font-size: 22px;
  margin-bottom: 20px;
}
.card-body {
  background-color: #ffffee;
  border-color: #fcd23f;
  border-width: 1px;
  border-radius: 10px;
}
.form-control {
  margin-bottom: 25px;
  margin-top: 0px;
  max-width: 300px;
  margin-left: 20px;
  margin-right: 15px;
  border-radius: 7px;
  border-width: 1.5px;
  /* width: ; */
}
.form-control:focus{
  border-color: #FFEEB1;
  border-width: 2px;
  box-shadow: 0 0 0 0;
}
#create {
  background-color: #9976fb;
  border-color: white;
  margin-left: 20px;
  margin-bottom: 15px;
  margin-top: 0px;
  width: 90px;
  border-radius: 7px;
  box-shadow: 0 0 0 0;
}
#create:hover{
  color: #8944E1;
  background-color: #ffffff;
  border-color: #8944E1;
  border-width: 2px;

}
#clear {
  background-color: #ffeeb1;
  color: #725d5d;
  border-color: white;
  margin-left: 20px;
  margin-bottom: 15px;
  margin-top: 0px;
  width: 90px;
  border-radius: 7px;
  box-shadow: 0 0 0 0;
}
#clear:active{
  background-color: #ffeeb1;
  color: #725d5d;
  border-color: white;
  margin-left: 20px;
  margin-bottom: 15px;
  margin-top: 0px;
  width: 90px;
  border-radius: 7px;
  box-shadow: 0 0 0 0;

}
#clear:hover{
  border-color: #ffeeb1;
  color: #FCD23F;
  background-color: white;
  border-width: 2px;
}
#card-form {
  border-color: #FFEEB1;
  border-width: 2px;
  border-radius: 10px;
  margin-top: 10px;
  max-width: 500px;
  width: auto;
  max-height: 500px;
  height: auto;
  background-color: #ffffee;
  padding-bottom: 50;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  
}
</style>