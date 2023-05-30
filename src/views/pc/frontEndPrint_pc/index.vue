<template>
  <div>
    <div class="f ac xe">
      <Button @click="printTemplate" type="primary">打印</Button>
    </div>
    <HaiNan ref="hainan" :isDebug="true" :renderData="renderData"></HaiNan>
  </div>
</template>
<script src='./index.js'></script>
<style>
@media print {
  @page {
    margin: 0;
  }
}
@media print {
  .no-footer { /**包含这个样式的话，就没有页眉页脚 */
    page-break-after: avoid;
    page-break-inside: avoid;
  }
}
</style>