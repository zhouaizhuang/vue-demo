<template>
  <div class="rel f xc ac rw bdc mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading"></div>

    <!-- 说明：组件名 -->
    <h4 class="abs l50 tx-50 b0">L96.vue</h4>
  </div>
</template>

<style lang="less" scoped>
.loading {
  width: 16px;
  height: 16px;
  box-shadow: 0 30px, 0 -30px;
  border-radius: 4px;
  background: currentColor;
  display: inline-block;
  position: relative;
  color: #ddd;
  left: -30px;
  animation: loading-animation 2s ease infinite;
}

.loading::after,
.loading::before {
  content: "";
  width: 16px;
  height: 16px;
  box-shadow: 0 30px, 0 -30px;
  border-radius: 4px;
  background: currentColor;
  color: #ddd;
  position: absolute;
  left: 30px;
  top: 0;
  animation: loading-animation 2s 0.2s ease infinite;
}

.loading::before {
  animation-delay: 0.4s;
  left: 60px;
}

@keyframes loading-animation {
  0% {
    top: 0;
    color: #ddd;
  }
  50% {
    top: 30px;
    color: rgba(255, 255, 255, 0.2);
  }
  100% {
    top: 0;
    color: #ddd;
  }
}
</style>
