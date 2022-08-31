<template>
  <div class="f xc ac rw bdc pt30 mr30 mb30" style="width:140px;height:140px;">
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
    <h4 class="w100 mt20 tc">L41.vue</h4>
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
  width: 26px;
  height: 26px;
}

.loading > div {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12px;
  height: 12px;
  margin-top: -6px;
  margin-left: -6px;
  border-radius: 100%;
  animation: ball-square-spin 1s infinite ease-in-out;
}

.loading > div:nth-child(1) {
  top: 0;
  left: 0;
  animation-delay: -1.125s;
}

.loading > div:nth-child(2) {
  top: 0;
  left: 50%;
  animation-delay: -1.25s;
}

.loading > div:nth-child(3) {
  top: 0;
  left: 100%;
  animation-delay: -1.375s;
}

.loading > div:nth-child(4) {
  top: 50%;
  left: 100%;
  animation-delay: -1.5s;
}

.loading > div:nth-child(5) {
  top: 100%;
  left: 100%;
  animation-delay: -1.625s;
}

.loading > div:nth-child(6) {
  top: 100%;
  left: 50%;
  animation-delay: -1.75s;
}

.loading > div:nth-child(7) {
  top: 100%;
  left: 0;
  animation-delay: -1.875s;
}

.loading > div:nth-child(8) {
  top: 50%;
  left: 0;
  animation-delay: -2s;
}

.loading.la-sm {
  width: 12px;
  height: 12px;
}

.loading.la-sm > div {
  width: 6px;
  height: 6px;
  margin-top: -3px;
  margin-left: -3px;
}

.loading.la-2x {
  width: 52px;
  height: 52px;
}

.loading.la-2x > div {
  width: 24px;
  height: 24px;
  margin-top: -12px;
  margin-left: -12px;
}

.loading.la-3x {
  width: 78px;
  height: 78px;
}

.loading.la-3x > div {
  width: 36px;
  height: 36px;
  margin-top: -18px;
  margin-left: -18px;
}

@keyframes ball-square-spin {
  0%,
  40%,
  100% {
    transform: scale(0.4);
  }

  70% {
    transform: scale(1);
  }
}
</style>
