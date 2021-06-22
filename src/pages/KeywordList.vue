<template>
<div id = "keywordList" class="container">
    <h1>keywordlist page</h1>
    <h2>{{id}}</h2>
    <h3>{{thai_word}} / {{eng_word}}</h3>
    <h4>{{Object.keys(Keyword_fillter)}}</h4>
    
    <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Service</th>
      <th scope="col">Count</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="data in Keyword_fillter" :key="data">
    <!-- <div v-for="value in data" :key="value"></div> -->
      <th scope="row">{{(Object.keys(Keyword_fillter).indexOf(Object.values(data)[0].service))+1}}</th>
      <!-- <th scope="row">1</th> -->
      <td>{{Object.values(data)[0].service}}</td>
      <td>{{Object.values(data)[0].count}}</td>
      <td><button>table</button></td>

    </tr>
  </tbody>
</table>
</div>
</template>

<script>

export default{
    components:{},
    name: "KeywordList",
    data(){
        return{
            Keyword_fillter :{
                service: '',
                thai_word: '',
                eng_word: '',
                count: 0
            }
        }
    },
    created(){
        this.id = this.$route.params.id;
        this.thai_word = this.$route.params.thai_word;
        this.eng_word = this.$route.params.eng_word;
    },
    mounted() {
    axios.get("http://localhost:3000/fillterkeyword",{
        params:{
            id : this.$route.params.id
        }
    }).then((response) => {
        this.Keyword_fillter = response.data.lodash; 
        console.log(this.Keyword_fillter)     
    })
  },

};
</script>
