<template>
  <div class="rel f xc ac rw bdc mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading"></div>

    <!-- 说明：组件名 -->
    <h4 class="abs l50 tx-50 b0">L88.vue</h4>
  </div>
</template>

<style lang="less" scoped>
.loading {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 4px solid #ddd;
  border-right: 4px solid transparent;
  animation: rotation 1s linear infinite;
}

.loading::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border-bottom: 4px solid #ff3d00;
  border-left: 4px solid transparent;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
