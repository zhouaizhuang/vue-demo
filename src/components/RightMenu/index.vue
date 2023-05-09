<template>
  <div v-if="rightObj.isShow" class="abs bgf rds3 menu_style zx100" :style="{top: rightObj.y +'px',left: rightObj.x + 'px'}">
    <slot :rightObj="rightObj"></slot>
  </div>
</template>
<script src='./index.js'></script>
<style>
.menu_style{
  width: 140px;
  box-shadow: 2px 2px 14px #d0d0d0;
}
.menu_style div:hover{background: #E0EEFF;}
</style>