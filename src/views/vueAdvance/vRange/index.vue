<template>
  <div class="mh100vh pl30 pt50">
    <Button type="error" @click="num--" class="mr30">减</Button>
    <Button type="primary" @click="num++">加</Button>
    <div class="f mt20 mb20 b">
      <div class="nowrap">数据范围正常：</div>
      <div class="f1">[{{min}}, {{max}})</div>
    </div>
    <div v-range="`[${min},${max})`" class="fs24">{{num}}</div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped></style>