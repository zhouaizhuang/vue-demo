<template>
  <div>
    <div v-if="!isEnd" v-reachBottom="reachBottom" class="rel f xc ac mt10 mb10">
      <div class="loading"></div>
      <div class="ml10">加载中...</div>
    </div>
    <div v-else class="tc pt20 pb10 g9 fs12">没有更多了</div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped></style>