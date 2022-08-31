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