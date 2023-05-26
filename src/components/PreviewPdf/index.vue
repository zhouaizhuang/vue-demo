<template>
  <div>
    <div class="pl30 pr30" ref="outerCanvasBox">
      <canvas v-for="(item, index) in new Array(reportPdf.totalPage).fill(1)" :key="index"
        :id="`eyeReport${index + 1}`" :ref="`eyeReport${index + 1}`"
        :class="['pdf-container', index < reportPdf.page ? '' : 'clipHidden']"
        style="display:block;border:1px solid #ccc;margin:0 0px 0px 0;">
      </canvas>
    </div>
    <div v-show="reportPdf.isShowLoadMore" id="" class="loadMore f ac xc tc">
      <svg class="rotateSvg">
        <circle cx="20" cy="20" r="10" fill="none" class="circleDash"></circle>
      </svg>
      <div class="fs16 g3">加载中...</div>
    </div>
    <div v-show="!reportPdf.isShowLoadMore" class="fs14 g9 tc pt0 pb10">沒有更多了</div>
  </div>
</template>
<script src='./index.js'></script>
<style src="./index.css" scoped>
</style>