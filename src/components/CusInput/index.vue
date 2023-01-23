<template>
  <div class="f ac pt10 fs16 bdbe">
    <div :class="['g2 mr5 fs14 lt5r', formInfo.required == 1 ? 'need' : '']">{{formInfo.name}}</div>
    <div class="f1 rel fs14 rds10" style="height: 36px;">
      <input type="text" @input="changeField" :value="formInfo.defaultValue" :id="formInfo.field" :disabled="type == 'detail'" :class="['h90 bd0 abs borderBox w98 pl5 db b fs14 t3 l3', formInfo.state ? 'g5e667a' : 'gred']" />
      <label v-if="!formInfo.value " class="g5C6579 abs t50 ty-50 fs14 ga0aac0 l12" :for="formInfo.field">请输入{{formInfo.name}}</label>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src="./index.css" scoped>
</style>