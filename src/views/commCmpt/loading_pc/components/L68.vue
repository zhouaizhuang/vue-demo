<template>
  <div class="f xc ac rw bdc pt30 mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="shape shape-4"></div>
    </div>

    <!-- 说明：组件名 -->
    <h4 class="w100 mt20 tc">L68.vue</h4>
  </div>
</template>

<style lang="less" scoped>
.loading {
  width: 30px;
  height: 30px;
  position: relative;
  animation: animationContainer 1s ease infinite;
}

.shape {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
}

.shape-1 {
  background-color: #1875e5;
  left: 0;
  animation: animationShape1 0.5s ease infinite alternate;
}

.shape-2 {
  background-color: #c5523f;
  right: 0;
  animation: animationShape2 0.5s ease infinite alternate;
}

.shape-3 {
  background-color: #499255;
  bottom: 0;
  animation: animationShape3 0.5s ease infinite alternate;
}

.shape-4 {
  background-color: #f2b736;
  right: 0;
  bottom: 0;
  animation: animationShape4 0.5s ease infinite alternate;
}

@keyframes animationContainer {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes animationShape1 {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(20px, 20px);
  }
}

@keyframes animationShape2 {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(-20px, 20px);
  }
}

@keyframes animationShape3 {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(20px, -20px);
  }
}

@keyframes animationShape4 {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(-20px, -20px);
  }
}
</style>
