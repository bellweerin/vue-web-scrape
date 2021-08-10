<template>
  <div id="jd-table" class="container">
     <!-- <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="jd"
    ></b-pagination>

    <b-table
      id="jd"
      :items="Data"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table> -->
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">product id</th>
          <th scope="col">name</th>
          <th scope="col">price</th>
          <th scope="col">send from</th>
          <th scope="col">review</th>
          <th scope="col">img</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in Data" :key="data">
          <td>{{ index + 1 }}</td>
          <td>
            <a :href="data.url" target="_blank">{{ data.product_id }}</a>
          </td>
          <td>{{ data.name }}</td>
          <td>{{ data.price }} บาท</td>
          <td>{{ data.send_from }}</td>
          <td>{{ data.review }}</td>
          <td><img :src="data.img_src" width="250" height="250" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script >
import axios from "axios";
export default {
  name: "JdTable",
  props: ["Data"],
  data() {
    return {
      Data: this.Data,
      perPage: 50,
      currentPage: 1,
    };
  },
  mounted() {
    axios.get("");
    console.log(this.Data);
  },
  methods: {},
  computed: {
    rows() {
      return this.Data.length;
    },
  },
};
</script>
