<template>
  <div id="form-job">
    <div class="container">
      <div class="card">
        <div class="card-body">
          <form action="">
            <h4 class="card-title">Job</h4>
            <br />
            <!-- Service -->
            <div class="mb-3">
              <label class="form-label">Service</label>
              <select
                v-model="job.service"
                id="service"
                class="form-select"
                v-on:change="selected()"
                required
              >
                <option
                  v-for="service in services"
                  :key="service"
                  :value="service.id"
                >
                  {{ service.name }}
                </option>
              </select>
            </div>
            <!-- Keyword -->
            <div class="mb-3">
              <label class="form-label">Keyword</label>
              <select
                id="select-service"
                v-model="job.keyword"
                class="form-select"
                required
              >
                <option
                  v-for="keyword in keywords"
                  :key="keyword"
                  :value="keyword.id"
                >
                  {{ keyword.word }}
                </option>
              </select>
            </div>
            <!-- Page Name -->
            <div id="facebook-page" class="mb-3">
              <label class="form-label">Page Name</label>
              <select class="form-select" required>
                <option></option>
              </select>
            </div>
            <!-- Page Amount -->
            <div id="page-amount" class="mb-3">
              <label class="form-label">Page</label>
              <input
                v-model="job.page"
                type="number"
                class="form-control"
                min="1"
                required
              />
            </div>
            <!-- Post Amount -->
            <div id="post-amount" class="mb-3">
              <label class="form-label">Post</label>
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
        service: "",
        keyword: "",
        page: "",
      },
      keywords: "",
      services: "",
    };
  },
  mounted() {
    axios.get("http://localhost:3000/").then((response) => {
      this.services = response.data.services;
      this.keywords = response.data.keywords;
    });
  },
  methods: {
    addJob() {
      axios
        .post("http://localhost:3000/post", this.job)
        .then(() => {
          this.$router.push("/");
          this.job = {
            keyword: "",
            page: "",
          };
        })
        .catch((error) => {
          console.error(error);
        });
    },
    selected() {
      let service = document.getElementById("service").value;
      let facebook_page = document.getElementById("facebook-page");
      let post_amount = document.getElementById("post-amount");
      let page_amount = document.getElementById("page-amount");
      if (service === "1" || service === "2" || service === "4") {
        post_amount.style.display = "none";
        page_amount.style.display = "block";
      } else {
        post_amount.style.display = "block";
        page_amount.style.display = "none";
        if (service == "5") {
          facebook_page.style.display = "block";
        }
        else{
          facebook_page.style.display = "none";
        }
      }
    },
  },
};
</script>

<style scoped>
.card {
  margin-top: 70px;
  margin-left: auto;
  margin-right: auto;
  width: 40rem;
}
#button {
  text-align: right;
}

#facebook-page {
  display: none;
}

#page-amount {
  display: none;
}

#post-amount {
  display: none;
}
</style>