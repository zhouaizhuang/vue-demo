<template>
  <div class="mh100vh bgf5 tc">
    <div class="pt10 pr10 pb10 pl10">
      <div class="rds5 bgf rds5 pt15 pl10 pr10 pb15 mb10" style="min-height:300px;">
        <div>
          <div id="serviceCode" v-show="isShowBarCode" style="height:200px;"></div>
          <div v-if="!isShowBarCode" class="rel ovh">
            <img src="../../../assets/serviceCode.png" style="width:320px;height:180px;" />
            <div class="fs14 b abs b30r l12 zx10 ">服务码：{{serviceCode}}</div>
          </div>
          <div @click="scanfServiceCode" class="rds5 gf mt10 mb15 pt7 pb8 w80 auto" style="background-color:#0075E2;">扫描code128条形码</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style scoped>
</style>