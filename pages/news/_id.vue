<template>
  <div>
    内容
  </div>
</template>

<script>
export default {
    head() {
    return {
     title:this.$route.params.id,
    meta:[
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ]
   }
  },
  created () {
    console.log(this.$route.params.id);
  }
}
</script>

<style>

</style>