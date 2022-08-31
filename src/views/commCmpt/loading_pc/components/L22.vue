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
      <div></div>
    </div>

    <!-- 说明：组件名 -->
    <h4 class="w100 mt20 tc">L22.vue</h4>
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
  width: 36px;
  height: 36px;
}

.loading > div {
  width: 8px;
  height: 8px;
  margin: 2px;
  border-radius: 100%;
  animation-name: ball-grid-beat;
  animation-iteration-count: infinite;
}

.loading > div:nth-child(1) {
  animation-duration: 0.65s;
  animation-delay: 0.03s;
}

.loading > div:nth-child(2) {
  animation-duration: 1.02s;
  animation-delay: 0.09s;
}

.loading > div:nth-child(3) {
  animation-duration: 1.06s;
  animation-delay: -0.69s;
}

.loading > div:nth-child(4) {
  animation-duration: 1.5s;
  animation-delay: -0.41s;
}

.loading > div:nth-child(5) {
  animation-duration: 1.6s;
  animation-delay: 0.04s;
}

.loading > div:nth-child(6) {
  animation-duration: 0.84s;
  animation-delay: 0.07s;
}

.loading > div:nth-child(7) {
  animation-duration: 0.68s;
  animation-delay: -0.66s;
}

.loading > div:nth-child(8) {
  animation-duration: 0.93s;
  animation-delay: -0.76s;
}

.loading > div:nth-child(9) {
  animation-duration: 1.24s;
  animation-delay: -0.76s;
}

@keyframes ball-grid-beat {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.35;
  }

  100% {
    opacity: 1;
  }
}
</style>
