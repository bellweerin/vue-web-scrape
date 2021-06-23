<template>
  <div class="facebook-page">
    <form-facebook-page></form-facebook-page>
    <table-facebook-page></table-facebook-page>
  </div>



</template>

<script>
import FormFacebookPage from "@/components/FormFacebookPage";
import TableFacebookPage from "@/components/TableFacebookPage";

export default {
  name : "FacebookPage",
  components : {FormFacebookPage , TableFacebookPage},
  
}
</script>
