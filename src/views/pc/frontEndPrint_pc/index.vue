<template>
  <div>
    <div class="f ac xc">
      <Button @click="print('hainan')" type="primary">打印</Button>
    </div>
    <HaiNan ref="hainan" :isShow="true" :renderData="renderData"></HaiNan>
  </div>
</template>
<script src='./index.js'></script>
<style scoped>
</style>