<template>
  <div class="f ac mb10 mr10">
    <div v-if="item.label" class="g3 fs14 nowrap">{{item.label}}：</div>
    <div class="tl">
      <Select :value="item.value" class="w200px" style="" @on-change="changeVal" >
        <Option v-for="opt in item.options" :key="opt._id" :value="opt.value">{{opt.name}}</Option>
      </Select>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped></style>