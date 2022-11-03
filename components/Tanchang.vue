<template>
    <div class="flex justify-center sticky top-4  z-40">
      <div class="bg-gray-900 fixed inset-0 opacity-25"></div>
      <div class="border border-gray-600 bg-white max-w-md w-full mt-24 z-10 rounded shadow-lg overflow-hidden">
       
        <div>
          <div class="bg-yellow-200 text-yellow-700 border-t border-b p-4">修改</div>
          <div class="p-4  border-b border-red-500">
            
            <input
              type="text"
              class="border shadow-inner w-full my-2 rounded-sm px-2 py-1 focus:outline-none focus:shadow-outline focus:border-blue-500"
            />
           <div>
            <button>确定</button>
            <button>取消</button>
           </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  data () {
    return {
      
    }
  },
 methods: {
  qx() {
    this.$emit('qx')
  }
 }
}
</script>

<style>

</style>