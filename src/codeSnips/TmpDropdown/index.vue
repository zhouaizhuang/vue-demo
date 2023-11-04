<template>
  <div>
    <!--下拉菜单-->
    <div
      :class="['rel hoverItem rds4 f ac fs14 lt2 poi trans3 gf none mr20']"
      style="height:32px;width:120px;border:1px solid #57a3f3;background:#1aada7;"
    >
      <div @click.stop="isSpread=!isSpread" class="f1 f ac xc">
        <div>下拉菜单</div>
        <svg t="1688200718474" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5782" width="18" height="18"><path d="M183.168 332.501333a42.666667 42.666667 0 0 1 57.621333-2.496l2.709334 2.496L512 600.96l268.501333-268.48a42.666667 42.666667 0 0 1 57.621334-2.496l2.709333 2.496a42.666667 42.666667 0 0 1 2.496 57.621333l-2.496 2.709334-298.666667 298.666666a42.666667 42.666667 0 0 1-57.621333 2.496l-2.709333-2.496-298.666667-298.666666a42.666667 42.666667 0 0 1 0-60.330667z" fill="#ffffff" p-id="5783"></path></svg>
      </div>
      <!--  -->
      <div :class="['abs bgf g0 borderBox ovya', isSpread ? 'zx100' : 'zx-1']" :style="{color:'#666',top:'32px',width:'120px',boxShadow:'0 0 2px 2px rgb(0,0,0,.2)',borderRadius:'0 0 2px 2px',}">
        <div class="n hover1890ff pt5 pb5 pl10 pr10" @click="isSpread=false" >全部科室</div>
        <div class="n hover1890ff pt5 pb5 pl10 pr10">科室1</div>
        <div class="n hover1890ff pt5 pb5 pl10 pr10">科室2</div>
        <div class="n hover1890ff pt5 pb5 pl10 pr10">科室3</div>
        <div class="n hover1890ff pt5 pb5 pl10 pr10">科室4</div>
        <div class="n hover1890ff pt5 pb5 pl10 pr10">科室5</div>
      </div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped>
</style>