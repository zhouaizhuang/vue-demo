<template>
  <div class="rel f xc ac rw bdc mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading"></div>

    <!-- 说明：组件名 -->
    <h4 class="abs l50 tx-50 b0">L4.vue</h4>
  </div>
</template>

<style lang="less" scoped>
.loading {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: #000;

  animation: ball-scale infinite linear 0.75s;
}

@keyframes ball-scale {
  0% {
    transform: scale(0.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
