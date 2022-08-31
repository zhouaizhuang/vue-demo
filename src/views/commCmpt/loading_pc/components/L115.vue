<template>
  <div class="rel f xc ac rw bdc mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading"></div>

    <!-- 说明：组件名 -->
    <h4 class="abs l50 tx-50 b0">L115.vue</h4>
  </div>
</template>

<style lang="less" scoped>
.loading {
  display: inline-block;
  position: relative;
}

.loading::before {
  content: "Loading";
  color: #666;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 28px;
  letter-spacing: 2px;
  display: inline-block;
  animation: floating 1s ease-out infinite alternate;
}

.loading::after {
  content: "";
  width: 100%;
  height: 10px;
  background: rgba(0, 0, 0, 0.15);
  position: absolute;
  left: 0;
  top: 100%;
  filter: blur(4px);
  border-radius: 50%;
  animation: loading-animation 1s ease-out infinite alternate;
}

@keyframes floating {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-25px);
  }
}

@keyframes loading-animation {
  0% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1.2);
  }
}
</style>
