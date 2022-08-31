<template>
  <div class="rel f xc ac rw bdc mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading"></div>

    <!-- 说明：组件名 -->
    <h4 class="abs l50 tx-50 b0">L97.vue</h4>
  </div>
</template>

<style lang="less" scoped>
.loading {
  width: 8px;
  height: 40px;
  border-radius: 4px;
  display: inline-block;
  position: relative;
  background: currentColor;
  color: #ddd;
  animation: loading-animation-m 0.3s 0.3s linear infinite alternate;
}

.loading::after,
.loading::before {
  content: "";
  width: 8px;
  height: 40px;
  border-radius: 4px;
  background: currentColor;
  position: absolute;
  bottom: 0;
  left: 20px;
  animation: loading-animation 0.3s 0.45s linear infinite alternate;
}

.loading::before {
  left: -20px;
  animation-delay: 0s;
}

@keyframes loading-animation-m {
  0% {
    height: 40px;
    transform: translateY(0);
  }

  100% {
    height: 10px;
    transform: translateY(30px);
  }
}

@keyframes loading-animation {
  0% {
    height: 48px;
  }

  100% {
    height: 4.8px;
  }
}
</style>
