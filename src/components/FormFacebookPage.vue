<template>
  <div id="form-facebook-page">
    <div class="container">
      <h1>Create page</h1>
      <form>
        <div class="form-row">
          <div class="col-6">
            <input
              v-model="FacebookPage.name"
              type="text"
              class="form-control"
              placeholder="Page Name"
            />
            <input
              v-model="FacebookPage.page_id"
              type="text"
              class="form-control"
              placeholder="Page ID"
            />
          </div>
        </div>
        <button v-on:click="addPage()" type="button" class="btn btn-primary">
          Create
        </button>
        <button type="reset" value="Reset" class="btn btn-warning">
          Clear
        </button>
      </form>

      <br />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "FormFacebookPage",
  data() {
    return {
      FacebookPage: {
        name: "",
        page_id:""
      },
    };
  },
  methods: {
    addPage() {
      console.log(this.FacebookPage)
      axios.post("https://aibedo.kisra.co.th/facebook_page/post",this.FacebookPage).then(() => {
        location.reload()
      })
    },
  },
};
</script>