<template>
  <div class="f ac mb10 mr10">
    <div v-if="item.label" class="g3 fs14 nowrap">{{item.label}}：</div>
    <DatePicker transfer :editable="false" type="daterange" :placeholder="item.placeholder" class="w200px" style="" :value="item.value" @on-change="changeVal"></DatePicker>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped></style>