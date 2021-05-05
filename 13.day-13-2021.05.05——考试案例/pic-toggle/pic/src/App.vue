<template>
<div class="slide">
  <div class="pic">
    <img :src="'/images/0' + currentIndex + '.jpg'" alt="" />
  </div>
  <span class="btn right" @click="handleNext" v-show="currentIndex < 5">&gt;</span>
  <span class="btn left" @click="handlePrev" v-show="currentIndex > 1">&lt;</span>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// import imgSrc from "../public/"
export default defineComponent({
  name: 'App',
  setup() {
    const currentIndex = ref(1);
    const handleNext = () => {
      currentIndex.value++
    }
    const handlePrev = () => {
      currentIndex.value--
    }
    return {
      currentIndex,
      handleNext,
      handlePrev
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.slide {
  position: relative;
  width: fit-content;
}

.btn {
  position: absolute;
  top: 50%;
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
  transform: translateY(-50%);
  font-size: 40px;
  cursor: pointer;
}

.left {
  left: 0;
}

.right {
  right: 0;
}
</style>
