<!--https://juejin.cn/post/7143088940953075743-->
<!--注意：与当前vue版本兼容的pdfjs-dist插件版本是：2.0.943-->
<!--在package.json中直接编写版本号，之后cnpm i安装-->
<!--分页和不分页两种方式:https://www.jianshu.com/p/a616374c7a60/-->
<template>
    <PreviewPdf pdfUrl="http://218.93.39.18:48079/admin-api/infra/file/4/get/19c5f539aefef6d3a23416186b68edad6f649a56c0e84155f3e2a904e9ecefbd.pdf"></PreviewPdf>
</template>
<script src='./index.js'></script>
<style src="./index.css" scoped>
</style>
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