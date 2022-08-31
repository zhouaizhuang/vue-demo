<template>
  <div class="f xc ac rw bdc pt30 mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading">
      <div></div>
      <div></div>
    </div>

    <!-- 说明：组件名 -->
    <h4 class="w100 mt20 tc">L45.vue</h4>
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
  top: 0;
  left: 0;
  width: 14px;
  height: 14px;
  margin-top: -7px;
  margin-left: -7px;
  border-radius: 0;
  animation: cube-transition 1.6s 0s infinite ease-in-out;
}

.loading > div:last-child {
  animation-delay: -0.8s;
}

.loading.la-sm {
  width: 16px;
  height: 16px;
}

.loading.la-sm > div {
  width: 6px;
  height: 6px;
  margin-top: -3px;
  margin-left: -3px;
}

.loading.la-2x {
  width: 64px;
  height: 64px;
}

.loading.la-2x > div {
  width: 28px;
  height: 28px;
  margin-top: -14px;
  margin-left: -14px;
}

.loading.la-3x {
  width: 96px;
  height: 96px;
}

.loading.la-3x > div {
  width: 42px;
  height: 42px;
  margin-top: -21px;
  margin-left: -21px;
}

@keyframes cube-transition {
  25% {
    top: 0;
    left: 100%;
    transform: scale(0.5) rotate(-90deg);
  }

  50% {
    top: 100%;
    left: 100%;
    transform: scale(1) rotate(-180deg);
  }

  75% {
    top: 100%;
    left: 0;
    transform: scale(0.5) rotate(-270deg);
  }

  100% {
    top: 0;
    left: 0;
    transform: scale(1) rotate(-360deg);
  }
}
</style>
