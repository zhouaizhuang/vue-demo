<template>
  <div class="abs trbl0 ovya">
    <div @mousewheel="mousewheel" class="f ac rel" style="height:620px;">
      <div class="abs l0 r0 t0 f ac xc fs36 b" style="height: 80px;">发展历程</div>
      <div class="abs b0 l0 r0" style="top:80px;">
        <div @click="translateX == 0 ? '' : sub()" :class="['rds50 f ac xc poi trans3 abs t50 ty-50 l0 zx10', translateX == 0 ? 'disabled' : '']" style="width:40px;height:40px;background:#0081cc;">
          <svg t="1692342935878" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3233" id="mx_n_1692342935879" width="24" height="24"><path d="M210.4 511.1 641.3 80.2c22.8-22.8 59.8-22.8 82.6 0 22.8 22.8 22.8 59.8 0 82.6L375.7 511.1l348.3 348.3c22.8 22.8 22.8 59.8 0 82.6-22.8 22.8-59.8 22.8-82.6 0L210.4 511.1 210.4 511.1zM210.4 511.1" p-id="3234" fill="#ffffff"></path></svg>
        </div>
        <div ref="outBox" class="f1 h100 ovh rel zx1">
          <div :class="['h100 f', developList.length ? 'trans3' : '']" :style="{width:`${220 * developList.length + 80}px`,transform:`translateX(${translateX}px)`}">
            <template v-for="item in chunkDevelopList">
              <div v-if="item[0]" class="h100 f rel" style="width:220px;">
                <div class="bgf abs l0 rds5 g3 trans3 hoverContent" style="top:5px;width:265px;height:180px;box-shadow:0 0 5px #ddd;">
                  <div class="pt10 tc fs16 pl10 pr10">{{item[0].content}}</div>
                  <div class="abs zx10 b0 l0 r0 pt10 pb10 f ac xc b fs18 g3" style="background:rgba(236,236,236,1);border-radius:0 0 5px 5px;color:#333;">{{item[0].time}}</div>
                  <div class="abs zx10 bgf l50 tx-50" style="bottom:-130px;width:1px;height:140px;background:rgb(119,52,217);">
                    <div class="abs b0 l50 tx-50 rds50" style="width:10px;height:10px;background:rgb(119,52,217);"></div>
                    <div class="abs l50 rds50 wave-scale" style="left:-9px;bottom:-4px;width:18px;height:18px;background:rgb(119,52,217, .4);"></div>
                  </div>
                </div>
              </div>
              <div v-if="item[1]" class="h100 f rel" style="width:220px;">
                <div class="bgf abs l0 rds5 g9 trans3 hoverContent" style="bottom:5px;width:265px;height:180px;box-shadow:0 0 5px #ddd;">
                  <div class="abs zx10 t0 l0 r0 pt10 pb10 f ac xc b fs18 g3" style="background:rgba(236,236,236,1);border-radius:5px 5px 0 0;color:#333;">{{item[1].time}}</div>
                  <div class="pt10 tc fs16 abs l0 r0 b0 pl10 pr10" style="top:35px;">{{item[1].content}}</div>
                  <div class="abs l50 tx-50" style="top:-130px;width:1px;height:140px;background:rgb(119,52,217);">
                    <div class="abs t0 l50 tx-50 rds50" style="width:10px;height:10px;background:rgb(119,52,217);"></div>
                    <div class="abs rds50 wave-scale" style="left:-9px;top:-4px;width:18px;height:18px;background:rgb(119,52,217, .4);"></div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
        <div @click="translateX == -1 * maxTranslateX ? '': add()" :class="['rds50 f ac xc poi trans3 r0 abs t50 ty-50 zx10', translateX == -1 * maxTranslateX ? 'disabled' : '']" style="width:40px;height:40px;background:#0081cc;">
          <svg t="1692342935878" class="tr180" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3233" id="mx_n_1692342935879" width="24" height="24"><path d="M210.4 511.1 641.3 80.2c22.8-22.8 59.8-22.8 82.6 0 22.8 22.8 22.8 59.8 0 82.6L375.7 511.1l348.3 348.3c22.8 22.8 22.8 59.8 0 82.6-22.8 22.8-59.8 22.8-82.6 0L210.4 511.1 210.4 511.1zM210.4 511.1" p-id="3234" fill="#ffffff"></path></svg>
        </div>
      </div>
    </div>
    <div style="height:1000px;" class="tc pt50 gred">解决了滚动穿透问题</div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped></style>