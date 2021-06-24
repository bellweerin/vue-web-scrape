<template>
    <div id="facebook-table" class="container">
        <table class="table table-dark" data-toggle="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">post id</th>
      <th scope="col">post</th>
      <th scope="col">link</th>
      <th scope="col">img</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(data,index) in Data" :key="data">
      <td>{{index+1}}</td>
      <td>{{data.post_id}}</td>
      <td>{{data.post_text}}</td>
      <td><a :href="data.post_url" target="_blank">link</a></td>
      <td><img :src="data.image_h" width="250" height="250"></td>
    </tr>
  </tbody>
</table>
    </div>
</template>

<script>
export default {
  name: "FacebookTable",
  props:["Data"],
  data() {
    return {
       Data:this.Data,
    };
  },
  mounted() {
    console.log("aaaaaaaaaaaaaa",this.Data)
    console.log(this.Data)
  },
  methods: {
  }
};
</script>
