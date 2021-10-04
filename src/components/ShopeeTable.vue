<template>
  <div id="shopee-table" class="container">
    <b-table
     hover bordered 
     thead-class="bg-dark text-white"
      id="shopee"
      :items="Data"
      :per-page="perPage"
      :current-page="currentPage"
      :fields="fields"
      small
    >
      <template #cell(number)="row">
        {{ row.index + 1 }}
      </template>
      <template #cell(name)="row">
        <a class="a-link" :href="row.item.url">{{ row.item.name }}</a>
      </template>
      <template #cell(img_src)="row">
        <div class="container" v-if="row.item.img_src != 'no img'">
          <button
            class="btn btn-info show"
            v-bind:id="row.index"
            v-on:click="showImage(row.index, row.item.id)"
          >Show Image</button>
          <br />
          <img
            :src="row.item.img_src"
            width="200"
            height="200"
            class="image"
            v-bind:id="row.item.id"
          />
        </div>
        <div class="container" v-else>
          <div class="no-img">No image</div>

        </div>
      </template>
    </b-table>

    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="shopee"
      class="page"
    ></b-pagination>
    
  </div>
</template>

<script>
export default {
  name: "ShopeeTable",
  props: ["Data"],
  data() {
    return {
      Data: this.Data,
      perPage: 10,
      currentPage: 1,
      fields: [
        {
          key: "number",
          label: "No.",
        },
        {
          key: "id",
          label: "ID",
        },
        {
          key: "name",
          label: "Product Name",
        },
        {
          key: "price",
          label: "Price",
        },
        {
          key: "sold",
        },
        {
          key: "star",
        },
        {
          key: "img_src",
          label: "Image"
        },
      ],
    };
  },
  mounted() {
  },
  methods: {
    showImage(btn_id,img_id){
      let image = document.getElementById(img_id);
      let button = document.getElementById(btn_id);
      // console.log(image.style.display)
      if(image.style.display == 'none' || button.textContent.includes('Show Image')){
        console.log(1)
        image.style.display = 'block';
        button.textContent = 'Hide Image'
        button.className = 'btn btn-info hide' 
      }
      else{
        image.style.display = 'none';
        button.textContent = 'Show Image'
        button.className = 'btn btn-info show' 
        console.log(2)
      }
    }
  },
  computed: {
    rows() {
      return this.Data.length;
    },
  },
};
</script>

<style scoped>

.page{
  border: 2px solid black;
  float: right;
}
.image{
  display: none;
}
.show{
  background-color: #7DFFB1;
  color: black;
  border-width: 2px;
  border-color:black;
}
.b-table{
  background-color: white;
  margin-top: 20px;
}
.hide{
  background-color: grey;
  color: white;
  border-width: 2px;
  border-color:black;

}
.a-link{
  color: #850F39;
}
.a-link:hover{
  color: #9382FF;
}
.no-img{
  background-color: #FC4F4F;
  color: white;
  text-align: center;
  width: 100px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 30px;
  /* border: 2px solid black; */
  height: 50px;
  padding: 10px;
}

</style>
