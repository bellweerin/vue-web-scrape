<template>
  <div id="facebook-table" class="container">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="facebook"
    ></b-pagination>

    <b-table
      id="facebook"
      :items="Data"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>
    <!-- <table class="table table-dark" data-toggle="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">post id</th>
          <th scope="col">post</th>

          <th scope="col">img</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in Data" :key="data">
          <td>{{ index + 1 }}</td>
          <td>
            <a :href="data.post_url" target="_blank">{{ data.post_id }}</a>
          </td>
          <td>{{ data.post_text }}</td>
          <td><img :src="data.image_h" width="250" height="250" /></td>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>

<script>
export default {
  name: "FacebookTable",
  props: ["Data"],
  data() {
    return {
      Data: this.Data,
      perPage: 50,
      currentPage: 1,
    };
  },
  mounted() {
    // console.log("aaaaaaaaaaaaaa", this.Data);
    // console.log(this.Data);
  },
  methods: {},
  computed: {
    rows() {
      return this.Data.length;
    },
  },
};
</script>
