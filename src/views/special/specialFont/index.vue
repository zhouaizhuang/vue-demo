
<template>
  <div class="h100vh ovh">
    <div class="lcdd" style="margin:200px auto;width:300px;">
      {{price}}
    </div>
  </div>
</template>
<script>
import { random } from "../../../common.js"
export default {
  name: 'specialFont',
  data(){
    return {
      price: Math.floor(random(50000, 200000)),
    }
  },
  methods:{
  },
  created(){
    setInterval(() => {
      this.price = Math.floor(random(50000, 200000))
    }, 500)
  }
}
</script>
<style scoped>
  @font-face {
    font-family: 'mFont';
    src: url('./quartzRegular.ttf') format('truetype');
  }
  .lcdd{
    font-family: 'mFont';
    font-size: 80px;
  }
</style>