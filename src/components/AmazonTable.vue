<template>
    <div id="amazon-table" class="container">
        <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">product id</th>
      <th scope="col">name</th>
      <th scope="col">link</th>
      <th scope="col">rank</th>
      <th scope="col">rating</th>
      <th scope="col">review</th>
      <th scope="col">img</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(data,index) in Data" :key="data">
      <td>{{index+1}}</td>
      <td>{{data.product_id}}</td>
      <td>{{data.name}}</td>
      <td><a :href="data.url" target="_blank">link</a></td>
      <td>{{data.rank}}</td>
      <td>{{data.rating}}</td>
      <td>{{data.review}}</td>
      <td><img :src="data.img_src" width="250" height="250"></td>
    </tr>
  </tbody>
</table>
    </div>
</template>

<script>
export default {
  name: "AmazonTable",
  props:["Data"],
  data() {
    return {
      Data:this.Data,
    };
  },
  mounted() {
    // console.log(Data)
  },
  methods: {
  }
};
</script>
