<template>
  <div>
    <div :class="['nowrap mb2 borderBox', item.require ? 'need' : '', item.labelClass]" :style="item.labelStyle">{{item.label}}</div>
    <div :class="['f1 f ac xs rel rds5 borderBox', item.errmsg ? 'error' : 'textAreaBd']">
      <Select class="f1" :value="item.value" :disabled="item.disabled" @on-change="changeSelect" transfer :placeholder="item.placeholder">
        <Option v-for="opt in item.options" :value="opt.value" :key="opt.value">{{ opt.name }}</Option>
      </Select>
      <div class="abs l0 gred" v-if="item.errmsg" style="bottom:-20px;">{{item.errmsg}}</div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped></style>