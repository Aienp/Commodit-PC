<template>
  <div class="w">
    <div class="flex-none flex items-center py-4 px-6 bg-white sticky top-0 shadow z-30 justify-between p-4">
      <div v-for="(item,index) in category"
           :key="index"
           :class=" index == currentIndex  ? 'tab':''"
           >
      <button  class="py-2 px-5 rounded-full inline-block " @click="ProductList(item.id,index)">{{item.name}}</button>
      </div>
    </div>
   <div class="p-8 rounded-xl shadow  flex mt-6" v-for="item in list " :key="item.name" >
    <div class="w-3/5 flex flex-col justify-center">
      <div>
        <h2 class="text-2xl font-bold">{{item.name}}</h2>
        <p class="mt-3">{{item.description}}</p>
        <p class="mt-2">预订按金:{{item.advance}}</p>
        <div class="flex justify-between mt-2">
          <p>售价:{{item.price}}</p>
          <h2 class="mx-8">{{item.preorderable == true ? "可接受预订" : '不接受预订'}}</h2>
        </div>
        <p class="mt-2">需要付按金:{{item.require_advance == true ? '是' : '否'}}</p>
      </div>
    </div>
    <div class="w-2/5">
      <img :src="item.image" alt="error" />
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      category: [],
      currentIndex: 0,
      id:''
    }
  },
  created() {
    this.Commoditycategory()
    // this.ProductList()
   this.Product()
  },
  methods: {
    Commoditycategory() {
      this.$axios({
        method: 'GET',
        url: '/api/categories',
      }).then(res => {
        console.log(res);
        this.category = res.data.data
        this.category.unshift({name:'全部',id:''});
      })
    },
    Product() {
      console.log(this.id);
      this.$axios({
        method: 'GET',
        url: `/api/products`,
        params: {category:this.id},
      }).then(res => {
        console.log('..........', res);
        this.list = res.data.data
      })
    },
   async ProductList(id, index) {
      this.id = id
      this.currentIndex = index
      this.Product()
    },
  }
}
</script>

<style>
  body{
   /* background-color: #ccc; */
  }
  .w{
    width: 640px;
    margin: auto;
  }
  .tab{
    border-bottom:2px solid rgb(99, 70, 164);
  }
</style>