<template>
  <div style="background:#222" class="mh100vh ovh">
    <div class="auto mt60" style="background:#fff;width:60%;">
      <!--Tabs组件起始位置-->
      <div class="f fs14 tc rel bdbe">
        <div @click="tabIndex=0" class="mr16 poi pt10 pb10" :style="{color: tabIndex == 0 ? '#2d8cf0' : '', width: '88px'}">标签1</div>
        <div @click="tabIndex=1" class="mr16 poi pt10 pb10" :style="{color: tabIndex == 1 ? '#2d8cf0' : '', width: '88px'}">标签2</div>
        <div class="abs b0 trans3" :style="{backgroundColor:'#2d8cf0',width:'86px',height:'2px',transform: `translateX(${104 * tabIndex}px)`}"></div>
      </div>
      <div class="ovh rel fs14" style="height:450px;"> <!--高度必须限制（可以是固定值或者给定上下限-----width:clamp(200px, 50vh, 600px)）-->
        <div :class="['trans3 abs trbl0 bgf pt10 pr10 pl0', tabIndex == 0 ? 'tx0' : tabIndex < 0 ? 'tx100' : 'tx-100']">
          我是标签1的内容
        </div>
        <div :class="['trans3 abs trbl0 bgf pt10 pr10 pl0', tabIndex == 1 ? 'tx0' : tabIndex < 1 ? 'tx100' : 'tx-100']">
          我是标签2的内容
        </div>
      </div>
      <!--Tabs组件结束位置-->
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style scoped>
</style>