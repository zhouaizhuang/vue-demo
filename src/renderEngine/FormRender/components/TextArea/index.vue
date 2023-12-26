<template>
  <div>
    <div :class="['nowrap mb2 borderBox', item.require ? 'need' : '', item.labelClass]" :style="item.labelStyle">{{item.label}}</div>
    <div :class="['f1 rel rds5 borderBox', item.errmsg ? 'error' : 'textAreaBd']">
      <Input
        :value="item.value"
        type="textarea"
        @on-change="handleInput"
        :rows="3"
        :placeholder="item.placeholder"
        :disabled="item.disabled"
        :maxlength="item.maxLength"
        show-word-limit
      /> 
      <div class="abs l0 gred" style="bottom:-20px;">{{item.errmsg}}</div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped></style>