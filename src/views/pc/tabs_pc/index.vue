<template>
  <div style="background:#222" class="mh100vh ovh">
    <div class="auto mt60" style="background:#fff;width:60%;">
      <!--Tabs组件起始位置-->
      <!-- <div class="f fs14 tc rel bdbe">
        <div @click="tabIndex=0" class="mr16 poi pt10 pb10" :style="{color: tabIndex == 0 ? '#2d8cf0' : '', width: '88px'}">标签1</div>
        <div @click="tabIndex=1" class="mr16 poi pt10 pb10" :style="{color: tabIndex == 1 ? '#2d8cf0' : '', width: '88px'}">标签2</div>
        <div @click="tabIndex=2" class="mr16 poi pt10 pb10" :style="{color: tabIndex == 2 ? '#2d8cf0' : '', width: '88px'}">标签3</div>
        <div class="abs b0 trans3" :style="{backgroundColor:'#2d8cf0',width:'86px',height:'2px',transform: `translateX(${104 * tabIndex}px)`}"></div>
      </div>
      // 高度必须限制（可以是固定值或者给定上下限-----width:clamp(200px, 50vh, 600px)）
      <div class="ovh rel fs14" style="height:450px;">
        <div :class="['trans3 abs trbl0 bgf pt10 pr10 pl0', tabIndex == 0 ? 'tx0' : tabIndex < 0 ? 'tx100' : 'tx-100']">
          我是标签1的内容
        </div>
        <div :class="['trans3 abs trbl0 bgf pt10 pr10 pl0', tabIndex == 1 ? 'tx0' : tabIndex < 1 ? 'tx100' : 'tx-100']">
          我是标签2的内容
        </div>
        <div :class="['trans3 abs trbl0 bgf pt10 pr10 pl0', tabIndex == 2 ? 'tx0' : tabIndex < 2 ? 'tx100' : 'tx-100']">
          我是标签3的内容
        </div>
      </div> -->
      <!--Tabs组件结束位置-->
      <Tabs :titleArr="['标签1','标签2','标签3', '标签4']" :tabIndex="tabIndex" @setTabIndex="e=>tabIndex=e">
        <template #tab0>我是标签1的内容</template> <!--传值的时候可以使用es6的解构, #tab0="{tab0}"-->
        <template #tab1>我是标签2的内容</template>
        <template #tab2>我是标签3的内容</template>
        <template #tab3>我是标签4的内容</template>
      </Tabs>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style scoped>
</style>