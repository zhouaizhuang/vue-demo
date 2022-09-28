<!--参考：https://juejin.cn/post/7146598432285655054-->
<template>
  <div class="mh100vh">
    <div class="">
      <canvas ref="cvs" width="800" height="400" style="background:#000;"></canvas>
    </div>
    <div class="f mt10 pl100 ml100">
      <Button type="error" @click="clear" class="mr20" style="height:31px;">清空</Button>
      <Button type="info" @click="back" class="mr20" style="height:31px;">回退</Button>
      <Button type="success" @click="save" class="mr20" style="height:31px;">保存</Button>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style scoped>
</style>