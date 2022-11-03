<template>
  <div class="mh100vh bgf5 tc">
    <div class="pt10 pr10 pb10 pl10">
      <div class="rds5 bgf rds5 pt15 pl10 pr10 pb15 mb10">
        <div @click="scanfServiceCode">
          <div id="serviceCode" class="rel ovh">
            <!-- <div v-show="isShowServiceCode" class="b fs16">{{tipMsg}}</div> -->
            <video v-show="isShowServiceCode" ref="serviceVideo" id="serviceVideo" autoplay width="375" height="240" style="transform: scale(1.5, .8);"></video>
            <img v-show="!isShowServiceCode" src="../../../assets/serviceCode.png" style="width:300px;" />
            <div v-show="!isShowServiceCode" class="fs14 b abs b30r l12 zx10 ">服务码：{{serviceCode}}</div>
          </div>
          <div :class="['rds5 gf mt10 mb15 pt7 pb8 w80 auto', serviceCode ? '' : 'breath-btn']" style="background-color:#0075E2;">{{serviceCode ? '重新识别' : isShowServiceCode ? '识别中...' : '扫描服务码'}}</div>
        </div>
      </div>
      <img src="../../../assets/bind_icon.png" class="mt10 mb10" style="width:1rem;height:0.7rem;" />
      <div class="bgf rds5 pt15 pl10 pr10 pb15 mb20" @click="scafDeviceCode">
        <div id="deviceCode" class="rel ovh">
          <!-- <div v-show="isShowDeviceCode" class="">{{tipMsg}}</div> -->
          <video v-show="isShowDeviceCode" ref="devicevideo" id="devicevideo" autoplay width="375" height="240" style="transform: scale(1.5, .8);"></video>
          <img v-show="!isShowDeviceCode" src="../../../assets/deviceCode.png" style="width:300px;" />
          <div v-show="!isShowDeviceCode" class="fs14 b abs b30r l12 zx10 ">设备编码：{{deviceCode}}</div>
        </div>
        <div :class="['rds5 gf mt10 mb15 pt7 pb8 w80 auto', serviceCode && !deviceCode ? 'breath-btn' : '']" style="background-color:#0075E2;">{{deviceCode ? '重新识别' : isShowDeviceCode ? '识别中...' : '扫描设备码'}}</div>
      </div>
      <div :class="['gf fs20 lt5 pt10 pb10 rds5', serviceCode && deviceCode ? 'breath-btn' : '']" style="background-color:#FE842B;">绑定</div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style scoped>
</style>
<script src="./index.js"></script>
<style scoped>
/***1、呼吸按钮 */
.breath-btn{
  animation: breathing .6s ease-in-out 0s infinite alternate;
}
@keyframes breathing {
  0%{
    transform: scale(0.93);
  }
  100%{
    transform: scale(1);
  }
}
</style>