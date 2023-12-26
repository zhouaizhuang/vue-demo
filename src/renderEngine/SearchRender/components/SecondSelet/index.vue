<template>
  <div class="f ac mb10 mr10">
    <div v-if="item.label" class="g3 fs14 nowrap">{{item.label}}：</div>
    <div class="tl f">
      <Select :value="item.value.value1" class="options1" style="" @on-change="changeVal1" >
        <Option v-for="opt in item.options1" :key="opt._id" :value="opt.value">{{opt.name}}</Option>
      </Select>
       <Select v-if="item.value.value1" :value="item.value.value2" class="options2" style="" @on-change="changeVal2" >
        <Option v-for="opt in item.options2" :key="opt._id" :value="opt.value">{{opt.name}}</Option>
      </Select>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped></style>