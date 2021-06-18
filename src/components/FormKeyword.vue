<template>
  <div id="form-keyword">
    <div class="container">
      <h1>Create Keyword</h1>
      <form>
        <div class="form-row">
          <div class="col-6">
            <input type="text" class="form-control" placeholder="Thai-Word" />
          </div>
          <div class="col-6">
            <input type="text" class="form-control" placeholder="Eng-Word" />
          </div>
        </div>
        <button v-on="addKeyword()" type="submit" class="btn btn-primary">Create</button>
        <button type="reset" value="Reset" class="btn btn-warning">
          Clear
        </button>
      </form>

      <br />
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'FormKeyword',
    data() {
        return { 
            Keyword: {
                word : ''
            }
        }
    },
    methods: {
        addKeyword(){
            axios.post()
        }
    }

}
</script>

<style scoped>

</style>