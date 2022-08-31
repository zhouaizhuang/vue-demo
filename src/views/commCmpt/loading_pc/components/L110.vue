<template>
  <div class="f xc ac rw bdc pt30 mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading">Load&nbsp;ng</div>

    <!-- 说明：组件名 -->
    <h4 class="w100 mt20 tc">L110.vue</h4>
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
  bottom: 0.408333rem;
  height: 0.583333em;
  width: 0.104166em;
  background: currentColor;
  animation: loading-animation-l 1s linear infinite alternate;
}

.loading::after {
  content: "";
  width: 0.208333rem;
  height: 0.208333rem;
  position: absolute;
  left: 2.604166em;
  top: 0.041666em;
  border-radius: 50%;
  background: red;
  animation: loading-animation 1s linear infinite alternate;
}

@keyframes loading-animation-l {
  0% {
    box-shadow: 0 -0.125em, -2.583333em -0.145833em;
  }

  25%,
  75% {
    box-shadow: 0 0px, -2.583333em -0.145833em;
  }

  100% {
    box-shadow: 0 0px, -2.583333em -0.333333em;
  }
}

@keyframes loading-animation {
  0% {
    transform: translate(0px, 0px) scaleX(1);
  }

  14% {
    transform: translate(-0.25em, -0.333333em) scaleX(1.05);
  }

  28% {
    transform: translate(-0.5625em, -0.583333em) scaleX(1.07);
  }

  42% {
    transform: translate(-0.958333em, -0.729166em) scaleX(1.1);
  }

  57% {
    transform: translate(-1.458333em, -0.770833em) scaleX(1.1);
  }

  71% {
    transform: translate(-1.958333em, -0.666666em) scaleX(1.07);
  }

  85% {
    transform: translate(-2.3125em, -0.458333em) scaleX(1.05);
  }

  100% {
    transform: translate(-2.604166em, -0.1875em) scaleX(1);
  }
}
</style>
