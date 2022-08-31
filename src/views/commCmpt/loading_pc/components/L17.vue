<template>
  <div class="rel f xc ac rw bdc mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading">
      <div></div>
      <div></div>
    </div>

    <!-- 说明：组件名 -->
    <h4 class="abs l50 tx-50 b0">L17.vue</h4>
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

.loading > div {
  position: absolute;
  top: 50%;
  left: 50%;
  background: transparent;
  border-style: solid;
  border-width: 2px;
  border-radius: 100%;
  animation: ball-clip-rotate-multiple-rotate 1s ease-in-out infinite;
}

.loading > div:first-child {
  position: absolute;
  width: 32px;
  height: 32px;
  border-right-color: transparent;
  border-left-color: transparent;
}

.loading > div:last-child {
  width: 16px;
  height: 16px;
  border-top-color: transparent;
  border-bottom-color: transparent;
  animation-duration: 0.5s;
  animation-direction: reverse;
}

@keyframes ball-clip-rotate-multiple-rotate {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  50% {
    transform: translate(-50%, -50%) rotate(180deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
