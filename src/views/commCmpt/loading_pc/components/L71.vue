<template>
  <div class="rel f xc ac rw bdc mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="shape shape-4"></div>
    </div>

    <!-- 说明：组件名 -->
    <h4 class="abs l50 tx-50 b0">L71.vue</h4>
  </div>
</template>

<style lang="less" scoped>
.loading {
  width: 30px;
  height: 30px;
  position: relative;
  transform: rotate(45deg);
}

.shape {
  width: 15px;
  height: 15px;
  border-radius: 1px;
  position: absolute;
}

.shape-1 {
  background-color: #1875e5;
  left: 0;
  animation: animationShape1 2s ease infinite;
}

.shape-2 {
  background-color: #c5523f;
  right: 0;
  animation: animationShape2 2s ease infinite;
}

.shape-3 {
  background-color: #499255;
  bottom: 0;
  animation: animationShape3 2s ease infinite;
}

.shape-4 {
  background-color: #f2b736;
  right: 0;
  bottom: 0;
  animation: animationShape4 2s ease infinite;
}

@keyframes animationShape1 {
  0% {
    transform: translate(0);
  }

  25% {
    transform: translateX(100%);
  }

  50% {
    transform: translate(100%, 100%);
  }

  75% {
    transform: translate(0, 100%);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes animationShape2 {
  0% {
    transform: translate(0);
  }

  25% {
    transform: translateY(100%);
  }

  50% {
    transform: translate(-100%, 100%);
  }

  75% {
    transform: translate(-100%, 0);
  }

  100% {
    transform: translate(0);
  }
}

@keyframes animationShape3 {
  0% {
    transform: translate(0);
  }

  25% {
    transform: translateY(-100%);
  }

  50% {
    transform: translate(100%, -100%);
  }

  75% {
    transform: translate(100%, 0);
  }

  100% {
    transform: translate(0);
  }
}

@keyframes animationShape4 {
  0% {
    transform: translate(0);
  }

  25% {
    transform: translateX(-100%);
  }

  50% {
    transform: translate(-100%, -100%);
  }

  75% {
    transform: translate(0, -100%);
  }

  100% {
    transform: translate(0);
  }
}
</style>
