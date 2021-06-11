<template>
  <div id="form-job">
    <div class="container">
      <div class="card">
        <div class="card-body">
          <form action="">
            <h4 class="card-title">Job</h4>
            <br />
            <div class="mb-3">
              <select
                id="select-service"
                v-model="job.service"
                class="form-select"
                aria-label="Default select example"
              >
                <!-- <option selected>select service</option> -->
                <option value="1">Shopee</option>
                <option value="2">Amazon</option>
                <option value="3">Pantip</option>
                <option value="4">JD</option>
                <option value="3">Facebook</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label">Keyword</label>
              <input
                v-model="job.keyword"
                type="keyword"
                class="form-control"
                id="keyword"
                required
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Page</label>
              <input
                v-model="job.page"
                type="number"
                class="form-control"
                min="1"
                required
              />
            </div>
            <div id="button">
              <button id="search" v-on:click="addJob()" class="btn btn-primary">
                Search
              </button>
              <button id="count" class="btn btn-info">Keyword Count</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "FormJob",
  data() {
    return {
      job: {
        serveice: "",
        keyword: "",
        page: ""
      }
    };
  },
  methods: {
    addJob() {
      axios
        .post("http://localhost:3000/post", this.jobs)
        .then(() => {
          this.$router.push("/job");
          this.job = {
            keyword: "",
            page: ""
          };
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
};
</script>

<style>
.card {
  margin-top: 70px;
  margin-left: auto;
  margin-right: auto;
  width: 40rem;
}
#button {
  text-align: right;
}
</style>