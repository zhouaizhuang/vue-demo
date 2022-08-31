<template>
  <div class="rel f xc ac rw bdc mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading">
      <div></div>
      <div></div>
    </div>

    <!-- 说明：组件名 -->
    <h4 class="abs l50 tx-50 b0">L18.vue</h4>
  </div>
</template>

<style lang="less" scoped>
.loading,
.loading > div {
  position: relative;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
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
  border-radius: 100%;
}

.loading > div:first-child {
  position: absolute;
  width: 32px;
  height: 32px;
  background: transparent;
  border-style: solid;
  border-width: 2px;
  border-right-color: transparent;
  border-left-color: transparent;
  animation: ball-clip-rotate-pulse-rotate 1s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
}

.loading > div:last-child {
  width: 16px;
  height: 16px;
  animation: ball-clip-rotate-pulse-scale 1s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
}

@keyframes ball-clip-rotate-pulse-rotate {
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

@keyframes ball-clip-rotate-pulse-scale {
  0%,
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }

  30% {
    opacity: 0.3;
    transform: translate(-50%, -50%) scale(0.15);
  }
}
</style>
