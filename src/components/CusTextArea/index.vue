<template>
  <div class="pt12 pb12 fs16 text-area-box">
    <div :class="['mb10', formInfo.required == 1 ? 'need' : '']">{{formInfo.name}}</div>
    <textarea class="rds20 bde5 w93 db fs13" style="min-height:225px;padding:10px;" :value="formInfo.defaultValue" :placeholder="'请输入' + formInfo.name" placeholder-style=""
      placeholder-class="textarea-placeholder" :disabled="type == 'detail'" maxlength="300" :auto-focus="false" :focus="false"
      @input="changeField"
    >
    </textarea>
  </div>
</template>
<script src="./index.js"></script>
<style src="./index.css" scoped></style>
