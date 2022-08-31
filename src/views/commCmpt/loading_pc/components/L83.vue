<template>
  <div class="rel f xc ac rw bdc mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading"></div>

    <!-- 说明：组件名 -->
    <h4 class="abs l50 tx-50 b0">L83.vue</h4>
  </div>
</template>

<style lang="less" scoped>
.loading {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 3px solid;
  border-color: #ddd #ddd transparent transparent;
  animation: rotation 1s linear infinite;
}

.loading:after,
.loading:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border: 3px solid;
  border-color: transparent transparent #ff3d00 #ff3d00;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  -webkit-animation: rotationBack 0.5s linear infinite;
  animation: rotationBack 0.5s linear infinite;
  transform-origin: center center;
}

.loading:before {
  width: 32px;
  height: 32px;
  border-color: #ddd #ddd transparent transparent;
  -webkit-animation: rotation 1.5s linear infinite;
  animation: rotation 1.5s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotationBack {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>
