<template>
  <div>
    <div class="item" v-for="item in productList" :key="item.id">
      <img :src="item.img" />
      <div class="name">{{item.name}}</div>
      <div class="change">
        <a href="">-</a>
        <input type="text" class="num" :value="item.num">
        <a href="" @click.prevent="handleAddProduct(item.id)">+</a>
      </div>
      <div class="del" @click="handelDeleteProduct($event,item.id)">x</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  props: {
    productList:{
      type: Array,
      required: true
    },
  },
  setup(props,{emit}) {
    // 删除商品
    const handelDeleteProduct = function (event: MouseEvent, id) {
      // console.log(id);
      emit("del",id)
    }
    // 增加个数
    const handleAddProduct = function(id) {
      emit("add",id)
    }
    return {
      handelDeleteProduct,
      handleAddProduct
    }
  }
})
</script>

<style>

</style>