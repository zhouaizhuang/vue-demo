<template>
  <div class="rel f xc ac rw bdc mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

    <!-- 说明：组件名 -->
    <h4 class="abs l50 tx-50 b0">L28.vue</h4>
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
  width: 10px;
  height: 10px;
}

.loading > div {
  position: absolute;
  width: 10px;
  height: 10px;
  margin-left: -25px;
  border-radius: 100%;
  animation: ball-running-dots-animate 2s linear infinite;
}

.loading > div:nth-child(1) {
  animation-delay: 0s;
}

.loading > div:nth-child(2) {
  animation-delay: -0.4s;
}

.loading > div:nth-child(3) {
  animation-delay: -0.8s;
}

.loading > div:nth-child(4) {
  animation-delay: -1.2s;
}

.loading > div:nth-child(5) {
  animation-delay: -1.6s;
}

.loading > div:nth-child(6) {
  animation-delay: -2s;
}

.loading > div:nth-child(7) {
  animation-delay: -2.4s;
}

.loading > div:nth-child(8) {
  animation-delay: -2.8s;
}

.loading > div:nth-child(9) {
  animation-delay: -3.2s;
}

.loading > div:nth-child(10) {
  animation-delay: -3.6s;
}

.loading.la-sm {
  width: 4px;
  height: 4px;
}

.loading.la-sm > div {
  width: 4px;
  height: 4px;
  margin-left: -12px;
}

.loading.la-2x {
  width: 20px;
  height: 20px;
}

.loading.la-2x > div {
  width: 20px;
  height: 20px;
  margin-left: -50px;
}

.loading.la-3x {
  width: 30px;
  height: 30px;
}

.loading.la-3x > div {
  width: 30px;
  height: 30px;
  margin-left: -75px;
}

@keyframes ball-running-dots-animate {
  0%,
  100% {
    width: 100%;
    height: 100%;
    transform: translateY(0) translateX(500%);
  }

  80% {
    transform: translateY(0) translateX(0);
  }

  85% {
    width: 100%;
    height: 100%;
    transform: translateY(-125%) translateX(0);
  }

  90% {
    width: 200%;
    height: 75%;
  }

  95% {
    width: 100%;
    height: 100%;
    transform: translateY(-100%) translateX(500%);
  }
}
</style>
