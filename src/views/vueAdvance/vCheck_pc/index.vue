<template>
  <div class="mh100vh tc pt30 b tr">
    <div class="f mb30">
      <div class="f1 tc">
        <div>v-int(整数)</div>
        <Input class="auto" style="width:80%;" type="text" v-model="numInt" v-int />
      </div>
      <div class="f1 tc">
        <div>v-float(小数)</div>
        <Input class="auto" style="width:80%;" type="text" v-model="numFloat" v-float />
      </div>
      <div class="f1 tc">
        <div>v-code(编码：大小写字母、数字、中英文符号)</div>
        <Input class="auto" style="width:80%;" type="text" v-model="codeStr" v-code />
      </div>
      <div class="f1 tc">
        <div>v-limit="5"(限制多少位)</div>
        <Input class="auto" style="width:80%;" type="text" v-model="limitNum" v-limit="5" />
      </div>
    </div>
    <div class="f">
      <div class="f1 tc">
        <div>v-decimalLimit="2"(保留两位小数)</div>
        <Input class="auto" style="width:80%;" type="text" v-model="decimalNum" v-float v-decimalLimit="2" />
      </div>
      <div class="f1 tc">
        <div>v-min="2"(最小值为2)</div>
        <Input class="auto" style="width:80%;" type="text" v-model="minNum" v-min="2" />
      </div>
      <div class="f1 tc">
        <div>v-max="10"(最大值为10)</div>
        <Input class="auto" style="width:80%;" type="text" v-model="maxNum" v-max="10" />
      </div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style scoped>
</style>