<template>
  <div class="box-bg ovh">
    <div class="rel header f ac xc fs24 gf">
      <div class="b">数据可视化展板</div>
      <div class="abs t40 fs16" style="right:10px;">当前时间：{{time}}</div>
    </div>
    <!--下半部分-->
    <div class="f pl10 pr10">
      <!--左侧-->
      <div class="f3">
        <div class="panel rel mb10">
          <div class="bottom-bd"></div>
          <h2 class="gf f ac xc fs18 " style="height:40px;">就业行业</h2>
          <div class="abs" ref="industry" style="top:40px;bottom:10px;left:10px;right:10px;"></div>
        </div>
        <div class="panel rel mb10">
          <div class="bottom-bd"></div>
          <h2 class="gf f ac xc fs18 " style="height:40px;">人员变化</h2>
          <div class="abs" ref="personNum" style="top:40px;bottom:10px;left:10px;right:10px;"></div>
        </div>
        <div class="panel rel">
          <div class="bottom-bd"></div>
          <h2 class="gf f ac xc fs18 " style="height:40px;">年龄分布</h2>
          <div class="abs" ref="agePie" style="top:40px;bottom:10px;left:10px;right:10px;"></div>
        </div>
      </div>
      <!--中间-->
      <div class="f5 ml10 mr10">
        <div class="pb10 pt10 pl10 pr10" style="background:rgba(101,132,226,.1);">
          <div class="f ac fs60 gffeb7b lcdd rel lt2 no" style="height:60px;border:1px solid rgba(25, 186, 139, .17);">
            <div class="f1 f ac xc">123456</div>
            <div class="h50" style="width:1px;background:rgb(255,255,255,.2);"></div>
            <div class="f1 f ac xc">123456</div>
          </div>
          <div class="f fs15 gf pt10">
            <div class="f1 f ac xc">前端需求人数</div>
            <div class="f1 f ac xc">市场供应人数</div>
          </div>
        </div>
        <div class="rel" style="height:72vh;">
          <div class="map-box abs t50 l50 txy-50 op3"></div>
          <div class="map-box1 abs t50 l50 op6"></div>
          <div class="map-box2 abs t50 l50 op8"></div>
          <div class="abs trbl0">
            123
          </div>
        </div>
      </div>
      <!--右侧-->
      <div class="f3">
        <div class="panel rel mb10">
          <div class="bottom-bd"></div>
          <h2 class="gf f ac xc fs18 " style="height:40px;">掌握技能</h2>
          <div class="abs" ref="skill" style="top:40px;bottom:10px;left:10px;right:10px;"></div>
        </div>
        <div class="panel rel mb10">
          <div class="bottom-bd"></div>
          <h2 class="gf f ac xc fs18 " style="height:40px;">播放量</h2>
          <div class="abs" ref="playNum" style="top:40px;bottom:10px;left:10px;right:10px;"></div>
        </div>
        <div class="panel rel">
          <div class="bottom-bd"></div>
          <h2 class="gf f ac xc fs18 " style="height:40px;">柱形图-就业行业</h2>
          <div class="abs bgpink" style="top:40px;bottom:10px;left:10px;right:10px;"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src="./index.css" scoped></style>