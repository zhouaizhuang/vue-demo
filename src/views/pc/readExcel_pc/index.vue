<template>
  <div>
    <div class="w30 auto">
      <label @dragover="dropOver" @drop="drop" for="upload" ref="label" class="rds5 pt60 pb60 tc poi db" style="border:1px dashed #1890ff;background:rgb(24, 144, 255,.1);">
        <div class="dib g1890ff fs18 mb10" style="border-bottom:1px solid #1890ff;">点击上传</div>
        <div class="tc g6 fs15">或将Excel文件拖拽至矩形框内</div>
        <input type="file" id="upload" ref="upload" accept=".xls,.xlsx" class="op0" @change="changeFile">
      </label>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style scoped>
</style>