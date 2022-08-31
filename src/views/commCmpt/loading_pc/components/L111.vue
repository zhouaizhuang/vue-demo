<template>
  <div class="f xc ac rw bdc pt30 mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading">Load&nbsp;ng</div>

    <!-- 说明：组件名 -->
    <h4 class="w100 mt20 tc">L111.vue</h4>
  </div>
</template>

<style lang="less" scoped>
.loading {
  display: inline-block;
  color: #ddd;
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 28px;
  letter-spacing: 0.083333em;
}

.loading::before {
  content: "";
  position: absolute;
  right: 1.458333em;
  bottom: 0.208333em;
  height: 0.583333em;
  width: 0.104166em;
  background: currentColor;
}

.loading::after {
  content: "";
  width: 0.16666em;
  height: 0.16666em;
  position: absolute;
  left: 2.62em;
  top: 0.041666em;
  border-radius: 50%;
  background: red;
  animation: loading-animation 1s ease-in infinite;
}

@keyframes loading-animation {
  0% {
    transform: translateY(0.16666em) scaleY(1) scaleX(1.25);
  }

  25%,
  75% {
    transform: translateY(-0.104166em) scaleY(1.2) scaleX(1);
  }

  50% {
    transform: translateY(-0.208333em) scaleY(1) scaleX(1);
  }

  100% {
    transform: translateY(0.16666em) scaleY(0.8) scaleX(0.8);
  }
}
</style>
