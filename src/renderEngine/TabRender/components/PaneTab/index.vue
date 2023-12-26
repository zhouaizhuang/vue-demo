<template>
  <div class="f fs14 tc rel bdbe">
    <div @click="changeTab(item)" v-for="(item) in tabObj.list" :key="item.id" :class="['mr15 poi  pb10', item.isChecked ? 'b' : '']" :style="{ color: item.isChecked ? '#1AADA7' : '', width: maxWidth + 'px' }">{{item.name}}</div>
    <div class="abs b0 trans3" :style="{ backgroundColor: '#1AADA7', width: maxWidth + 'px', height: '2px', transform: `translateX(${(maxWidth + 15 ) * tabIndex}px)` }"></div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped></style>