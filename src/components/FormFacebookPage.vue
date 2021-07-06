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
      },
    };
  },
  methods: {
    addPage() {
      axios.post("https://aibedo.kisra.co.th/facebook_page/post?v="+Math.random,this.FacebookPage).then(() => {
        location.reload()
      })
    },
  },
};
</script>