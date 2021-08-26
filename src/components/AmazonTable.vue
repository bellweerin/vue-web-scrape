<template>
  <div id="amazon-table" class="container">
    <!-- <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="amazon"
    ></b-pagination>

    <b-table
      id="amazon"
      :items="Data"
      :per-page="perPage"
      :current-page="currentPage"
      :fields="fields"
      small
    ></b-table> -->
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">product id</th>
          <th scope="col">brand</th>
          <th scope="col">name</th>
          <th scope="col">rank</th>
          <th scope="col">rating</th>
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
          <td>{{ data.brand }}</td>
          <td>{{ data.name }}</td>
          <td>{{ data.rank }}</td>
          <td>{{ data.rating }}</td>
          <td>{{ data.review }}</td>
          <td><img :src="data.img_src" width="250" height="250" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "AmazonTable",
  props: ["Data"],
  data() {
    return {
      Data: this.Data,
      perPage: 50,
      currentPage: 1,
      fields: [
        {
          key: "id",
        },
        {
          key: "name",
        },
        {
          key: "rank",
        },
        {
          key: "rating",
        },
        {
          key: "review",
        },
        {
          key: "img_src",
        },
      ],
    };
  },
  mounted() {
    // console.log(Data)
  },
  methods: {},
  computed: {
    rows() {
      return this.Data.length;
    },
  },
};
</script>
