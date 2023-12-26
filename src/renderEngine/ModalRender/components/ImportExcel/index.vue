<template>
  <div class="pl20 pr20 pt20 pb20 w800px" :style="modalObj.importModalStyle">
    <div v-if="modalType==1" classs="tc rel" style="height:200px;">
      <label @dragover="dropOver" @drop="drop" for="upload" ref="label" class="rds5 pt60 pb50 tc poi db" style="border:1px dashed #1aada7;background:rgb(26, 173, 167,.1);">
        <div class="tc g6 fs16">将文件拖到此处，<span class="g1aada7 poi" style="border-bottom:1px solid #1aada7;">或点击上传</span></div>
        <input type="file" id="upload" ref="upload" accept=".xls,.xlsx" class="op0" @change="changeFile">
      </label>
      <div class="mt5 fs12">
        只能上传excel文件，且不超过10MB，
        <span
          @click="downLoadTemplate"
          class="g1890ff poi"
          style="border-bottom:1px solid #1890ff;"
        >
          下载导入模板
        </span>
      </div>
    </div>
    <div v-show="modalType == 2" class="pt50" style="height:200px;">
      <div class="f ac xc tc">
        <svg class="rotateSvg">
          <circle cx="30" cy="30" r="15" fill="none" class="circleDash"></circle>
        </svg>
      </div>
      <div class="fs16 g3 tc">
        <div class="g1aada7">正在导入患者信息，请耐心等待...</div>
      </div>
    </div>
    <div v-if="modalType == 3" style="height:200px">
      <div class="f ac pt20">
        <div class="mr5">导入结果：</div>
        <div class="f1 f ac">
          <div class="mr5">成功</div>
          <div class="f ac xc rds5 gf mr5" style="width:25px;height:25px;background:rgb(25,190,107);">{{importResult.successNum}}</div>
          <div class="mr30">个</div>
          <div class="mr5">失败</div>
          <div class="f ac xc rds5 gf mr5" style="width:25px;height:25px;background:rgb(237,63,20);">{{importResult.failNum}}</div>
          <div class="mr30">个</div>
          <div class="mr5">总共</div>
          <div class="f ac xc rds5 gf mr5" style="width:25px;height:25px;background:rgb(45,140,240);">{{importResult.totalNum}}</div>
          <div>个</div>
        </div>
      </div>
      <div class="f ac mt20 pb20" v-if="importResult.failNum > 0">
        <div class="mr15">下载文件:</div>
        <div class="f1">
          <span style="border-bottom:1px solid #1890ff;" @click="downloadExcel" class="g1890ff poi">{{modalObj.failFileName}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped></style>