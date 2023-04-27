<template>
  <div class="pt50 bgf" style="height:100vh;overflow-y:auto;">
    <Progress :percent="percent" :stroke-width="25" text-inside />
    <!--进度条-->
    <div class="f ac xc">
      <Button class="mt30 mr30" type="primary" @click="start">开始</Button>
      <Button class="mt30" type="info" @click="end">结束</Button>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style scoped>
</style>