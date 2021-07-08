<template>
  <div id="form-keyword">
    <div class="container">
      <h1>Create Keyword</h1>
      <form>
        <div class="form-row">
          <div class="col-6">
            <input type="text" v-model="Keyword.thai_word" class="form-control" placeholder="Thai-Word" required />
          </div>
          <div class="col-6">
            <input type="text" v-model="Keyword.eng_word" class="form-control" placeholder="Eng-Word" required/>
          </div>
        </div>
        <button v-on:click="addKeyword()" type="button" class="btn btn-primary">Create</button>
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
                thai_word : '',
                eng_word : ''

            }
        }
    },
    methods: {
        addKeyword(){
            // axios.post('https://aibedo.kisra.co.th/createkeyword?v='+Math.random,this.Keyword).then(() => {
            //   location.reload()
            // })
            axios.post('http://localhost:3000/createkeyword',this.Keyword)
        }
    }

}
</script>

<style scoped>

</style>