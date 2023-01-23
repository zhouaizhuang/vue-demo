<template>
  <div class="f ac pt12 pb12 fs16">
    <div :class="['g2 mr5', formInfo.required == 1 ? 'need' : '']">{{formInfo.name}}</div>
    <div class="f1 tr fs15">
      <input class="f1 tr fs15" type="text" :value="formInfo.defaultValue" disabled placeholder="请选择" placeholder-class="g9 tr fs15" />
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style src="./index.css" scoped></style>
