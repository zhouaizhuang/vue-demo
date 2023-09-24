<template>
  <div class="abs trbl0">
    <div class="abs t0 b0 pt20 pl20 pr20 ovya" style="left:100px;width:300px;border:1px solid #ccc;">
      <!--超出一行显示省略号，显示tip-->
      <div class="f mb50">
        <div class="mr10 nowrap">测试1：</div>
        <div class="f1 nowrap1 poi" v-tip="text1">{{text1}}</div><!--此处使用v-tip-->
      </div>
      <!--不超出一行不需要显示省略号和tip-->
      <div class="f">
        <div class="mr10 nowrap">测试2：</div>
        <div class="f1 nowrap1 poi" v-tip="text2">{{text2}}</div><!--此处使用v-tip-->
      </div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped>
</style>