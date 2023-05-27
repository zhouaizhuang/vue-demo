<template>
  <div>
    <div class="f ac xe">
      <Button @click="printTemplate" type="primary">打印</Button>
    </div>
    <HaiNan ref="hainan" :renderData="renderData" :isDebug="true"></HaiNan>
  </div>
</template>
<script src='./index.js'></script>
<style scoped>
</style>