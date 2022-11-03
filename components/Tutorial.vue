<template>
  <div class="w">
      <Tanchang @qx="qx" v-if="bol"></Tanchang>
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
    <button @click="btn">弹窗</button>  
    <nuxt-link :to="`/list?id=${item.id}`">首页</nuxt-link>
  <div @click="tz">列表</div>
    </div>
    <div class="w-2/5">
      <img :src="item.image" alt="error" />
         <!-- <el-cascader
    v-model="value"
    :options="listS"
   ></el-cascader> -->
    </div>
  </div>
       
  </div>
</template>

<script>
import Tab from './Tab.vue'
  import Tanchang from './Tanchang.vue'
export default {
   head() {
    return {
     title: "小小",
    meta:[
      { hid: "description", name: "description", content: "此处是网站描述" },
      { hid: "keywords",name: "format-detection", content: "此处是网站关键词" },
    ]
   }
  },
  components: {
    Tab,
    Tanchang
  },
  data() {
    return {
      bol:false,
      list: [],
      value:'',
      category: [],
      id: '',
      listS:[],
  //     options:[
  // {
  //   "id": 3,
  //   "name": "美的电饭煲",
  //   "code": "C",
  //   "ammeterDeviceStateList": [
  //     {
  //       "id": 247,
  //       "deviceId": 3,
  //       "power": "820",
  //       "state": "快速饭"
  //     },
  //     {
  //       "id": 252,
  //       "deviceId": 3,
  //       "power": "30",
  //       "state": "杂粮粥"
  //     }]
  // },
  // {
  //   "id": 6,
  //   "name": "尚为台灯",
  //   "code": "F",
  //   "ammeterDeviceStateList": [
  //     {
  //       "id": 190,
  //       "deviceId": 6,
  //       "power": "8",
  //       "state": "三档"
  //     },
  //     {
  //       "id": 191,
  //       "deviceId": 6,
  //       "power": "4",
  //       "state": "二档"
  //     },
  //     {
  //       "id": 192,
  //       "deviceId": 6,
  //       "power": "1",
  //       "state": "一档"
  //     }
  //   ]
  // },{
  //   "id": 7,
  //   "name": "尚为台灯111",
  //   "code": "F",
  //   "ammeterDeviceStateList": [
  //     {
  //       "id": 156,
  //       "deviceId": 6,
  //       "power": "8",
  //       "state": "三档"
  //     },
  //     {
  //       "id": 157,
  //       "deviceId": 6,
  //       "power": "4",
  //       "state": "二档"
  //     },
  //     {
  //       "id": 158,
  //       "deviceId": 6,
  //       "power": "1",
  //       "state": "一档22"
  //     }
  //   ]
  // }]

    }
  },
  created() {
   this.Commoditycategory()
    this.Product()
    // this.gg()
  },
  methods: {
    btn() {
      this.bol = true
    },
    tz() {
      this.$router.push({path:'/list',query:{id:this.list[2].id}})
    },
    qx() {
      console.log(111);
      this.bol = false
    },
    nuxtServerList() {
      console.log('nuxtServerList');
    },
  //   gg() {
  // let res = this.options
  //  let arr = res.map(({ name, id, ammeterDeviceStateList }) => ({
  //       value: id,
  //       label: name,
  //       children: ammeterDeviceStateList.map(({ state, id }) => ({
  //         value: id,
  //         label: state,
  //       })),
  //  }));
  //     console.log(arr);
  //     this.listS = arr
  //   },
    Commoditycategory() {
      this.$axios({
        method: 'GET',
        url: '/api/categories',
      }).then(res => {
        // console.log(res);
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
        // console.log('..........', res);
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