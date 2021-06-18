<template>
<div>
    <h1>keywordlist page</h1>
    <h2>{{id}}</h2>
    <h3>{{word}}</h3>
</div>
</template>

<script>

export default{
    components:{},
    name: "KeywordList",
    data(){
        return{
            data : 0
        }
    },
    created(){
        this.id = this.$route.params.id;
        this.word = this.$route.params.word;
    }
};
</script>
