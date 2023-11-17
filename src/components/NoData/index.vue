<template>
  <div v-if="list.length==0" class="f ac xc">
    <div v-if="!isLoad" class="f ac xc tc mt100">
      <svg class="rotateSvg">
        <circle cx="40" cy="40" r="20" fill="none" class="circleDash"></circle>
      </svg>
      <div class="fs18 g3">加载中...</div>
    </div>
    <div v-if="isLoad" class="f cw ac" style="margin-top:12vh">
      <img src="@/assets/noneBJ.jpg" alt="" :style="{width: size == 'small' ? '200px' : size == 'middle' ? '200px' : ''}">
      <div :class="['tc', size == 'small' ?'fs14 mt10' : 'fs16 mt10']" style="color: #9C9C9C;">暂无数据</div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src="./index.css" scoped>
</style>