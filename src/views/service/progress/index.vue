<template>
  <div class="pt50 bgf" style="height:100vh;overflow-y:auto;">
    <Progress :percent="percent" :stroke-width="25" text-inside />
    <!--进度条-->
    <div class="f ac xc">
      <Button class="mt30" type="primary" @click="end">结束</Button>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style scoped>
</style>