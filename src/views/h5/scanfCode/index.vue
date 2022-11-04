<template>
  <div class="mh100vh bgf5 tc">
    <div class="pt10 pr10 pb10 pl10">
      <div class="rds5 bgf rds5 pt15 pl10 pr10 pb15 mb10">
        <div @click="scanfServiceCode">
          <div class="rel ovh">
            <img src="../../../assets/serviceCode.png" style="width:320px;height:180px;" />
            <div class="fs14 b abs b30r l12 zx10 ">服务码：{{serviceCode}}</div>
          </div>
          <div class="rds5 gf mt10 mb15 pt7 pb8 w80 auto" style="background-color:#0075E2;">扫描服务码</div>
        </div>
      </div>
      <img src="../../../assets/bind_icon.png" class="mt10 mb10" style="width:1rem;height:0.7rem;" />
      <div class="bgf rds5 pt15 pl10 pr10 pb15 mb20" @click="scafDeviceCode">
        <div class="rel ovh">
          <img src="../../../assets/deviceCode.png" style="width:320px;height:180px;" />
          <div class="fs14 b abs b30r l12 zx10 ">设备编码：{{deviceCode}}</div>
        </div>
        <div class="rds5 gf mt10 mb15 pt7 pb8 w80 auto" style="background-color:#0075E2;">扫描设备码</div>
      </div>
      <div class="gf fs20 lt5 pt10 pb10 rds5" style="background-color:#FE842B;">绑定</div>
    </div>
    <!--识别窗口-->
    <div v-show="isShowVideo" class="fixed trbl0 zx100" style="background: #363636;">
      <div @click="closeVideo" class="abs zx10 rds50" style="width:40px;height:40px;border:2px solid #fff;top:200px;right:10px;transform:rotate(45deg)">
        <div class="w80 bgf abs l50 t50 txy-50" style="height:2px;"></div>
        <div class="h80 bgf abs l50 t50 txy-50" style="width:2px;"></div>
      </div>
      <div class="abs" style="width:20px;height:20px;border-top:2px solid #fff;border-left:2px solid #fff;top:38%;left:10%;"></div>
      <div class="abs" style="width:20px;height:20px;border-top:2px solid #fff;border-right:2px solid #fff;top:38%;right:10%;"></div>
      <div class="abs" style="width:20px;height:20px;border-bottom:2px solid #fff;border-right:2px solid #fff;bottom:38%;right:10%;"></div>
      <div class="abs" style="width:20px;height:20px;border-bottom:2px solid #fff;border-left:2px solid #fff;bottom:38%;left:10%;"></div>
      <!--转换摄像头-->
      <div @click="changeCamera" class="abs l50 tx-50 zx10" style="bottom:200px;">
        <svg t="1667530784423" class="icon" viewBox="0 0 1302 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2550" width="60" height="60"><path d="M336.473043 508.638609c-13.423304-13.423304-34.949565-13.423304-48.083478 0l-74.050782 74.150956C191.710609 442.323478 237.534609 299.074783 338.142609 198.366609c83.556174-83.656348 194.782609-129.825391 312.987826-129.825392 118.205217 0 229.431652 46.169043 313.266087 129.825392 13.412174 13.423304 34.938435 13.423304 48.072348 0 13.133913-13.434435 13.412174-34.971826 0-48.128C916.057043 53.715478 787.500522 0.278261 651.130435 0.278261c-136.370087 0-264.926609 53.158957-361.338435 149.960348-116.535652 116.669217-169.349565 283.14713-142.514087 445.696l-87.195826-87.296c-13.412174-13.423304-34.927304-13.423304-48.061217 0-13.423304 13.434435-13.423304 34.971826 0 48.128l138.050782 138.206608c6.700522 6.722783 15.36 10.073043 24.030609 10.073044 8.659478 0 17.318957-3.350261 24.041739-10.073044l138.039652-138.206608c13.690435-13.156174 13.690435-34.693565 0.278261-48.128zM1290.24 508.638609l-138.050783-138.206609c-13.412174-13.434435-34.927304-13.434435-48.061217 0L966.077217 508.638609c-13.412174 13.434435-13.412174 34.971826 0 48.128 13.412174 13.423304 34.927304 13.423304 48.061218 0l77.968695-78.057739c9.794783 129.257739-35.205565 254.319304-127.710608 346.64626-83.556174 83.656348-194.782609 129.814261-313.266087 129.814261S421.698783 909.022609 337.864348 825.35513c-13.412174-13.434435-34.938435-13.434435-48.072348 0-13.412174 13.434435-13.412174 34.971826 0 48.128C386.203826 970.006261 514.760348 1023.443478 651.130435 1023.443478c136.370087 0 264.926609-53.158957 361.338435-149.960348 106.473739-106.607304 158.45287-250.412522 147.545043-398.970434l82.16487 82.253913c6.711652 6.711652 15.36 10.073043 24.041739 10.073043 8.648348 0 17.318957-3.361391 24.019478-10.073043 13.423304-13.156174 13.423304-34.693565 0-48.128z" fill="#ffffff" p-id="2551"></path></svg>
      </div>
      <video ref="vidioRef" id="vidioRef" autoplay style="width:100vw;height:100vh;"></video>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style scoped>
</style>