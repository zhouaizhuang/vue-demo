<template>
  <div>
    <div
      :class="['nowrap mb2 mr10 ', item.require ? 'need' : '', item.labelClass]"
      :style="item.labelStyle"
    >
      {{item.label}}
    </div>
    <div :class="['f1 rel', item.errmsg ? 'error' : '']">
      <input
        :value="item.autoCalc ? calcVal : item.value"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        class="fs14 f ac rds4 rel hoverBorder pl5 db bdAndNone w100 ivu-input"
        :style="{color: item.disabled || !!item.autoCalc ? '#ccc' : '#515a6e',height:'32px'}"
        :placeholder="item.placeholder"
        :disabled="item.disabled || !!item.autoCalc"
      />
      <div v-if="item.unit" class="abs r0 t0 b0 f ac xc g3" style="width:62px;background:#F6F6F6;border: 1px solid #B8BBC0;border-radius: 0 5px 5px 0;">{{item.unit}}</div>
      <div class="abs l0 gred" style="bottom:-20px;">{{item.errmsg}}</div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped>
</style>