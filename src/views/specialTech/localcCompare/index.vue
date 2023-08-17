<template>
  <div class="abs trbl0 bg2 gf mh100vh">
    <div class="f ac pl30 pt30">
      拼音排序之前：
      <div v-for="(item, index) in userList" :key="index" class="mr20 pt3 pb3 pl10 pr10 rds5 gf" style="background:#1adaa7;">{{item}}</div>
    </div>
    <div class="f ac pl30 pt30">
      拼音排序之后：
      <div v-for="(item, index) in userListAfterSort" :key="index" class="mr20 pt3 pb3 pl10 pr10 rds5 gf" style="background:#1adaa7;">{{item}}</div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped>
</style>