<template>
  <div class="f xc ac rw bdc pt30 mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading">Loading</div>

    <!-- 说明：组件名 -->
    <h4 class="w100 mt20 tc">L108.vue</h4>
  </div>
</template>

<style lang="less" scoped>
.loading {
  display: inline-block;
  font-size: 28px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 0 2px #ff3d00, 0 0 1px #ff3d00, 0 0 1px #ff3d00;
  letter-spacing: 2px;
  position: relative;
}

.loading::after {
  content: "Loading";
  position: absolute;
  left: 0;
  top: 0;
  color: #ff3d00;
  width: 0%;
  height: 100%;
  overflow: hidden;
  animation: loading-animation 6s linear infinite;
}

@keyframes loading-animation {
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
}
</style>
