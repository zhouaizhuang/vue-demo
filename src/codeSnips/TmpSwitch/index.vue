<template>
  <div class="abs trbl0 bgf pt30 pl30">
    <div class="f ac mb20">
      <div class="mr5">是否启用：</div>
      <div @click="isStart=!isStart" :class="['rds22 trans3 bgc trans3 f ac mr30 rel poi']" :style="{width:'44px',height:'22px',background: isStart ? '#1aada7' : '#ccc'}">
        <div class="bgf rds50 abs t50 ty-50 trans3" :style="{width:'18px',height:'18px', left: isStart ? '23px' : '3px'}"></div>
      </div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped>
</style>