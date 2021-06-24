<template>
    <div id="shopee-table" class="container">
        <table class="table table-dark" data-toggle="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">product id</th>
      <th scope="col">name</th>
      <th scope="col">link</th>
      <th scope="col">price</th>
      <th scope="col">send from</th>
      <th scope="col">sold</th>
      <th scope="col">star</th>
      <th scope="col">img</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(data,index) in Data" :key="data">
      <td>{{index+1}}</td>
      <td>{{data.product_id}}</td>
      <td>{{data.name}}</td>
      <td><a :href="data.url" target="_blank">link</a></td>
      <td>{{data.price}} บาท</td>
      <td>{{data.send_from}}</td>
      <td>{{data.sold}} ชิ้น/เดือน</td>
      <td>{{data.star}}</td>
      <td><img :src="data.img_src" width="250" height="250"></td>
    </tr>
  </tbody>
</table>
    </div>
</template>

<script>
export default {
  name: "ShopeeTable",
  props:["Data"],
  data() {
    return {
      Data:this.Data,
    };
  },
  mounted() {
    
  },
  methods: {
  }
};
</script>
