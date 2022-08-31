<template>
  <div class="rel f xc ac rw bdc mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading"></div>

    <!-- 说明：组件名 -->
    <h4 class="abs l50 tx-50 b0">L3.vue</h4>
  </div>
</template>

<style lang="less" scoped>
.loading {
  position: relative;
  width: 30px;
  height: 30px;
  border: 2px solid #000;
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-radius: 100%;

  animation: arrow-circle infinite 0.75s linear;
}

.loading:before,
.loading:after {
  position: absolute;
  top: 24px;
  left: -2px;
  border-top: 5px solid #000;
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  content: "";
  transform: rotate(-30deg);
}
.loading:after {
  top: 0;
  left: 20.5px;

  transform: rotate(150deg);
}

@keyframes arrow-circle {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0);
  }
}
</style>
