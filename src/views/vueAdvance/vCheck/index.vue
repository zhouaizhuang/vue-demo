<template>
  <div class="mh100vh tc">
    <div class="mb30">
      <div class="b mb10">v-gt0(大于0的整数)</div>
      <Input class="auto" style="width:80%;" type="text" v-model="numGtInt0" v-gtInt0 />
    </div>
    <div class="mb30">
      <div class="b tc mb10">v-gt0(大于等于0的整数)</div>
      <Input class="auto" style="width:80%;" type="text" v-model="numGtEqInt0" v-gtEqInt0 />
    </div>
    <div class="mb30">
      <div class="b tc mb10">v-gtFloat0(大于0的小数)</div>
      <Input class="auto" style="width:80%;" type="text" v-model="numGtFloat0" v-gtFloat0 />
    </div>
    <div class="mb30">
      <div class="b tc mb10">v-limit="5"(限制多少位)</div>
      <Input class="auto" style="width:80%;" type="text" v-model="limitNum" v-limit="5" />
    </div>
    <div class="mb30">
      <div class="b tc mb10">v-decimalLimit="2"(保留两位小数)</div>
      <Input class="auto" style="width:80%;" type="text" v-model="decimalNum" v-gtFloat0 v-decimalLimit="2" />
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style scoped>
</style>