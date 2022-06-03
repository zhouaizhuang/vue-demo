<template>
  <div class="mh100vh pt30r">
    <canvas width="400" height="500" ref="canvasRef1">您的浏览器版本过低，请升级浏览器或者使用chrome打开</canvas>
  </div>
</template>
<script>
import cat from "../../../assets/cat.jpg"
export default {
  name: '',
  components:{},
  data(){
    return {
      
    }
  },
  methods:{
    drawImg(){
      const ref = this.$refs.canvasRef1
      const ctx = ref.getContext('2d')
      const img = new Image()
      img.src= cat
      img.onload = function(){
        // 显示图片宽高
        console.log(img.width, img.height)
        // 3个参数：ctx.drawImage(img, x, y)    // img: 图片对象    x   y 图片绘制左上角
        ctx.drawImage(img, 0, 0) // 大图
        // 5个参数：ctx.drawImage(img, x, y, w, h)    // img: 图片对象    x   y 图片绘制左上角     w h图片绘制尺寸设置（图片缩放， 不是截取）
        ctx.drawImage(img, 0, 0, 200, 200) // 中图
        // 9个参数：ctx.drawImage(img, sx, sy, sw, sh, x, y, w, h)
        // img: 图片对象    sw   sh 图片裁剪宽高  x y图片绘制左上角     w h图片绘制尺寸设置（图片缩放， 不是截取）
        ctx.drawImage(img, 0, 0, 100 , 100 , 10, 10, 100, 100);	// 裁剪后的小图
      }
    }
  },
  created(){
    
  },
  mounted(){
    this.drawImg()
  },
}
</script>
<style scoped>
</style>