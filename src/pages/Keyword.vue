<template>
  <div id="keyword">
    <form-keyword></form-keyword>
    <table-keyword></table-keyword>
  </div>
  
</template>
<script>
import TableKeyword from "@/components/TableKeyword";
import FormKeyword from "@/components/FormKeyword";
export default {
  name: 'Keyword',
  components: {TableKeyword,FormKeyword}
}
</script>