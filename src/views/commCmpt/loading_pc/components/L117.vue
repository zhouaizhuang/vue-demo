<template>
  <div class="rel f xc ac rw bdc mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading">Loading</div>

    <!-- 说明：组件名 -->
    <h4 class="abs l50 tx-50 b0">L117.vue</h4>
  </div>
</template>

<style lang="less" scoped>
.loading {
  display: inline-block;
  font-size: 28px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #ff3d00;
  letter-spacing: 2px;
  position: relative;
}

.loading::after {
  content: "Loading";
  position: absolute;
  left: 0;
  top: 0;
  color: #ddd;
  width: 100%;
  height: 100%;
  overflow: hidden;
  animation: loading-animation 10s ease-in infinite;
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
