<template>
  <div class="f xc ac rw bdc pt30 mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading"></div>

    <!-- 说明：组件名 -->
    <h4 class="w100 mt20 tc">L8.vue</h4>
  </div>
</template>

<style lang="less" scoped>
.loading {
  margin: 20px;
  position: relative;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: #000;

  animation: ball-rotate 1s 0s cubic-bezier(0.7, -0.13, 0.22, 0.86) infinite;
  animation-fill-mode: both;
}

.loading:before,
.loading:after {
  position: absolute;
  width: 15px;
  height: 15px;
  margin: 2px;
  content: "";
  opacity: 0.8;
  border-radius: 100%;
  background-color: #000;
}

.loading:before {
  top: 0;
  left: -28px;
}

.loading:after {
  top: 0;
  left: 25px;
}

@keyframes ball-rotate {
  0% {
    transform: rotate(0deg) scale(1);
  }

  50% {
    transform: rotate(180deg) scale(0.6);
  }

  100% {
    transform: rotate(360deg) scale(1);
  }
}
</style>
