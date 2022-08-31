<template>
  <div class="rel f xc ac rw bdc mr30 mb30" style="width:140px;height:140px;">
    <!-- loading -->
    <div class="loading"></div>

    <!-- 说明：组件名 -->
    <h4 class="abs l50 tx-50 b0">L65.vue</h4>
  </div>
</template>

<style lang="less" scoped>
.loading {
  display: inline-block;
  width: 30px;
  height: 4px;
  background: #000;
  animation: loading-animation 1.5s linear infinite;
}

@keyframes loading-animation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(720deg);
  }
}
</style>
