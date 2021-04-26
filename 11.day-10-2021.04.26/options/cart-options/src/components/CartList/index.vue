<template>
  <div>
    <div class="item" v-for="item in productorList" :key="item.id">
    <img :src="item.img" />
    <div class="name">{{item.name}}</div>
    <div class="change">
      <a href="">-</a>
      <input type="text" class="num" :value="item.num">
      <!-- 阻止标签默认事件 -->
      <a href="" @click.prevent="handleAddList(item.id)">+</a>
    </div>
    <div class="del" @click.prevent="handleRemove(item.id)">x</div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  props: {
    productorList: {
      type: Array,
      required: true
    }
  },
  methods: {
    //添加商品数量
    handleAddList(id: number) {
      this.$emit("add",id)
    },

    // 删除商品
    handleRemove(id: number) {
      this.$emit("del",id)
    }
  }
})
</script>

<style>

</style>