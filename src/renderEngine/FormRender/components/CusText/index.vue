<template>
  <div :class="[item.labelClass, 'borderBox']" :style="item.labelStyle">
    {{item.label}}
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped></style>