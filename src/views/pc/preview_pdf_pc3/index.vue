<template>
  <!-- 不带分页，触底加载。切片渲染< -->
  <div class="bgf5 mh100vh">
    <div class="auto" style="width:70%;"  ref="outerCanvasBox">
      <canvas
        v-for="(item, index) in new Array(eyeReportPdf.totalPage).fill(1)" :key="index"
        :ref="`eyeReport${index + 1}`"
        :class="[index < eyeReportPdf.page ? '' : 'clipHidden']"
        style="display:block;border:1px solid #ccc;"
      >
      </canvas>
      <!--监听触底从而控制渲染-->
      <div v-show="eyeReportPdf.isShowLoadMore" id="" class="loadMore f ac xc tc">
        <svg class="rotateSvg">
          <circle cx="20" cy="20" r="10" fill="none" class="circleDash"></circle>
        </svg>
        <div class="fs16 g3">加载中...</div>
      </div>
      <div v-show="!eyeReportPdf.isShowLoadMore" class="fs14 g9 tc pt0 pb10">沒有更多了</div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src="./index.css" scoped>
</style>