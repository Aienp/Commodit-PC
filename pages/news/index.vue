<template>
  <div>
    <h1>新闻</h1>
    <ul>
      <li v-for="item in list" :key="item.id" @click="tiaozhuan(item.id)">
      {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
data () {
  return {
    list: [{ id: 1, name: 'jadjadkajnksdnaksndka' },
    {id:2,name:'jadjadkajnksdnaksndka'}]
  }
  },
methods: {
  tiaozhuan(id) {
    this.$router.push(`/news/${id}`)
  }
}
}
</script>

<style>

</style>