<template>
  <div id="form-keyword">
    <div class="container">
      <h1>Create Keyword</h1>
      <div class="card" style="width: 30rem">
        <div class="card-body">
          <form>
            <div class="form-row">
              <div class="col">
                <input
                  type="text"
                  v-model="Keyword.thai_word"
                  class="form-control"
                  placeholder="Thai-Word"
                  required
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  v-model="Keyword.eng_word"
                  class="form-control"
                  placeholder="Eng-Word"
                  required
                />
              </div>
            </div>
            <!-- <div>
              <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="is_food"
                v-model="Keyword.is_food"
              />
              <label class="form-check-label" >
                food
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="is_health"
                v-model="Keyword.is_health"
              />
              <label class="form-check-label" >
                health
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="is_beauty"
                v-model="Keyword.is_beauty"
              />
              <label class="form-check-label" >
                beauty
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="is_spa"
                v-model="Keyword.is_spa"
              />
              <label class="form-check-label" >
                spa
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="is_travel"
                v-model="Keyword.is_travel"
              />
              <label class="form-check-label" >
                travel
              </label>
            </div>

            </div>
             -->
            <button
              v-on:click="addKeyword()"
              type="button"
              class="btn btn-primary"
              id="create"
              
            >
              Create
            </button>
            <button type="reset" value="Reset" class="btn btn-warning">
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
    name: 'FormKeyword',
    data() {
        return { 
            Keyword: {
                thai_word : '',
                eng_word : ''
            }
        }
    },
    methods: {
        addKeyword(){
            axios.post('https://aibedo.kisra.co.th/createkeyword',this.Keyword).then(() => {
              location.reload()
            })
            // axios.post('http://localhost:3000/createkeyword',this.Keyword)
        }
    }

    
  
};
</script>

<style scoped>
</style>