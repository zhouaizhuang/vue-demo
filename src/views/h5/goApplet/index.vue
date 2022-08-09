<template>
  <div style="max-width: 420px;margin: auto;" class="bgf5 mh100vh">
    <div class="rel" style="width:2.4rem;height:1.4rem;border-radius:80px;margin: 0 auto;">
      <wx-open-launch-weapp
        id="launch-btn"
        username="gh_2d50fdf10999"
        path="/pages/index/index.html"
        style="position:absolute;top:0;left:0;z-index:100;width:100%;height:100%"
      >
        <script type="text/wxtag-template">
          <div style="width:100%;height:150px;background-color:pink;opacity:0;">
            去小程序中助力
          </div>
        </script>
      </wx-open-launch-weapp>
      <div class="abs l0 r0 t0">
        <img src="https://upload.qianfanyun.com/olympic_btn_empty.png" class="w100 h100" />
        <div class="abs l50 t50 txy-50 gf fs28r zx10 b nowrap">前往渐渐助手</div>
      </div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style>
</style>