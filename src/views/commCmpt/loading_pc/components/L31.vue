<template>
  <div class="rel f xc ac rw bdc mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading">
      <div></div>
    </div>

    <!-- 说明：组件名 -->
    <h4 class="abs l50 tx-50 b0">L31.vue</h4>
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
  width: 32px;
  height: 32px;
  background: transparent;
  border-width: 2px;
  border-radius: 100%;
  opacity: 0;
  animation: ball-scale-ripple 1s 0s infinite
    cubic-bezier(0.21, 0.53, 0.56, 0.8);
}

.loading.la-sm {
  width: 16px;
  height: 16px;
}

.loading.la-sm > div {
  width: 16px;
  height: 16px;
  border-width: 1px;
}

.loading.la-2x {
  width: 64px;
  height: 64px;
}

.loading.la-2x > div {
  width: 64px;
  height: 64px;
  border-width: 4px;
}

.loading.la-3x {
  width: 96px;
  height: 96px;
}

.loading.la-3x > div {
  width: 96px;
  height: 96px;
  border-width: 6px;
}

@keyframes ball-scale-ripple {
  0% {
    opacity: 1;
    transform: scale(0.1);
  }

  70% {
    opacity: 0.65;
    transform: scale(1);
  }

  100% {
    opacity: 0;
  }
}
</style>
