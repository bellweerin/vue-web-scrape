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
            <div id="keyword" class="mb-3">
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
                  :value="[keyword.thai_word, keyword.eng_word]"
                >
                  {{ keyword.thai_word + "/" + keyword.eng_word }}
                </option>
              </select>
            </div>
            <!-- Page Name -->
            <div id="facebook-page" class="mb-3">
              <label class="form-label">Page Name</label>
              <select class="form-select" v-model="job.keyword" required>
                <option v-for="page in facebook_pages" :key="page">
                  {{ page.name }}
                </option>
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
              <button
                id="search"
                type="button"
                class="btn btn-primary"
                v-on:click="addJob()"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div id="load" class="spinner-border text-warning" role="status">
        <span class="sr-only">Loading...</span>
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
        keyword: [],
        page: "",
      },
      keywords: "",
      services: "",
      facebook_pages: "",
    };
  },
  mounted() {
    axios.get("https://aibedo.kisra.co.th/").then((response) => {
      this.services = response.data.services;
      this.keywords = response.data.keywords;
      this.facebook_pages = response.data.facebook_pages;
    });
  },
  methods: {
    addJob() {
      this.loading();
      axios
        .post("http://localhost:3000/post", this.job)
        .then((response) => {
          console.log(response);
          // this.success();
          location.reload();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    selected() {
      let service = document.getElementById("service").value;
      let facebook_page = document.getElementById("facebook-page");
      let keyword = document.getElementById("keyword");
      let post_amount = document.getElementById("post-amount");
      let page_amount = document.getElementById("page-amount");
      if (service === "1" || service === "2" || service === "4") {
        post_amount.style.display = "none";
        page_amount.style.display = "block";
        keyword.style.display = "block";
        facebook_page.style.display = "none";
      } else {
        post_amount.style.display = "block";
        page_amount.style.display = "none";
        if (service == "5") {
          facebook_page.style.display = "block";
          keyword.style.display = "none";
        } else {
          facebook_page.style.display = "none";
          keyword.style.display = "block";
        }
      }
    },
    loading() {
      let load = document.getElementById("load");
      load.style.display = "block";
    },
    success() {
      let load = document.getElementById("load");
      load.style.display = "none";
    },
    hideBG() {
      let form = document.getElementById("form-job");
      form.style.visibility = "hidden";
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

#load {
  display: none;
}
</style>