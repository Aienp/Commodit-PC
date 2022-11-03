<template>
  <div>
    动态路由{{$router.params}}
  </div>
</template>

<script>
export default {
  created () {
    this.gg()
  },
   methods: {
    gg() {
      console.log(this.$router);
    }
   }
}
</script>

<style>

</style>