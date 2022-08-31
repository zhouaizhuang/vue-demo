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
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

    <!-- 说明：组件名 -->
    <h4 class="w100 mt20 tc">L12.vue</h4>
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
  margin: 30px;
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
  width: 18px;
  height: 18px;
}

.loading > div {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 0;
  opacity: 0;
  transform: translate(100%, 100%);
  animation: ball-8bits 1s 0s ease infinite;
}

.loading > div:nth-child(1) {
  animation-delay: -0.9375s;
}

.loading > div:nth-child(2) {
  animation-delay: -0.875s;
}

.loading > div:nth-child(3) {
  animation-delay: -0.8125s;
}

.loading > div:nth-child(4) {
  animation-delay: -0.75s;
}

.loading > div:nth-child(5) {
  animation-delay: -0.6875s;
}

.loading > div:nth-child(6) {
  animation-delay: -0.625s;
}

.loading > div:nth-child(7) {
  animation-delay: -0.5625s;
}

.loading > div:nth-child(8) {
  animation-delay: -0.5s;
}

.loading > div:nth-child(9) {
  animation-delay: -0.4375s;
}

.loading > div:nth-child(10) {
  animation-delay: -0.375s;
}

.loading > div:nth-child(11) {
  animation-delay: -0.3125s;
}

.loading > div:nth-child(12) {
  animation-delay: -0.25s;
}

.loading > div:nth-child(13) {
  animation-delay: -0.1875s;
}

.loading > div:nth-child(14) {
  animation-delay: -0.125s;
}

.loading > div:nth-child(15) {
  animation-delay: -0.0625s;
}

.loading > div:nth-child(16) {
  animation-delay: 0s;
}

.loading > div:nth-child(1) {
  top: -100%;
  left: 0;
}

.loading > div:nth-child(2) {
  top: -100%;
  left: 33.3333333333%;
}

.loading > div:nth-child(3) {
  top: -66.6666666667%;
  left: 66.6666666667%;
}

.loading > div:nth-child(4) {
  top: -33.3333333333%;
  left: 100%;
}

.loading > div:nth-child(5) {
  top: 0;
  left: 100%;
}

.loading > div:nth-child(6) {
  top: 33.3333333333%;
  left: 100%;
}

.loading > div:nth-child(7) {
  top: 66.6666666667%;
  left: 66.6666666667%;
}

.loading > div:nth-child(8) {
  top: 100%;
  left: 33.3333333333%;
}

.loading > div:nth-child(9) {
  top: 100%;
  left: 0;
}

.loading > div:nth-child(10) {
  top: 100%;
  left: -33.3333333333%;
}

.loading > div:nth-child(11) {
  top: 66.6666666667%;
  left: -66.6666666667%;
}

.loading > div:nth-child(12) {
  top: 33.3333333333%;
  left: -100%;
}

.loading > div:nth-child(13) {
  top: 0;
  left: -100%;
}

.loading > div:nth-child(14) {
  top: -33.3333333333%;
  left: -100%;
}

.loading > div:nth-child(15) {
  top: -66.6666666667%;
  left: -66.6666666667%;
}

.loading > div:nth-child(16) {
  top: -100%;
  left: -33.3333333333%;
}

@keyframes ball-8bits {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 1;
  }

  51% {
    opacity: 0;
  }
}
</style>
