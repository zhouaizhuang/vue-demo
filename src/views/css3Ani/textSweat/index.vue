<template>
  <div class="mh100vh" style="">
    <!--融合案例效果-->
    <div class="f ac xc bg0" style="height:140px;filter:contrast(30);">
      <div class="rds50 abs circle-1 txy-50" style="filter: blur(10px);"></div>
      <div class="rds50 abs circle-2 txy-50" style="filter: blur(10px);"></div>
    </div>
    <!--流汗效果-->
    <div class="rel tc gc fs30 pt100 gf b lt5 bg0" style="height:300px;">
      <div style="transform: skewY(5deg);">
        <div>天气真热啊</div>
        <div class="auto rel" style="filter: blur(0.5px) contrast(10);width:220px;height:50px;background:#000;">
          <div class="abs l0 t0 auto zx10 bgf" style="filter:blur(1px);width:210px;height:4px;" />
          <div class="water1 abs bgf rds50" style="left:5px;filter:blur(2px);" />
          <div class="water2 abs bgf rds50" style="left:5px;filter:blur(2px);" />
        </div>
      </div>
    </div>
    <!--小溪-->
    <div class="f xc auto rel bg0" style="filter:contrast(50);height:500px;padding-top:200px;">
      <!--四个方块，旋转。外层对比度高，四个方块设置blur-->
      <div class="bgf mr2 rotateBox" style="width:60px;height:60px;"></div>
      <div class="bgf mr2 rotateBox" style="width:60px;height:60px;"></div>
      <div class="bgf mr2 rotateBox" style="width:60px;height:60px;"></div>
      <div class="bgf mr2 rotateBox" style="width:60px;height:60px;"></div>
      <div class="bgf mr2 rotateBox" style="width:60px;height:60px;"></div>
      <div class="abs l50 tx-50 bgf rds5" style="height:60px;width:315px;top:210px;"></div>
      <div class="abs bgf rds50 rain" style="left:200px;top:2px;width:30px;height:40px;filter:blur(12px);"></div>
      <div class="abs bgf rds50 rain2" style="left:200px;top:20px;width:30px;height:40px;filter:blur(12px);"></div>
      <div class="abs bgf rds50 rain3" style="left:200px;top:20px;width:30px;height:40px;filter:blur(12px);"></div>
      <div class="abs bgf rds50 rain4" style="left:200px;top:20px;width:30px;height:40px;filter:blur(12px);"></div>
      <div class="abs bgf rds50 rain5" style="left:200px;top:20px;width:30px;height:40px;filter:blur(12px);"></div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style src="./index.css" scoped></style>