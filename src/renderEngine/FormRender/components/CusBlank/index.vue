<template>
  <div>
    <div :class="['nowrap mb2 borderBox', item.require ? 'need' : '', item.labelClass]" :style="item.labelStyle">{{item.label}}</div>
    <div :class="['f1 rel rds5 borderBox', item.errmsg ? 'error' : 'textAreaBd', item.valueClass]">
      {{item.value}}
      <div class="abs l0 gred" style="bottom:-20px;">{{item.errmsg}}</div>
    </div>
  </div>
</template>
<script src='./index.js'></script>

<style src='./index.css' scoped></style>