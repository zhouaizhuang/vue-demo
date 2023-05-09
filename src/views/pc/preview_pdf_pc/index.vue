<!--注意：与当前vue版本兼容的pdfjs-dist插件版本是：2.0.943-->
<!--在package.json中直接编写版本号，之后cnpm i安装-->
<template>
  <div class="bgf5 mh100vh">
    <div class="f xc mb10">
      <Button type="info" @click="prevPage" class="mr15">上一页</Button>
      <Button type="info" @click="nextPage" class="mr15">下一页</Button>
    </div>
    <div class="f ac xc">
      <canvas ref="pdfContainer" class="pdf-container" style="width:600px;height:800px;"></canvas>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style scoped>
</style>