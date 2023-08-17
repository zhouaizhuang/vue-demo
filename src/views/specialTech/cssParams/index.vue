<template>
  <div class="mh100vh">
    <div style="--color: #1890ff;" class="cssParams1">CSS传参方式1</div>
    <div :style="{'--color': randomColor}" class="cssParams2">CSS传参方式2</div>
    <div :style="{color: randomColor}">CSS传参方式3</div>
    <!--CSS传参方式4-->
    <div class="box4">
      <div class="cssParams" style="width:30px;height:30px;background:pink;border-radius:50%;"></div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped>
</style>