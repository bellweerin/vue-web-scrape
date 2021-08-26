<template>
  <div id="keywordList" class="container">
    <h1>keywordlist page</h1>
    <h3>{{ thai_word }} / {{ eng_word }}</h3>

    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Service</th>
          <th scope="col">Count</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(data, index) in Object.entries(Keyword_fillter)"
          :key="data"
        >
          <td>{{ index + 1 }}</td>
          
          <td>{{ data[1][0].service }}</td>
          <td>{{ data[1][0].count }}</td>
          <td>
            <router-link
              :to="{
                name: 'keyword-fillter',
                params: {
                  service: data[1][0].service,
                  id: id,
                  service_id: index + 1,
                },
              }"
              type="button"
              class="btn btn-primary"
              >table</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import TableKeyword from "../components/TableKeyword.vue";
import TableKeywordFillter from "./TableKeywordFillter.vue";

export default {
  components: {
    TableKeyword,
    TableKeywordFillter,
  },
  name: "KeywordList",
  data() {
    return {
      Keyword_fillter: {
        service: "",
        thai_word: "",
        eng_word: "",
        count: 0,
      },
      modalService: "",
      modalId: 0,
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.thai_word = this.$route.params.thai_word;
    this.eng_word = this.$route.params.eng_word;
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData(){
      axios.get("https://aibedo.kisra.co.th/fillterkeyword", {
        params: {
          id: this.id,
        },
      })
      .then((response) => {
        this.Keyword_fillter = response.data.lodash;
        console.log(this.Keyword_fillter);
      });
    }
  },
};
</script>
