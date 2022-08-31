<template>
  <div class="f xc ac rw bdc pt30 mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading">
      <div></div>
    </div>

    <!-- 说明：组件名 -->
    <h4 class="w100 mt20 tc">L57.vue</h4>
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
}

.loading > div:before,
.loading > div:after {
  position: absolute;
  top: 14px;
  left: 14px;
  display: block;
  width: 2px;
  margin-top: -1px;
  margin-left: -1px;
  content: "";
  background: currentColor;
  border-radius: 2px;
  transform-origin: 1px 1px 0;
  animation: timer-loader 1250ms infinite linear;
  animation-delay: -625ms;
}

.loading > div:before {
  height: 12px;
}

.loading > div:after {
  height: 8px;
  animation-duration: 15s;
  animation-delay: -7.5s;
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

.loading.la-sm > div:before,
.loading.la-sm > div:after {
  top: 7px;
  left: 7px;
  width: 1px;
  margin-top: -0.5px;
  margin-left: -0.5px;
  border-radius: 1px;
  transform-origin: 0.5px 0.5px 0;
}

.loading.la-sm > div:before {
  height: 6px;
}

.loading.la-sm > div:after {
  height: 4px;
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

.loading.la-2x > div:before,
.loading.la-2x > div:after {
  top: 28px;
  left: 28px;
  width: 4px;
  margin-top: -2px;
  margin-left: -2px;
  border-radius: 4px;
  transform-origin: 2px 2px 0;
}

.loading.la-2x > div:before {
  height: 24px;
}

.loading.la-2x > div:after {
  height: 16px;
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

.loading.la-3x > div:before,
.loading.la-3x > div:after {
  top: 42px;
  left: 42px;
  width: 6px;
  margin-top: -3px;
  margin-left: -3px;
  border-radius: 6px;
  transform-origin: 3px 3px 0;
}

.loading.la-3x > div:before {
  height: 36px;
}

.loading.la-3x > div:after {
  height: 24px;
}

@keyframes timer-loader {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
