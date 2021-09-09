<template>
  <!-- https://www.jianshu.com/p/205bf97a71e5?utm_source=oschina-app -->
  <div class="f rw xc ac h100vh">
    <lottie :options="defaultOptions" style="width:200px;height:200px;" v-on:animCreated="handleAnimation" />
  </div>
</template>
<script>
import * as animationData from './lottie.json';
import lottie from 'vue-lottie';
export default {
  name: 'breath',
  components: {
    lottie
  },
  data(){
    return {
      defaultOptions: { animationData: animationData.default },
    }
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
      console.log(anim); //这里可以看到 lottie 对象的全部属性
    },
  },
  created(){
  
  },
}
</script>
<style>
</style>