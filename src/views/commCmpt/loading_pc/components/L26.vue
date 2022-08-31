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
    <h4 class="abs l50 tx-50 b0">L26.vue</h4>
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
  width: 70px;
  height: 14px;
}

.loading > div {
  width: 10px;
  height: 10px;
  margin: 2px;
  border-radius: 100%;
  animation: ball-pulse-rise-even 1s cubic-bezier(0.15, 0.36, 0.9, 0.6) 0s
    infinite;
}

.loading > div:nth-child(2n-1) {
  animation-name: ball-pulse-rise-odd;
}

.loading.la-sm {
  width: 34px;
  height: 6px;
}

.loading.la-sm > div {
  width: 4px;
  height: 4px;
  margin: 1px;
}

.loading.la-2x {
  width: 140px;
  height: 28px;
}

.loading.la-2x > div {
  width: 20px;
  height: 20px;
  margin: 4px;
}

.loading.la-3x {
  width: 210px;
  height: 42px;
}

.loading.la-3x > div {
  width: 30px;
  height: 30px;
  margin: 6px;
}

@keyframes ball-pulse-rise-even {
  0% {
    opacity: 1;
    transform: scale(1.1);
  }

  25% {
    transform: translateY(-200%);
  }

  50% {
    opacity: 0.35;
    transform: scale(0.3);
  }

  75% {
    transform: translateY(200%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
    transform: scale(1);
  }
}

@keyframes ball-pulse-rise-odd {
  0% {
    opacity: 0.35;
    transform: scale(0.4);
  }

  25% {
    transform: translateY(200%);
  }

  50% {
    opacity: 1;
    transform: scale(1.1);
  }

  75% {
    transform: translateY(-200%);
  }

  100% {
    opacity: 0.35;
    transform: translateY(0);
    transform: scale(0.75);
  }
}
</style>
