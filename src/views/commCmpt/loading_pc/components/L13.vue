<template>
  <div class="f xc ac rw bdc pt30 mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

    <!-- 说明：组件名 -->
    <h4 class="w100 mt20 tc">L13.vue</h4>
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

.loading > div:nth-child(1) {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  width: 60%;
  height: 60%;
  background: #aaa;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  animation: ball-atom-shrink 4.5s infinite linear;
}

.loading > div:not(:nth-child(1)) {
  position: absolute;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background: none;
  animation: ball-atom-zindex 1.5s 0s infinite steps(2, end);
}

.loading > div:not(:nth-child(1)):before {
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  margin-top: -5px;
  margin-left: -5px;
  content: "";
  background: currentColor;
  border-radius: 50%;
  opacity: 0.75;
  animation: ball-atom-position 1.5s 0s infinite ease,
    ball-atom-size 1.5s 0s infinite ease;
}

.loading > div:nth-child(2) {
  animation-delay: 0.75s;
}

.loading > div:nth-child(2):before {
  animation-delay: 0s, -1.125s;
}

.loading > div:nth-child(3) {
  transform: rotate(120deg);
  animation-delay: -0.25s;
}

.loading > div:nth-child(3):before {
  animation-delay: -1s, -0.75s;
}

.loading > div:nth-child(4) {
  transform: rotate(240deg);
  animation-delay: 0.25s;
}

.loading > div:nth-child(4):before {
  animation-delay: -0.5s, -0.125s;
}

@keyframes ball-atom-position {
  50% {
    top: 100%;
    left: 100%;
  }
}
</style>
