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
    <h4 class="w100 mt20 tc">L73.vue</h4>
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
  border-radius: 50%;
  top: 40%;
}

.shape-1 {
  background-color: #1875e5;
  animation: animationShape1 1s ease infinite;
}

.shape-2 {
  background-color: #c5523f;
  left: 10px;
}

.shape-3 {
  background-color: #499255;
  left: 20px;
}

.shape-4 {
  background-color: #f2b736;
  left: 30px;
  animation: animationShape4 1s ease infinite;
}

@keyframes animationShape1 {
  0% {
    left: -15px;
    top: 5px;
  }

  25% {
    left: 0;
    top: 40%;
  }

  50% {
    left: 0;
    top: 40%;
  }

  75% {
    left: 0;
    top: 40%;
  }

  100% {
    left: -15px;
    top: 5px;
  }
}

@keyframes animationShape4 {
  0% {
    left: 30px;
    top: 40%;
  }

  25% {
    left: 30px;
    top: 40%;
  }

  50% {
    left: 45px;
    top: 5px;
  }

  75% {
    left: 30px;
    top: 40%;
  }

  100% {
    left: 30px;
    top: 40%;
  }
}
</style>
