<template>
  <div class="fruits">
    <span class="price">总价：{{sum}}</span>
    <div
      class="list"
      v-for="(item, index) in fruitsList"
      :key="index"
      :class="{active: item.done}"
      @click="handleClass(index)"
    >
      {{ item.name }}({{ item.price }}￥)
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    type fruitsType = {
      name: string;
      price: number;
      done: boolean;
    };
    const sum = ref(0)
    const fruitsList: Array<fruitsType> = reactive([
      { name: "苹果", price: 10, done: false },
      { name: "梨子", price: 15, done: false },
      { name: "樱桃", price: 20, done: false },
      { name: "西瓜", price: 25, done: false },
    ]);
    const handleClass = (index) => {
      fruitsList[index].done = !fruitsList[index].done;
      if (fruitsList[index].done) {
        sum.value+=fruitsList[index].price
      }else {
        sum.value-=fruitsList[index].price
      }
    };
    return {
      fruitsList,
      handleClass,
      sum
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.fruits {
  margin: 0 auto;
  width: 400px;
}
.list {
  width: 400px;
  float: left;
  border: 1px solid #000;
}

.price {
  float: right;
}
.active {
  background-color: red;
}
</style>
