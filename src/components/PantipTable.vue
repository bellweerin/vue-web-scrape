<template>
    <div id="pantip-table" class="container">
        <table class="table table-dark" id="top">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">post id</th>
      <th scope="col">title</th>
      <th scope="col">story</th>
      <th scope="col">author</th>
      <th scope="col">date time</th>
      <th scope="col">meaning</th>
      <th scope="col">good word</th>
      <th scope="col">bad word</th>
      <th scope="col">img</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(data,index) in Data" :key="data">
      <td>{{index+1}}</td>
      <td><a :href="data.post_link" target="_blank">{{data.post_id}}</a></td>
      <td>{{data.title}}</td>
      <td >{{data.story}}</td>
      <td>{{data.author}}</td>
      <td>{{data.date_time}}</td>
      <td>{{data.meaning}}</td>
      <td>{{data.good_word}}</td>
      <td>{{data.bad_word}}</td>
      <td><img :src="data.img_src" width="250" height="250"></td>
    </tr>
  </tbody>
</table>
    </div>
</template>

<script>
export default {
  name: "PantipTable",
  props:["Data"],
  data() {
    return {
      Data:this.Data,
    };
  },
  mounted() {
    console.log("aaaa",this.Data)
  },
  methods: {
  }
};
</script>
