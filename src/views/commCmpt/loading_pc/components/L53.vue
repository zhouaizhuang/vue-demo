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
    </div>

    <!-- 说明：组件名 -->
    <h4 class="abs l50 tx-50 b0">L53.vue</h4>
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
  width: 0;
  height: 0;
  background: transparent;
  border-style: solid;
  border-width: 16px;
  border-right-color: transparent;
  border-radius: 100%;
  animation: pacman-rotate-half-up 0.5s 0s infinite;
}

.loading > div:nth-child(2) {
  margin-top: -32px;
  animation-name: pacman-rotate-half-down;
}

.loading > div:nth-child(3),
.loading > div:nth-child(4),
.loading > div:nth-child(5),
.loading > div:nth-child(6) {
  position: absolute;
  top: 50%;
  left: 200%;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  opacity: 0;
  animation: pacman-balls 2s 0s infinite linear;
}

.loading > div:nth-child(3) {
  animation-delay: -1.44s;
}

.loading > div:nth-child(4) {
  animation-delay: -1.94s;
}

.loading > div:nth-child(5) {
  animation-delay: -2.44s;
}

.loading > div:nth-child(6) {
  animation-delay: -2.94s;
}

.loading.la-sm {
  width: 16px;
  height: 16px;
}

.loading.la-sm > div:nth-child(1),
.loading.la-sm > div:nth-child(2) {
  border-width: 8px;
}

.loading.la-sm > div:nth-child(2) {
  margin-top: -16px;
}

.loading.la-sm > div:nth-child(3),
.loading.la-sm > div:nth-child(4),
.loading.la-sm > div:nth-child(5),
.loading.la-sm > div:nth-child(6) {
  width: 4px;
  height: 4px;
}

.loading.la-2x {
  width: 64px;
  height: 64px;
}

.loading.la-2x > div:nth-child(1),
.loading.la-2x > div:nth-child(2) {
  border-width: 32px;
}

.loading.la-2x > div:nth-child(2) {
  margin-top: -64px;
}

.loading.la-2x > div:nth-child(3),
.loading.la-2x > div:nth-child(4),
.loading.la-2x > div:nth-child(5),
.loading.la-2x > div:nth-child(6) {
  width: 16px;
  height: 16px;
}

.loading.la-3x {
  width: 96px;
  height: 96px;
}

.loading.la-3x > div:nth-child(1),
.loading.la-3x > div:nth-child(2) {
  border-width: 48px;
}

.loading.la-3x > div:nth-child(2) {
  margin-top: -96px;
}

.loading.la-3x > div:nth-child(3),
.loading.la-3x > div:nth-child(4),
.loading.la-3x > div:nth-child(5),
.loading.la-3x > div:nth-child(6) {
  width: 24px;
  height: 24px;
}

@keyframes pacman-rotate-half-up {
  0%,
  100% {
    transform: rotate(270deg);
  }

  50% {
    transform: rotate(360deg);
  }
}

@keyframes pacman-rotate-half-down {
  0%,
  100% {
    transform: rotate(90deg);
  }

  50% {
    transform: rotate(0deg);
  }
}

@keyframes pacman-balls {
  0% {
    left: 200%;
    opacity: 0;
    transform: translateY(-50%);
  }

  5% {
    opacity: 0.5;
  }

  66% {
    opacity: 1;
  }

  67% {
    opacity: 0;
  }

  100% {
    left: 0;
    transform: translateY(-50%);
  }
}
</style>
