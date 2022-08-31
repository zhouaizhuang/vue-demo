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
    <h4 class="w100 mt20 tc">L48.vue</h4>
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
  width: 40px;
  height: 32px;
}

.loading > div {
  width: 4px;
  height: 32px;
  margin: 2px;
  margin-top: 0;
  margin-bottom: 0;
  border-radius: 0;
  animation-name: line-scale-party;
  animation-iteration-count: infinite;
}

.loading > div:nth-child(1) {
  animation-duration: 0.43s;
  animation-delay: -0.23s;
}

.loading > div:nth-child(2) {
  animation-duration: 0.62s;
  animation-delay: -0.32s;
}

.loading > div:nth-child(3) {
  animation-duration: 0.43s;
  animation-delay: -0.44s;
}

.loading > div:nth-child(4) {
  animation-duration: 0.8s;
  animation-delay: -0.31s;
}

.loading > div:nth-child(5) {
  animation-duration: 0.74s;
  animation-delay: -0.24s;
}

.loading.la-sm {
  width: 20px;
  height: 16px;
}

.loading.la-sm > div {
  width: 2px;
  height: 16px;
  margin: 1px;
  margin-top: 0;
  margin-bottom: 0;
}

.loading.la-2x {
  width: 80px;
  height: 64px;
}

.loading.la-2x > div {
  width: 8px;
  height: 64px;
  margin: 4px;
  margin-top: 0;
  margin-bottom: 0;
}

.loading.la-3x {
  width: 120px;
  height: 96px;
}

.loading.la-3x > div {
  width: 12px;
  height: 96px;
  margin: 6px;
  margin-top: 0;
  margin-bottom: 0;
}

@keyframes line-scale-party {
  0% {
    transform: scaleY(1);
  }

  50% {
    transform: scaleY(0.3);
  }

  100% {
    transform: scaleY(1);
  }
}
</style>
