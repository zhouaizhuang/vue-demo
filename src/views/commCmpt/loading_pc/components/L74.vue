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
    <h4 class="abs l50 tx-50 b0">L74.vue</h4>
  </div>
</template>

<style lang="less" scoped>
.loading {
  width: 30px;
  height: 30px;
  position: relative;
}

.shape {
  width: 10px;
  height: 10px;
  position: absolute;
  top: 40%;
  opacity: 0.5;
}

.shape-1 {
  background-color: #1875e5;
  left: -20px;
  animation: animationShape1 1.5s ease infinite;
}

.shape-2 {
  background-color: #c5523f;
  left: 0px;
  animation: animationShape2 1.5s ease infinite 0.5s;
}

.shape-3 {
  background-color: #499255;
  left: 20px;
  animation: animationShape3 1.5s ease infinite 0.8s;
}

.shape-4 {
  background-color: #f2b736;
  left: 40px;
  animation: animationShape4 1.5s ease infinite 1s;
}

@keyframes animationShape1 {
  0% {
    transfrom: scale(1);
    opacity: 0.5;
  }

  50% {
    transform: scale(1.5);
    opacity: 1;
  }

  100% {
    transfrom: scale(0.5);
    opacity: 0.5;
  }
}

@keyframes animationShape2 {
  0% {
    transfrom: scale(1);
    opacity: 0.5;
  }

  50% {
    transform: scale(1.5);
    opacity: 1;
  }

  100% {
    transfrom: scale(0.5);
    opacity: 0.5;
  }
}

@keyframes animationShape3 {
  0% {
    transfrom: scale(1);
    opacity: 0.5;
  }

  50% {
    transform: scale(1.5);
    opacity: 1;
  }

  100% {
    transfrom: scale(0.5);
    opacity: 0.5;
  }
}

@keyframes animationShape4 {
  0% {
    transfrom: scale(1);
    opacity: 0.5;
  }

  50% {
    transform: scale(1.5);
    opacity: 1;
  }

  100% {
    transfrom: scale(0.5);
    opacity: 0.5;
  }
}
</style>
