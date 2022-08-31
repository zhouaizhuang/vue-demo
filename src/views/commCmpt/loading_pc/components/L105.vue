<template>
  <div class="rel f xc ac rw bdc mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading"></div>

    <!-- 说明：组件名 -->
    <h4 class="abs l50 tx-50 b0">L105.vue</h4>
  </div>
</template>

<style lang="less" scoped>
.loading {
  width: 20px;
  height: 12px;
  display: inline-block;
  position: relative;
  border-radius: 4px;
  color: #ddd;
  background: currentColor;
  animation: loading-animation 0.6s 0.3s ease infinite alternate;
}

.loading::after,
.loading::before {
  content: "";
  width: 20px;
  height: 12px;
  background: currentColor;
  position: absolute;
  border-radius: 4px;
  top: 0;
  right: 110%;
  animation: loading-animation 0.6s ease infinite alternate;
}

.loading::after {
  left: 110%;
  right: auto;
  animation-delay: 0.6s;
}

@keyframes loading-animation {
  0% {
    width: 20px;
  }

  100% {
    width: 48px;
  }
}
</style>
