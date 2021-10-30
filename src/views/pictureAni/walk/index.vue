<!--图片帧动画-->
<!--在线将图片制作为精灵图网址：https://www.toptal.com/developers/css/sprite-generator/-->
<template>
  <div>
    <div class="wrapper" :style="styleObj"></div>
  </div>
</template>
<script>
export default {
  name: 'Walk',
  data(){
    return {
      styleObj:{},
      pos: 0,
    }
  },
  methods: {
 
  },
  created(){
    setInterval(() => {
      if(this.pos < 8) {
        this.styleObj = { 'background-position': `${-this.pos*184}px 0px` }
        this.pos++
      } else {
        this.pos = 0
      }
    }, 60)
  }
}
</script>
<style>
.wrapper {
  width: 184px;
  height: 325px;
  background-image: url('test.jpg');
  background-size: 800% 100%; /**因为有8张图，所有横向宽度为8倍当前宽度 */
  background-repeat: no-repeat;
  margin: 100px auto;
}
</style>