<template>
  <div class="total">
    <span>总价：{{price}}</span>
    <button>结算</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import "../../types/composition"

export default defineComponent({
  props: {
    productList: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const {productList} = props
    console.log(productList);
    
    const price = computed(() => {
      let sum = 0;
      productList.forEach((ele: productItem) => {
        sum += ele.num * ele.price
      })
      return sum
    })

    return {
      price
    }
  }
})
</script>


<style>

</style>