<template>
  <div class="rel f xc ac rw bdc mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading">
      <div></div>
      <div></div>
    </div>

    <!-- 说明：组件名 -->
    <h4 class="abs l50 tx-50 b0">L54.vue</h4>
  </div>
</template>

<style lang="less" scoped>
.loading,
.loading > div {
  position: relative;
  box-sizing: border-box;
}

.loading {
  display: block;
  font-size: 0;
  color: #000;
}

.loading.la-dark {
  color: #333;
}

.loading > div {
  display: inline-block;
  float: none;
  background-color: currentColor;
  border: 0 solid currentColor;
}

.loading {
  width: 32px;
  height: 32px;
}

.loading > div:nth-child(1),
.loading > div:nth-child(2) {
  position: absolute;
  left: 0;
  width: 100%;
}

.loading > div:nth-child(1) {
  top: -25%;
  z-index: 1;
  height: 100%;
  border-radius: 10%;
  animation: square-jelly-box-animate 0.6s -0.1s linear infinite;
}

.loading > div:nth-child(2) {
  bottom: -9%;
  height: 10%;
  background: #000;
  border-radius: 50%;
  opacity: 0.2;
  animation: square-jelly-box-shadow 0.6s -0.1s linear infinite;
}

.loading.la-sm {
  width: 16px;
  height: 16px;
}

.loading.la-2x {
  width: 64px;
  height: 64px;
}

.loading.la-3x {
  width: 96px;
  height: 96px;
}

@keyframes square-jelly-box-animate {
  17% {
    border-bottom-right-radius: 10%;
  }

  25% {
    transform: translateY(25%) rotate(22.5deg);
  }

  50% {
    border-bottom-right-radius: 100%;
    transform: translateY(50%) scale(1, 0.9) rotate(45deg);
  }

  75% {
    transform: translateY(25%) rotate(67.5deg);
  }

  100% {
    transform: translateY(0) rotate(90deg);
  }
}

@keyframes square-jelly-box-shadow {
  50% {
    transform: scale(1.25, 1);
  }
}
</style>
