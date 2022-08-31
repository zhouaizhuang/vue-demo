<template>
  <div class="f xc ac rw bdc pt30 mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

    <!-- 说明：组件名 -->
    <h4 class="w100 mt20 tc">L15.vue</h4>
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
  width: 16px;
  height: 16px;
}

.loading > div {
  position: absolute;
  top: 0;
  left: -100%;
  display: block;
  width: 16px;
  width: 100%;
  height: 16px;
  height: 100%;
  border-radius: 100%;
  opacity: 0.5;
  animation: ball-circus-position 2.5s infinite cubic-bezier(0.25, 0, 0.75, 1),
    ball-circus-size 2.5s infinite cubic-bezier(0.25, 0, 0.75, 1);
}

.loading > div:nth-child(1) {
  animation-delay: 0s, -0.5s;
}

.loading > div:nth-child(2) {
  animation-delay: -0.5s, -1s;
}

.loading > div:nth-child(3) {
  animation-delay: -1s, -1.5s;
}

.loading > div:nth-child(4) {
  animation-delay: -1.5s, -2s;
}

.loading > div:nth-child(5) {
  animation-delay: -2s, -2.5s;
}

@keyframes ball-circus-position {
  50% {
    left: 100%;
  }
}

@keyframes ball-circus-size {
  50% {
    transform: scale(0.3, 0.3);
  }
}
</style>
