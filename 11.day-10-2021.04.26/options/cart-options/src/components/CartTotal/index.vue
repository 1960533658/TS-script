<template>
  <div class="total">
    <span>总价：{{price}}</span>
    <button>结算</button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import "../../types/componentsTypes"
export default defineComponent({
  props: {
    productorList: {
      type: Array,
      required: true
    }
  },
  computed: {
    price() {
      let sum = 0;
      this.productorList.forEach((ele: productItem) => {
        sum += ele.num * ele.price
      });

      return sum;
    }
  }
})
</script>

<style>

</style>