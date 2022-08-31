<template>
  <div class="rel f xc ac rw bdc mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading">
      <div></div>
    </div>

    <!-- 说明：组件名 -->
    <h4 class="abs l50 tx-50 b0">L55.vue</h4>
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
  width: 100%;
  height: 100%;
  background: transparent;
  border-width: 2px;
  border-radius: 0;
  animation: square-loader 2s infinite ease;
}

.loading > div:after {
  display: inline-block;
  width: 100%;
  vertical-align: top;
  content: "";
  background-color: currentColor;
  animation: square-loader-inner 2s infinite ease-in;
}

.loading.la-sm {
  width: 16px;
  height: 16px;
}

.loading.la-sm > div {
  border-width: 1px;
}

.loading.la-2x {
  width: 64px;
  height: 64px;
}

.loading.la-2x > div {
  border-width: 4px;
}

.loading.la-3x {
  width: 96px;
  height: 96px;
}

.loading.la-3x > div {
  border-width: 6px;
}

@keyframes square-loader {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(180deg);
  }

  50% {
    transform: rotate(180deg);
  }

  75% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes square-loader-inner {
  0% {
    height: 0;
  }

  25% {
    height: 0;
  }

  50% {
    height: 100%;
  }

  75% {
    height: 100%;
  }

  100% {
    height: 0;
  }
}
</style>
