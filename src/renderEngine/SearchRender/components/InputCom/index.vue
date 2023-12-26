<template>
  <div class="f ac mb10 mr10">
    <div v-if="item.label" class="g3 fs14 nowrap">{{item.label}}：</div>
    <Input :value="item.value" :placeholder="item.placeholder" class="w200px" style="" @on-change="changeVal" />
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped></style>