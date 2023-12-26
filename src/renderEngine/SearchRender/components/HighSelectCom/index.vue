<template>
  <div class="f ac mb10 mr10">
    <div class="g3 fs14 nowrap">患者标签：</div>
    <HighSelect :options="item.options" @setOptions="setOptions" :placeholder="item.placeholder"></HighSelect>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped></style>