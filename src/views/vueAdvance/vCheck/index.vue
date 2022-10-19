<template>
  <div class="mh100vh tc">
    <div class="mb30">
      <div class="b mb10">v-int(整数)</div>
      <Input class="auto" style="width:80%;" type="text" v-model="numInt" v-int />
    </div>
    <div class="mb30">
      <div class="b tc mb10">v-float(小数)</div>
      <Input class="auto" style="width:80%;" type="text" v-model="numFloat" v-float />
    </div>

    <div class="mb30">
      <div class="b tc mb10">v-limit="5"(限制多少位)</div>
      <Input class="auto" style="width:80%;" type="text" v-model="limitNum" v-limit="5" />
    </div>
    <div class="mb30">
      <div class="b tc mb10">v-decimalLimit="2"(保留两位小数)</div>
      <Input class="auto" style="width:80%;" type="text" v-model="decimalNum" v-float v-decimalLimit="2" />
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style scoped>
</style>