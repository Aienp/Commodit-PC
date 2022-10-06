<template>
  <div class="w">
   <Tab :category="category" @ProductList="ProductList" ></Tab>
   <div class="p-8 rounded-xl shadow  flex mt-6" v-for="item in list " :key="item.name" >
    <div class="w-3/5 flex flex-col justify-center">
      <div>
        <h2 class="text-2xl font-bold">{{item.name}}</h2>
        <p class="mt-3">{{item.description}}</p>
        <p class="mt-2">预订按金:{{item.advance||0}}</p>
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
  import Tab from './Tab.vue'
export default {
  components: {
    Tab
  },
  data() {
    return {
      list: [],
      category: [],
      id:''
    }
  },
  created() {
   this.Commoditycategory()
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
    async ProductList(id) {
      this.id = id
      this.Product()
    },
  }
}
</script>

<style>
  .w{
    width: 640px;
    margin: auto;
  }
  .tab{
    border-bottom:2px solid rgb(99, 70, 164);
  }
</style>