<template>
  <div class="mh100vh tc pt30 b tr">
    <div class="f mb30 rw pb30">
      <div class="tc mb20" style="width:400px;">
        <div>v-int(整数)</div>
        <Input class="auto" style="width:80%;" type="text" v-model="numInt" v-int />
      </div>
      <div class="tc mb20" style="width:400px;">
        <div>v-float(小数)</div>
        <Input class="auto" style="width:80%;" type="text" v-model="numFloat" v-float />
      </div>
      <div class="tc mb20"  style="width:400px;">
        <div>v-code(编码：大小写字母、数字、中英文符号)</div>
        <Input class="auto" style="width:80%;" type="text" v-model="codeStr" v-code />
      </div>
      <div class="tc mb20"  style="width:400px;">
        <div>v-limit="5"(限制最多输入5位)</div>
        <Input class="auto" style="width:80%;" type="text" v-model="limitNum" v-limit="5" />
      </div>
      <div class="tc mb20" style="width:400px;">
        <div>v-decimalLimit="2"(保留两位小数)</div>
        <Input class="auto" style="width:80%;" type="text" v-model="decimalNum" v-float v-decimalLimit="2" />
      </div>
      <div class="tc mb20" style="width:400px;">
        <div>v-min="2"(最小值为2)</div>
        <Input class="auto" style="width:80%;" type="text" v-model="minNum" v-min="2" />
      </div>
      <div class="tc mb20" style="width:400px;">
        <div>v-max="10"(最大值为10)</div>
        <Input class="auto" style="width:80%;" type="text" v-model="maxNum" v-max="10" />
      </div>
      <div class="tc mb20" style="width:400px;">
        <div>v-name(姓名：中文+字母)</div>
        <Input class="auto" style="width:80%;" type="text" v-model="name" v-name />
      </div>
      <div class="tc mb20" style="width:400px;">
        <div>v-code(编码：字母、数字、中英符号)</div>
        <Input class="auto" style="width:80%;" type="text" v-model="code" v-name />
      </div>
      <div class="tc pb20" style="width:400px;">
        <div>v-trim="0"(去除收尾空格)</div>
        <Input class="auto" style="width:80%;" type="text" v-model="blank" v-trim="0" />
      </div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style scoped>
</style>