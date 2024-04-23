<template>
  <div class="mh100vh pt30r">
    <canvas width="400" height="500" ref="canvasRef1">您的浏览器版本过低，请升级浏览器或者使用chrome打开</canvas>
  </div>
</template>
<script>
/*保证canvas清晰的条件： 原始尺寸  ===  样式尺寸 * 缩放倍率 
   const ctx = ref.getContext('2d')
   ctx.width  这是原始尺寸
   canvas{ 
    width:200px; // 样式尺寸
    height:200px; // 样式尺寸
   }
   所以，咱们不改样式尺寸，就需要调整原始尺寸。
   假设，宽度 原始尺寸200px   样式尺寸200px  缩放倍率 window.devicePixelRatio为2
   那么就应该设置原始尺寸为 200 * window.devicePixelRatio
*/
export default {
  name: 'circleAni',
  components:{},
  data(){
    return {
      timeId: null,
    }
  },
  methods:{
    startCircle(){
      const ref = this.$refs.canvasRef1
      
      console.log(window.devicePixelRatio)
      const ctx = ref.getContext('2d')
      let start = Math.PI * 2 * 1 / 360
      let end = Math.PI * 2
      ctx.lineWidth = 2
      ctx.strokeStyle = 'red'
      this.timeId = setInterval(() => {
        ctx.clearRect(0, 0, 400, 250); // 清空画布
        if(start >= end) {
          clearInterval(this.timeId)
        }
        const temp = Math.PI * 5 /360
        ctx.beginPath();
        ctx.arc(180, 120, 100, 0, start + temp, false)
        ctx.stroke()
        start += temp
      }, 15)
      ctx.arc(180, 380, 100, 0, Math.PI * 2, false)
      ctx.stroke()
      ctx.beginPath();
    },
  },
  created(){
    
  },
  mounted(){
    this.startCircle()
  },
}
</script>
<style scoped>
</style>