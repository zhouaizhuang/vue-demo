<template>
  <div v-if="rightObj.isShow" class="menu_style zx100" :style="{top: rightObj.y +'px',left: rightObj.x + 'px'}">
    <slot :rightObj="rightObj"></slot>
  </div>
</template>
<script src='./index.js'></script>
<style>
.menu_style{
  position: absolute;
  width: 140px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 2px 2px 14px #d0d0d0;
}
</style>