<template>
  <div>
    <div class="f fs14 tc rel bdbe">
      <div v-for="(item, index) in titleArr" :key="item" @click="$emit('setTabIndex', index)" class="mr16 poi pt10 pb10" :style="{color: tabIndex == index ? '#2d8cf0' : '', width: '88px'}">{{item}}</div>
      <div class="abs b0 trans3" :style="{backgroundColor:'#2d8cf0',width:'86px',height:'2px',transform: `translateX(${104 * tabIndex}px)`}"></div>
    </div>
     <!-- v-if="titleArr.length > 0"  -->
    <div class="ovh rel fs14" style="height:450px;"> <!--高度必须限制（可以是固定值或者给定上下限-----width:clamp(200px, 50vh, 600px)）-->
      <div v-for="(item, index) in titleArr" :key="item" :class="['trans3 abs trbl0 bgf pt10 pr10 pl0', tabIndex == index ? 'tx0' : tabIndex < index ? 'tx100' : 'tx-100']">
        <slot :name="`tab${index}`"></slot>
      </div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src="./index.css" scoped></style>