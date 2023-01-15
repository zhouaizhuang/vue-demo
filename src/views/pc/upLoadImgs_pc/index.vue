<template>
  <div class="mh100vh bgf5">
    <div class="f ac xc pt100">
      <UploadImgs :max_size="2*1024*1024" :width="800" :height="800" :limit="5" :imgArr="imgArr" @change="e => imgArr = e"></UploadImgs>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style scoped>
</style>