<template>
  <div>
    {{this.$route.query.id}}
  </div>
</template>

<script>
export default {
    head() {
    return {
     title: "小子",
    meta:[
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ]
   }
  },
created () {
  console.log(this.$route);
}
}
</script>

<style>

</style>