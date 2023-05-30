<template>
  <div class="h100vh mh100vh">
    <div class="f ac xc">
      <iframe class="auto" style="width:1400px;height:100vh;min-height: 600px;" src="https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6314565.pdf" frameborder="0"></iframe>
    </div>
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