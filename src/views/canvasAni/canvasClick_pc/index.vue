<!--更多检测方法：https://zhuanlan.zhihu.com/p/436494294-->
<!--fibric.js库解决：https://juejin.cn/post/7026941253845516324-->
<!--考虑扇形饼图的点击和hover：https://blog.csdn.net/qq_20423863/article/details/90701917-->
<!--运用三角函数去计算，限制距离原型的距离，然后横纵坐标不超过多少-->
<template>
  <div class="mh100vh pt30r w80 auto">
    <canvas ref="canvas" width="700" height='450' style="" />
     <div class="f mt20">
      <Button type="primary" class="mr10" @click="addRandomCircle">添加圆圈</Button>
      <Button type="error" @click="clearCanvas">清空画布</Button>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style scoped>
canvas {
  cursor: pointer;
  border: 1px solid black;
}
</style>