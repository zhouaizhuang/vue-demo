<template>
   <div class="mh100vh pt30r">
    <canvas width="400" height="500" ref="canvasRef1">您的浏览器版本过低，请升级浏览器或者使用chrome打开</canvas>
  </div>
</template>
<script>
export default {
  name: 'strokeText',
  components:{},
  data(){
    return {
      
    }
  },
  methods:{
    drawText() {
      const ref = this.$refs.canvasRef1
      const ctx = ref.getContext('2d')
      ctx.font = "48px serif";
      // 动画版本
      'Hello World'.split('').forEach((item, index) => {
        setTimeout(() => {
          ctx.strokeText(item, 10 + 25 * index, 50);
        }, 100 * index)
      })
      // 不带动画版本
      ctx.strokeText("Hello World", 10, 400);
    }
  },
  created(){
    
  },
  mounted(){
    this.drawText()
  },
}
</script>
<style scoped>
</style>