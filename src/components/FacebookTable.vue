<template>
  <div id="facebook-table" class="container">
    <b-table
      bordered
      hover
      thead-class="bg-dark text-white"
      id="facebook"
      :items="Data"
      :per-page="perPage"
      :current-page="currentPage"
      :fields="fields"
      small
    >
      <template #cell(number)="row">
              {{ (row.index + ((currentPage-1) * perPage)) + 1 }}
            </template>
            
      <template #cell(post_text)="row">
        <a target="_blank" class="a-link" :href="row.item.post_url">{{ row.item.post_text }}</a>
      </template>
      <!-- <template #cell(image_l)="row">
        {{ row.item.image_l }}
        <div class="container" v-if="row.item.image_l != 'no img'">
         
          <button
            class="btn btn-info show"
            v-bind:id="row.index"
            v-on:click="showImage(row.index, row.item.id)"
          >
            Show Image
          </button>
          <br />
          <img
            :src="row.item.image_l"
            width="200"
            height="200"
            class="image"
            v-bind:id="row.item.id"
          />
        </div>
        <div class="container" v-else>
          <div class="no-img">No image</div>
        </div>
      </template> -->
    </b-table>

    <b-pagination
      class="page"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="facebook"
    ></b-pagination>
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
          key: "user_name",
        },
        {
          key: "post_text",
        },
        {
          key: "meaning",
        },
        // {
        //   key: "image_l",
        //   label: "Image",
        // },
      ],
    };
  },
  mounted() {},
  methods: {
    showImage(btn_id, img_id) {
      let image = document.getElementById(img_id);
      let button = document.getElementById(btn_id);
      console.log(button.textContent);
      if (
        image.style.display == "none" ||
        button.textContent.includes("Show Image")
      ) {
        console.log(1);
        image.style.display = "block";
        button.textContent = "Hide Image";
        button.className = "btn btn-info hide";
      } else {
        image.style.display = "none";
        button.textContent = "Show Image";
        button.className = "btn btn-info show";
        console.log(2);
      }
    },
  },
  computed: {
    rows() {
      return this.Data.length;
    },
  },
};
</script>

<style scoped>
.page {
  border: 2px solid black;
  float: right;
}
.image {
  display: none;
}
.show {
  background-color: #7dffb1;
  color: black;
  border-width: 2px;
  border-color: black;
}
.b-table {
  background-color: white;
  margin-top: 20px;
}
.hide {
  background-color: grey;
  color: white;
  border-width: 2px;
  border-color: black;
}
.a-link {
  color: #850f39;
}
.a-link:hover {
  color: #9382ff;
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


