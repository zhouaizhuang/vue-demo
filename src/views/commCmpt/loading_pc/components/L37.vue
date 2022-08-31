<template>
  <div class="rel f xc ac rw bdc mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

    <!-- 说明：组件名 -->
    <h4 class="abs l50 tx-50 b0">L37.vue</h4>
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
  width: 8px;
  height: 8px;
  margin-top: -4px;
  margin-left: -4px;
  border-radius: 100%;
  animation: ball-spin-fade 1s infinite linear;
}

.loading > div:nth-child(1) {
  top: 5%;
  left: 50%;
  animation-delay: -1.125s;
}

.loading > div:nth-child(2) {
  top: 18.1801948466%;
  left: 81.8198051534%;
  animation-delay: -1.25s;
}

.loading > div:nth-child(3) {
  top: 50%;
  left: 95%;
  animation-delay: -1.375s;
}

.loading > div:nth-child(4) {
  top: 81.8198051534%;
  left: 81.8198051534%;
  animation-delay: -1.5s;
}

.loading > div:nth-child(5) {
  top: 94.9999999966%;
  left: 50.0000000005%;
  animation-delay: -1.625s;
}

.loading > div:nth-child(6) {
  top: 81.8198046966%;
  left: 18.1801949248%;
  animation-delay: -1.75s;
}

.loading > div:nth-child(7) {
  top: 49.9999750815%;
  left: 5.0000051215%;
  animation-delay: -1.875s;
}

.loading > div:nth-child(8) {
  top: 18.179464974%;
  left: 18.1803700518%;
  animation-delay: -2s;
}

.loading.la-sm {
  width: 16px;
  height: 16px;
}

.loading.la-sm > div {
  width: 4px;
  height: 4px;
  margin-top: -2px;
  margin-left: -2px;
}

.loading.la-2x {
  width: 64px;
  height: 64px;
}

.loading.la-2x > div {
  width: 16px;
  height: 16px;
  margin-top: -8px;
  margin-left: -8px;
}

.loading.la-3x {
  width: 96px;
  height: 96px;
}

.loading.la-3x > div {
  width: 24px;
  height: 24px;
  margin-top: -12px;
  margin-left: -12px;
}

@keyframes ball-spin-fade {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0.25;
    transform: scale(0.5);
  }
}
</style>
