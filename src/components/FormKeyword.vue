<template>
  <div id="form-keyword">
    <div class="container">
      <!-- <h1>Create Keyword</h1> -->
      <div class="card" id="card-form">
        <div class="card-header">Create Keyword</div>
        <div class="card-body">
          <form>
            <div class="row">
              <!-- input -->
              <div class="col-6">
                <!-- <div class=""> -->
                <!-- <div class="col"> -->
                <!-- <label for="" class="">Thai keyword</label> -->
                <input
                  type="text"
                  v-model="Keyword.thai_word"
                  class="form-control"
                  placeholder="Enter Thai keyword ..."
                  required
                />
                <!-- </div> -->
                <!-- <div class="col"> -->
                <!-- <label for="" class="">English keyword</label> -->
                <input
                  type="text"
                  v-model="Keyword.eng_word"
                  class="form-control"
                  placeholder="Enter English keyword ..."
                  required
                />
                <!-- </div> -->
                <!-- </div> -->
              </div>

              <!-- check -->
              <div class="col check-type">
                <label for="" id="type">Type</label>
                <div class="row">
                  <div class="col-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="is_food"
                        v-model="Keyword.is_food"
                      />
                      <label class="form-check-label"> food </label>
                    </div>
                  </div>
                  <div class="col-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="is_health"
                        v-model="Keyword.is_health"
                      />
                      <label class="form-check-label"> health </label>
                    </div>
                  </div>
                  <div class="col-3 last-col">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="is_beauty"
                        v-model="Keyword.is_beauty"
                      />
                      <label class="form-check-label"> beauty </label>
                    </div>
                  </div>
                  <!-- <div class="col-3"></div> -->
                  <div class="col-3">
                    <span class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="is_spa"
                        v-model="Keyword.is_spa"
                      />
                      <label class="form-check-label"> spa </label>
                    </span>
                  </div>
                  <div class="col-3">
                    <span class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="is_travel"
                        v-model="Keyword.is_travel"
                      />
                      <label class="form-check-label"> travel </label>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <button
              v-on:click="addKeyword()"
              type="button"
              class="btn btn-primary"
              id="create"
            >
              Create
            </button>
            <button
              type="reset"
              value="Reset"
              id="clear"
              class="btn btn-warning"
            >
              Clear
            </button>
          </form>
        </div>
      </div>
      

      <br />
    </div>
  </div>
</template>
<script>
// import axios from "axios";
export default {
  name: "FormKeyword",
  data() {
    return {
      Keyword: {
        thai_word: "",
        eng_word: "",
      },
    };
  },
  methods: {
    addKeyword() {
      axios
        .post("https://aibedo.kisra.co.th/createkeyword", this.Keyword)
        .then(() => {
          location.reload();
        });
      // axios.post('http://localhost:3000/createkeyword',this.Keyword)
    },
  },
};

</script>

<style scoped>
#card-form {
  max-width: 650px;
  width: auto;
  padding-bottom: 50;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  border-radius: 10px;
  border-width: 3px;
  background-color: #eef1ff;
  border-color: #c3b0fb;
  margin-bottom: 20px;
  /* box-shadow: 5px 5px #fadd79; */
}
.card-header {
  background-color: #8944e1;
  text-align: center;
  color: white;
  font-size: 22px;
  text-shadow: 1px 1px black;
  font-weight: 500;
  border-top-left-radius: 9px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}
#create,#create:active {
  color: white;
  background-color: #9976fb;
  border-color: #ffffff;
  border-radius: 7px;
  width: 90px;
  /* margin-left: -100px; */
  /* margin-right: -100px; */
  /* float: right; */
  /* right:-100px; */
  position: relative;
  margin: 0 auto;
  left: 400px;
  margin-bottom: 10px;
  box-shadow: 0 0 0 0;
}
#create:hover{
  color: #8944E1;
  background-color: #ffffff;
  border-color: #8944E1;
  border-width: 2px;
}
#clear,#clear:active {
  color: #725d5d;
  background-color: #ffeeb1;
  border-color: #ffffff;
  border-radius: 7px;
  width: 90px;
  margin-bottom: 15px;
  float: right;
  margin-right: 17px;
  /* margin-left: mr; */
}
#clear:hover{
  border-color: #ffeeb1;
  color: #FCD23F;
  background-color: white;
  border-width: 2px;
}
.card-body {
  background-color: #eef1ff;
  border-radius: 10px;
}
.form-control {
  max-width: 350px;
  border-radius: 7px;
  border-width: 1.5px;
  margin-bottom: 20px;
  margin-top: 15px;
  margin-left: 20px;
}
.form-control:focus {
  box-shadow: 0 0 0 0;
  border-color: #c3b0fb;
  border-width: 2px;
}
label {
  margin-bottom: 5px;
}
.form-check-input:checked,.form-check-input:focus {
  box-shadow: 0 0 0 0;
  background-color: #fadd79;
  border-color: white;
}
.form-check-input:active{
  background-color: #fadd79;
  border-color: white;

}
.form-check-input:not(:checked){
  background-color: white;
  border-color: #ced4da;
}
.check-type {
  margin-left: 30px;
  margin-top: 15px;
}
.last-col {
  margin-left: 10px;
}
#type{
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}


</style>