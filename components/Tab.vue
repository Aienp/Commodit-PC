<template>
   <div class="flex-none flex items-center py-4 px-6 bg-white sticky top-4 shadow z-30 justify-between p-4">
      <div v-for="(item,index) in category"
           :key="index"
           :class=" index == currentIndex  ? 'border-b-2 border-indigo-500':''"
           >
      <button  class="py-2 px-5 rounded-full inline-block " @click="ProductList(item.id,index)">{{item.name}}</button>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      currentIndex: 0,
    }
  },
  props: {
    category:[]
  },
  methods: {
    ProductList(id, index) {
    this.currentIndex = index
    this.$emit('ProductList',id)
    }
  }
}
</script>

<style>

</style>